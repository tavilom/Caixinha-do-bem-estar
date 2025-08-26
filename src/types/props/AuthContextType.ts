import { Dispatch, SetStateAction } from "react";
import { Perfil } from "../props/Perfil";


export type AuthContextType = {
  perfil: Perfil;
  setPerfil: Dispatch<SetStateAction<Perfil>>;
}