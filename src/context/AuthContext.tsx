//@refresh reset
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  JSX
} from "react";
import useAcessos from "@/shared/hooks/useAcessos";
import { CircularProgress, Box } from "@mui/material";

// --- 1) Definições de tipo -------------------------------------------------

export interface Perfil {
  usuario?: string;
  permissoes?: string;
  [key: string]: string | undefined;
}

export interface AuthContextType {
  perfil: Perfil;
  setPerfil: Dispatch<SetStateAction<Perfil>>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

// --- 2) Criação do Contexto -----------------------------------------------

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// --- 3) Provider -----------------------------------------------------------

export function AuthContextProvider({
  children
}: AuthContextProviderProps): JSX.Element {
  // Função para extrair parâmetros da URL
  function getURLParameters(): Perfil {
    const params = new URLSearchParams(window.location.search);
    const result: Perfil = {};
    params.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }

  const urlPerfil = getURLParameters();

  // Chave única para armazenar no localStorage
  const STORAGE_KEY = "termometro_humor";
  const storedJSON = localStorage.getItem(STORAGE_KEY);
  const storedPerfil: Perfil = storedJSON ? JSON.parse(storedJSON) : {};

  // Perfil inicial: prioriza URL, senão localStorage
  const [perfil, setPerfil] = useState<Perfil>(
    Object.keys(urlPerfil).length > 0 ? urlPerfil : storedPerfil
  );

  // Estado de "pronto" indica que já limpamos a URL
  const [ready, setReady] = useState(false);

  // Hook que traz a lista de acessos (usuários + permissões)
  const { acesso, loadingAcesso } = useAcessos();

  // --- 3.1) Limpar query string da URL uma única vez
  useEffect(() => {
    if (Object.keys(urlPerfil).length > 0) {
      const u = new URL(window.location.href);
      u.search = "";
      window.history.replaceState({}, document.title, u.toString());
    }
    setReady(true);
  }, []); // roda só no mount

  // --- 3.2) Persistir perfil ou redirecionar
  useEffect(() => {
    if (!ready) return; // só após limpar a URL

    if (perfil.usuario) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(perfil));
    } else {
      // sem usuário válido, voltar ao WS de autenticação
      window.location.href = "https://ws2.unimedpelotas.com.br/ws/";
    }
  }, [perfil, ready]);

  // --- 3.3) Sincronizar permissões vindas do serviço de acessos
  useEffect(() => {
    if (!loadingAcesso && perfil.usuario) {
      const match = acesso?.find((a) => a.usuario === perfil.usuario);
      if (match && match.permissoes !== perfil.permissoes) {
        setPerfil((prev) => ({
          ...prev,
          permissoes: match.permissoes
        }));
      }
    }
  }, [acesso, loadingAcesso, perfil.usuario]);

  // --- 4) Mostrar loader até tudo ficar pronto -----------------------------
  if (!ready || loadingAcesso) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // --- 5) Renderizar provider com o perfil carregado -----------------------
  return (
    <AuthContext.Provider value={{ perfil, setPerfil }}>
      {children}
    </AuthContext.Provider>
  );
}
