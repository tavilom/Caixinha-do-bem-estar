import api from "@/shared/services/apiService";

export interface Mensagem {
  id: number;
  data_visualizacao: string | null;
  nome_carta: string;
  id_ws: string | null;
}


export async function listarMensagens(): Promise<Mensagem[]> {
  const { data } = await api.get("/mensagem");
  return data as Mensagem[];
}

// POST /mensagem
export async function criarMensagem(
  nome_carta: string,
  id_ws: string
): Promise<Mensagem> {
  const payload = {
    nome_carta,
    id_ws: String(id_ws).trim().slice(0, 100), 
  };

  const { data } = await api.post("/mensagem", payload);
  return data as Mensagem;
}

export async function verificarEnvioHoje(): Promise<Mensagem[]> {
  return listarMensagens();
}

export async function enviarMensagem(
  nome_carta: string,
  id_ws: string
): Promise<void> {
  await criarMensagem(nome_carta, id_ws);
}
