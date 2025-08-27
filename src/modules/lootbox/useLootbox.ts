import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import {
  verificarEnvioHoje,
  enviarMensagem as enviarAPI,
} from "./lootboxService";
import { AuthContext } from "@/context/AuthContext";

// ===== Config =====
const MAX_POR_DIA = 2;

type Carta = { key: string; url: string; filename: string };
type TipoCarta = "coracao" | "flor" | "sol" | "nuvem";

// Coração
const globCoracao = import.meta.glob(
  "@/assets/images/coracao/cartas-coracao-*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;
// Sol
const globSol = import.meta.glob(
  "@/assets/images/sol/cartas-sol-*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;
// Flor
const globFlor = import.meta.glob(
  "@/assets/images/flor/cartas-flor-*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;
// Nuvem
const globNuvem = import.meta.glob(
  "@/assets/images/nuvem/cartas-nuvem-*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
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
  sol: montarDeck(globSol),
  nuvem: montarDeck(globNuvem),
};

// Heurística para decidir o baralho pela opção escolhida
const inferirTipoCarta = (opcao: string): TipoCarta => {
  const txt = (opcao || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (txt.includes("sol") || txt.includes("esperanca")) return "sol";
  if (
    txt.includes("pensamento positivo") ||
    (txt.includes("pensamento") && txt.includes("positivo")) ||
    txt.includes("positivo") ||
    txt.includes("flor")
  )
    return "flor";
  if (txt.includes("empatia") || txt.includes("afeto") || txt.includes("coracao"))
    return "coracao";
  if (txt.includes("nuvem") || txt.includes("saude")) return "nuvem";
  return "coracao";
};

// ================== Hook ==================
export function useMensagem() {
  const [status, setStatus] = useState<string>("");
  const [mensagemSelecionada, setMensagemSelecionada] = useState<string>("");
  const [enviadoHoje, setEnviadoHoje] = useState<boolean>(false);
  const [enviosHoje, setEnviosHoje] = useState<number>(0);
  const { perfil } = useContext(AuthContext);

  // Conta aberturas de hoje (limite diário)
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

  const obterCartasJaEntregues = async (idUsuario: string) => {
    const historico = await verificarEnvioHoje(); // retorna tudo
    const lista = Array.isArray(historico) ? historico : [];
    const usadas = new Set(
      lista
        .filter((r) => String(r.id_ws ?? "") === String(idUsuario ?? ""))
        .map((r) => String(r.nome_carta || "").toLowerCase())
    );
    return usadas;
  };

  const sortearCartaUnica = async (
    tipo: TipoCarta,
    idUsuario: string
  ): Promise<Carta | null> => {
    const usadas = await obterCartasJaEntregues(idUsuario);
    const deck = DECKS[tipo];


    const disponiveis = deck.filter(
      (c) => !usadas.has(c.filename.toLowerCase())
    );

    if (disponiveis.length === 0) {
      return null; 
    }

    const idx = Math.floor(Math.random() * disponiveis.length);
    return disponiveis[idx];
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
      // Decide o baralho pela opção selecionada
      const tipo = inferirTipoCarta(mensagemSelecionada);

      // 🔐 Sorteia uma carta AINDA NÃO ENTREGUE para este usuário (sem repetição)
      const carta = await sortearCartaUnica(tipo, String(perfil.id));

      if (!carta) {
        // Baralho esgotado para este usuário (todas já vistas)
        await Swal.fire({
          icon: "info",
          title: "Sem cartas novas nesse tema",
          text: "Você já recebeu todas as cartas desse tema. Escolha outro tema para continuar.",
          confirmButtonText: "OK",
        });
        setStatus("");
        return; // não salvar repetida
      }

      // Salva no banco o nome da carta escolhida (não repetida)
      await enviarAPI(carta.filename, String(perfil.id));

      // Exibe a MESMA carta no Swal
      await Swal.fire({
        title:
          tipo === "sol"
            ? "Sua esperança ☀️"
            : tipo === "flor"
            ? "Sua esperança 🌸"
            : tipo === "nuvem"
            ? "Sua saúde ☁️"
            : "Sua carta de Empatia & Afeto ❤️",
        text: "Uma mensagem especial para você!",
        imageUrl: carta.url,
        imageAlt: carta.filename,
        imageWidth: 360,
        showConfirmButton: true,
        confirmButtonText: "OK",
      });

      // Atualiza contador/limite
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
