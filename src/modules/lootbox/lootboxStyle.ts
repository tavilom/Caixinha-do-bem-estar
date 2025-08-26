import { Theme } from "@mui/material";
export const mainContainerStyle = {
  backgroundColor: "#D9D9D9",
  minHeight: "100vh",
};

export const paperStyle = {
  m: { xs: 2, md: 10 },
  p: { xs: 2, md: 4 },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const tituloStyle = {
  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
  textAlign: "center",
  marginBottom: 2,
};

export const gridMobileStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 2,
  width: "100%",
  mt: 3,
};

export const buttonMobileStyle = {
  height: 60,
  fontSize: "0.9rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  py: 1,
};

export const gridDesktopStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 1,
  mt: 2,
  mb: 2,
};

export const buttonSelectedStyle = (theme: Theme) => ({
  bgcolor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
});

export const toggleButtonBase = {
  px: 3,
  mx: 1,
};


export const toggleNaoStyle = (theme: Theme) => ({
  ...toggleButtonBase,
  "&.Mui-selected, &.Mui-selected:hover": {
    bgcolor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
});

export const toggleSimStyle = (theme: Theme) => ({
  ...toggleButtonBase,
  "&.Mui-selected, &.Mui-selected:hover": {
    bgcolor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
});

export const buttonDesktopStyle = {
  minWidth: "110px",
  fontSize: { xs: "0.8rem", sm: "1rem" },
};

export const mensagemSelecionadoStyle = {
  mt: 2,
  fontSize: { xs: "1rem", md: "1.2rem" },
  textAlign: "center",
};

export const comentarioTituloStyle = {
  fontSize: { xs: "1rem", md: "1.2rem" },
  mb: 1,
  textAlign: "center",
};

export const buttonEnviarStyle = {
  mt: 3,
  fontSize: { xs: "0.9rem", md: "1rem" },
  px: 4,
};

export const statusTextStyle = {
  mt: 2,
  textAlign: "center",
};
