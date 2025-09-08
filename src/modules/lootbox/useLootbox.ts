import { useState, useEffect, useContext, useCallback } from "react";
import Swal from "sweetalert2";
import {
  verificarEnvioHoje,
  enviarMensagem as enviarAPI,
} from "./lootboxService";
import { AuthContext } from "@/context/AuthContext";


const MAX_POR_DIA = 2;

type Carta = { key: string; url: string; filename: string };
type TipoCarta = "coracao" | "flor" | "sol" | "nuvem";


const globCoracao = import.meta.glob(
  "@/assets/images/coracao/cartas-coracao-*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;

const globSol = import.meta.glob(
  "@/assets/images/sol/cartas-sol-*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;

const globFlor = import.meta.glob(
  "@/assets/images/flor/cartas-flor-*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;

const globNuvem = import.meta.glob(
  "@/assets/images/nuvem/cartas-nuvem-*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;


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


export function useMensagem() {
  const [status, setStatus] = useState<string>("");
  const [selecionadas, setSelecionadas] = useState<string[]>([]);
  const [enviadoHoje, setEnviadoHoje] = useState<boolean>(false);
  const [enviosHoje, setEnviosHoje] = useState<number>(0);
  const { perfil } = useContext(AuthContext);


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


        if (!limite && count === MAX_POR_DIA - 1) {
          setStatus("Você pode abrir mais uma caixinha.");
        }
      } catch (error) {
        console.error("Erro ao verificar envio:", error);
      }
    })();
  }, [perfil?.id]);


  const obterCartasJaEntregues = async (idUsuario: string) => {
    const historico = await verificarEnvioHoje(); 
    const lista = Array.isArray(historico) ? historico : [];
    const usadas = new Set(
      lista
        .filter((r) => String(r.id_ws ?? "") === String(idUsuario ?? ""))
        .map((r) => String(r.nome_carta || "").toLowerCase())
    );
    return usadas;
  };


  const sortearCartaComUsadas = (
    tipo: TipoCarta,
    usadas: Set<string>
  ): Carta | null => {
    const deck = DECKS[tipo];
    const disponiveis = deck.filter(
      (c) => !usadas.has(c.filename.toLowerCase())
    );
    if (disponiveis.length === 0) return null;
    const idx = Math.floor(Math.random() * disponiveis.length);
    return disponiveis[idx];
  };


  const restantesHoje = Math.max(MAX_POR_DIA - enviosHoje, 0);

  const toggleOpcao = useCallback(
    (label: string) => {
      if (enviadoHoje) {
        Swal.fire({
          icon: "error",
          title: "Atenção",
          text: `Você já abriu suas ${MAX_POR_DIA} caixinhas hoje.`,
          confirmButtonText: "OK",
        });
        return;
      }
      setSelecionadas((prev) => {
        const jaSelecionada = prev.includes(label);
        if (jaSelecionada) {

          return prev.filter((l) => l !== label);
        }

        if (prev.length >= restantesHoje) {
          Swal.fire({
            icon: "info",
            title: "Limite de seleção",
            text:
              restantesHoje > 0
                ? `Você pode abrir mais ${restantesHoje} caixinha(s) hoje.`
                : "Você já atingiu o limite de hoje.",
            confirmButtonText: "OK",
          });
          return prev;
        }
        return [...prev, label];
      });
    },
    [enviadoHoje, restantesHoje]
  );


  const enviarMensagens = useCallback(async () => {
    if (selecionadas.length === 0) {
      setStatus("Selecione ao menos 1 caixinha.");
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

    const restantes = Math.max(MAX_POR_DIA - enviosHoje, 0);
    if (selecionadas.length > restantes) {
      setStatus(
        `Você pode abrir mais ${restantes} caixinha(s) hoje. Ajuste sua seleção.`
      );
      Swal.fire({
        icon: "info",
        title: "Seleção acima do limite",
        text: `Você pode abrir mais ${restantes} caixinha(s) hoje.`,
        confirmButtonText: "OK",
      });
      return;
    }

    setStatus("Abrindo suas caixinhas...");

    try {

      const usadas = await obterCartasJaEntregues(String(perfil.id));

      let abertasAgora = 0;

   
      for (const label of selecionadas) {
        const tipo = inferirTipoCarta(label);

        const carta = sortearCartaComUsadas(tipo, usadas);
        if (!carta) {
          await Swal.fire({
            icon: "info",
            title: "Sem cartas novas nesse tema",
            text: "Você já recebeu todas as cartas desse tema. Escolha outro tema para continuar.",
            confirmButtonText: "OK",
          });
          continue;
        }


        await enviarAPI(carta.filename, String(perfil.id));
        usadas.add(carta.filename.toLowerCase());
        abertasAgora++;

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
      }


      const novoCount = enviosHoje + abertasAgora;
      setEnviosHoje(novoCount);
      setEnviadoHoje(novoCount >= MAX_POR_DIA);


      setSelecionadas([]);


      if (abertasAgora > 0) {
        const rest = Math.max(MAX_POR_DIA - novoCount, 0);
        if (rest > 0) {
          setStatus("Você pode abrir mais uma caixinha.");
        } else {
          setStatus("Suas mensagens foram abertas com sucesso! 💚");
        }
      } else {
        setStatus("");
      }
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
  }, [selecionadas, perfil?.id, enviosHoje]);


  const limiteDiario = MAX_POR_DIA;
  const abertasHoje = enviosHoje;

  return {

    status,
    selecionadas,
    enviadoHoje,
    enviosHoje,
    abertasHoje,
    limiteDiario,
    toggleOpcao,
    enviarMensagens,
    perfil,
  };
}
