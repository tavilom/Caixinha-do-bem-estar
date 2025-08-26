import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import {
  verificarEnvioHoje,
  enviarMensagem as enviarAPI, // (nome_carta: string, id_ws: string)
} from "./lootboxService";
import { AuthContext } from "@/context/AuthContext";

// ⚙️ novo limite por dia
const MAX_POR_DIA = 2;

// 📁 cartas: "@/assets/images/coracao/cartas-coracao-*.{png,jpg,jpeg,webp}"
const globCoracao = import.meta.glob(
  "@/assets/images/coracao/cartas-coracao-*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
) as Record<string, string>;

type Carta = { key: string; url: string; filename: string };
const cartasCoracao: Carta[] = Object.entries(globCoracao)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, url]) => ({
    key,
    url,
    filename: key.split("/").pop() || key,
  }));

const sortearCarta = (): Carta | null => {
  if (!cartasCoracao.length) return null;
  const idx = Math.floor(Math.random() * cartasCoracao.length);
  return cartasCoracao[idx];
};

export function useMensagem() {
  const [status, setStatus] = useState<string>("");
  const [mensagemSelecionada, setMensagemSelecionada] = useState<string>("");
  const [enviadoHoje, setEnviadoHoje] = useState<boolean>(false); // agora significa "atingiu o limite (2)"
  const [enviosHoje, setEnviosHoje] = useState<number>(0);        // contador do dia
  const { perfil } = useContext(AuthContext);

  // 🔎 calcula envios de HOJE para o usuário e marca limite quando chegar a 2
  useEffect(() => {
    if (!perfil?.id) return;

    (async () => {
      try {
        const hojeYmd = new Date()
          .toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })
          .split("/")
          .reverse()
          .join("-");

        const data = await verificarEnvioHoje();
        const lista = Array.isArray(data) ? data : [];

        const count = lista.filter((registro) => {
          if (!registro?.data_visualizacao) return false;

          const dataRegistro = new Date(registro.data_visualizacao)
            .toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })
            .split("/")
            .reverse()
            .join("-");

          const mesmoUsuario =
            String(registro.id_ws ?? "") === String(perfil.id ?? "");

          return dataRegistro === hojeYmd && mesmoUsuario;
        }).length;

        setEnviosHoje(count);
        const limite = count >= MAX_POR_DIA;
        setEnviadoHoje(limite);

        if (limite) {
          Swal.fire({
            icon: "info",
            title: "Limite diário atingido",
            text: `Você já abriu suas ${MAX_POR_DIA} caixinhas hoje.`,
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Erro ao verificar envio:", error);
      }
    })();
  }, [perfil?.id]);

  const handleClickMensagem = (label: string) => {
    if (enviadoHoje) {
      Swal.fire({
        icon: "error",
        title: "Atenção",
        text: `Você já abriu suas ${MAX_POR_DIA} caixinhas hoje.`,
        confirmButtonText: "OK",
      });
      return;
    }
    setMensagemSelecionada(label);
  };

  const enviarMensagem = async () => {
    if (!mensagemSelecionada) {
      setStatus("Selecione uma mensagem antes de enviar.");
      return;
    }

    if (!perfil?.id) {
      setStatus("Não foi possível identificar seu perfil. Faça login novamente.");
      Swal.fire({
        icon: "warning",
        title: "Sessão expirada",
        text: "Faça login novamente para enviar a mensagem.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (enviosHoje >= MAX_POR_DIA) {
      setEnviadoHoje(true);
      setStatus(`Você já abriu suas ${MAX_POR_DIA} caixinhas hoje.`);
      Swal.fire({
        icon: "info",
        title: "Limite diário atingido",
        text: `Você já abriu suas ${MAX_POR_DIA} caixinhas hoje.`,
        confirmButtonText: "OK",
      });
      return;
    }

    setStatus("Enviando...");

    try {
      // sorteia a carta, salva o NOME no banco e mostra a MESMA imagem no Swal
      const carta = sortearCarta();

      if (!carta) {
        // fallback: sem imagens
        await enviarAPI("cartas-coracao-00.jpg", String(perfil.id));
        await Swal.fire({
          icon: "success",
          title: "Pronto!",
          text: "Mensagem enviada com sucesso.",
          confirmButtonText: "OK",
        });
      } else {
        await enviarAPI(carta.filename, String(perfil.id));

        await Swal.fire({
          title: "Sua carta ❤️",
          text: "Uma mensagem especial para você!",
          imageUrl: carta.url,
          imageAlt: carta.filename,
          imageWidth: 360,
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
      }

      // ✅ atualiza contador/local-state após sucesso
      const novoCount = enviosHoje + 1;
      setEnviosHoje(novoCount);
      const limiteAtingido = novoCount >= MAX_POR_DIA;
      setEnviadoHoje(limiteAtingido);

      setStatus("");
    } catch (error: any) {
      console.error(error);
      setStatus("Erro ao conectar com o servidor.");
      Swal.fire({
        icon: "error",
        title: "Falha no envio",
        text: error?.message || "Erro ao conectar com o servidor.",
        confirmButtonText: "OK",
      });
    }
  };

  return {
    status,
    mensagemSelecionada,
    setMensagemSelecionada,
    enviadoHoje,     
    handleClickMensagem,
    enviarMensagem,
    perfil,
  };
}
