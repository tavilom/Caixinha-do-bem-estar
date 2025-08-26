import { useState, useEffect } from "react";
import axios from "axios";
import { Acesso } from "@/types/Acesso";

const useAcessos = () => {
  const [acesso, setAcesso] = useState<Acesso[]>([]);
  const [loadingAcesso, setLoadingAcesso] = useState(true);
  const [errorAcesso, setErrorAcesso] = useState<string>("");

  // Pegando valores do .env
  const apiUrl = import.meta.env.VITE_API_URL; // USAR EM PRODUÇÃO 
  //const apiUrl = import.meta.env.VITE_API_LOCAL_URL;
  const username = import.meta.env.VITE_USERNAME;
  const password = import.meta.env.VITE_PASSWORD;

  useEffect(() => {
    const fetchAcesso = async () => {
      try {
        // monta o header de Basic Auth
        const authHeader = "Basic " + btoa(`${username}:${password}`);

        // faz a requisição com axios.get()
        const response = await axios.get<{ lista: Acesso[] }>(
          `${apiUrl}/acesso/acessos/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: authHeader,
            },
          }
        );

        // axios retorna os dados em response.data
        setAcesso(response.data.lista);
      } catch (err: any) {
        // tratamento de erro específico do axios
        if (axios.isAxiosError(err)) {
          setErrorAcesso(
            err.response?.data?.message || `${err.response?.status} - ${err.message}`
          );
        } else {
          setErrorAcesso(err.message);
        }
      } finally {
        setLoadingAcesso(false);
      }
    };

    fetchAcesso();
  }, [apiUrl, username, password]);

  return { acesso, loadingAcesso, errorAcesso };
};

export default useAcessos;
