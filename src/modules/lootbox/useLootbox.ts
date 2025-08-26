import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import {
  verificarEnvioHoje,
  enviarMensagem as enviarAPI, // (nome_carta: string, id_ws: string)
} from "./lootboxService";
import { AuthContext } from "@/context/AuthContext";

// ===== Config =====
const MAX_POR_DIA = 2;

type Carta = { key: string; url: string; filename: string };
type TipoCarta = "coracao" | "flor";

// Coração
const globCoracao = import.meta.glob(
  "@/assets/images/coracao/cartas-coracao-*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;

// Flor
const globFlor = import.meta.glob(
  "@/assets/images/flor/cartas-flor-*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;

// Monta baralho a partir do glob
const montarDeck = (globMap: Record<string, string>): Carta[] =>
  Object.entries(globMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, url]) => ({
      key,
      url,
      filename: key.split("/").pop() || key,
    }));

const DECKS: Record<TipoCarta, Carta[]> = {
  coracao: montarDeck(globCoracao),
  flor: montarDeck(globFlor),
};

// Sorteia 1 carta do baralho
const sortearCarta = (tipo: TipoCarta): Carta | null => {
  const deck = DECKS[tipo];
  if (!deck?.length) return null;
  const idx = Math.floor(Math.random() * deck.length);
  return deck[idx];
};

// Heurística para decidir o baralho pela opção escolhida
const inferirTipoCarta = (opcao: string): TipoCarta => {
  const txt = (opcao || "").toLowerCase();
  if (txt.includes("flor")) return "flor";
  if (txt.includes("coração") || txt.includes("coracao")) return "coracao";
  // fallback por rótulo padrão
  if (opcao === "Esperança") return "flor";
  return "coracao";
};

// ================== Hook ==================
export function useMensagem() {
  const [status, setStatus] = useState<string>("");
  const [mensagemSelecionada, setMensagemSelecionada] = useState<string>("");
  const [enviadoHoje, setEnviadoHoje] = useState<boolean>(false); 
  const [enviosHoje, setEnviosHoje] = useState<number>(0);
  const { perfil } = useContext(AuthContext);

  // Conta aberturas de hoje
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
      // 1) Decide o baralho (coração ou flor) pela opção selecionada
      const tipo = inferirTipoCarta(mensagemSelecionada);

      // 2) Sorteia a carta e salva o NOME do arquivo no banco
      const carta = sortearCarta(tipo);

      if (!carta) {
        // fallback quando não houver imagens no deck
        const nomeFallback = tipo === "flor" ? "cartas-flor-00.jpg" : "cartas-coracao-00.jpg";
        await enviarAPI(nomeFallback, String(perfil.id));
        await Swal.fire({
          icon: "success",
          title: "Pronto!",
          text: "Mensagem enviada com sucesso.",
          confirmButtonText: "OK",
        });
      } else {
        await enviarAPI(carta.filename, String(perfil.id));

        // 3) Mostra a MESMA carta no Swal
        await Swal.fire({
          title: tipo === "flor" ? "Sua flor 🌸" : "Sua carta ❤️",
          text: "Uma mensagem especial para você!",
          imageUrl: carta.url,
          imageAlt: carta.filename,
          imageWidth: 360,
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
      }

      // 4) Atualiza contador/limite local
      const novoCount = enviosHoje + 1;
      setEnviosHoje(novoCount);
      setEnviadoHoje(novoCount >= MAX_POR_DIA);
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
