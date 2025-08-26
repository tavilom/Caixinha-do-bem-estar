
import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import {
  verificarEnvioHoje,                
  enviarMensagem as enviarAPI,      
} from "./lootboxService";
import { AuthContext } from "@/context/AuthContext";

export function useMensagem() {
  const [status, setStatus] = useState<string>("");
  const [mensagemSelecionada, setMensagemSelecionada] = useState<string>("");
  const [enviadoHoje, setEnviadoHoje] = useState<boolean>(false);
  const { perfil } = useContext(AuthContext);

  useEffect(() => {
    if (!perfil?.id) return;

    (async () => {
      try {
        // data de hoje (YYYY-MM-DD) no fuso de São Paulo
        const hoje = new Date()
          .toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })
          .split("/")
          .reverse()
          .join("-");

        const data = await verificarEnvioHoje(); 

        const enviado = data.some((registro) => {
          if (!registro.data_visualizacao) return false;

          const dataRegistro = new Date(registro.data_visualizacao)
            .toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })
            .split("/")
            .reverse()
            .join("-");

          const mesmoUsuario =
            String(registro.id_ws ?? "") === String(perfil.id ?? "");

          return dataRegistro === hoje && mesmoUsuario;
        });

        if (enviado) {
          setEnviadoHoje(true);
          Swal.fire({
            icon: "info",
            title: "Já enviado",
            text: "Você já enviou sua mensagem hoje.",
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
        text: "Você já enviou sua mensagem hoje.",
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

    if (enviadoHoje) {
      setStatus("Você já enviou sua mensagem hoje.");
      return;
    }

    setStatus("Enviando...");

    try {
      await enviarAPI(mensagemSelecionada, String(perfil!.id!));

      Swal.fire({
        icon: "success",
        title: "Pronto!",
        text: `Mensagem "${mensagemSelecionada}" enviada com sucesso.`,
        confirmButtonText: "OK",
      });

      setStatus("");
      setEnviadoHoje(true);
    } catch (error) {
      setStatus("Erro ao conectar com o servidor.");
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

