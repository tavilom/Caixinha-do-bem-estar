import { Theme } from "@mui/material";
import { keyframes } from "@mui/system";

/* ===== Cores do hero (apenas para estilos) ===== */
export const lootColors = {
  pink: "#E88AA7",
  pink2: "#EE9AAE",
  orange: "#F4B041",
  orangeDark: "#D1912E",
  green: "#52D0B0",
  brown: "#5C3B2E",
};

/* ===== Animação usada na imagem selecionada ===== */
export const oscilar = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

/* ===== Layout base (já existia) ===== */
export const mainContainerStyle = {
  backgroundColor: "#D9D9D9",
  minHeight: "140vh",
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
  textAlign: "center" as const,
  marginBottom: 2,
};

/* ===== HERO (sem imagem de background) – só estilos ===== */
export const heroContainerStyle = {
  position: "relative" as const,
  overflow: "hidden",
  py: { xs: 6, sm: 8 },
  px: { xs: 2, sm: 4 },
  textAlign: "center" as const,
  bgcolor: "background.paper",
};

export const heroSquarePinkTL = {
  position: "absolute" as const,
  top: { xs: 18, sm: 24 },
  left: { xs: 14, sm: 32 },
  width: 18,
  height: 18,
  bgcolor: lootColors.pink,
  borderRadius: 1,
};

export const heroSquareOrangeTop = {
  position: "absolute" as const,
  top: { xs: 40, sm: 44 },
  left: "50%",
  transform: "translateX(-50%)",
  width: 28,
  height: 28,
  bgcolor: lootColors.orange,
  borderRadius: 1,
};

export const heroSquarePinkRight = {
  position: "absolute" as const,
  right: { xs: 14, sm: 32 },
  top: { xs: "38%", sm: "34%" },
  width: 28,
  height: 28,
  bgcolor: lootColors.pink2,
  borderRadius: 1,
};

export const heroStripeGreenBottom = {
  position: "absolute" as const,
  left: { xs: -6, sm: 0 },
  bottom: { xs: 8, sm: 12 },
  width: { xs: 96, sm: 128 },
  height: { xs: 28, sm: 36 },
  bgcolor: lootColors.green,
  borderRadius: 1.5,
};

export const heroTitleOutline = {
  fontFamily:
    "'Poppins','M PLUS Rounded 1c','Nunito', system-ui, sans-serif",
  fontWeight: 900,
  fontSize: { xs: 48, sm: 72, md: 96 },
  lineHeight: 1,
  color: "transparent",
  WebkitTextStrokeWidth: "2px",
  WebkitTextStrokeColor: lootColors.orange,
  textTransform: "lowercase" as const,
  letterSpacing: "-0.02em",
};

export const heroSubtitleRow = { display: "inline-flex", alignItems: "center", gap: 1 };
export const heroSubtitleText = {
  fontFamily:
    "'Poppins','M PLUS Rounded 1c','Nunito', system-ui, sans-serif",
  fontWeight: 800,
  fontSize: { xs: 28, sm: 40, md: 48 },
  lineHeight: 1,
  color: lootColors.orange,
};

export const heroCopyContainer = { maxWidth: 900, mx: "auto", color: lootColors.brown, px: { xs: 1, sm: 2 } };
export const heroParagraph = { mb: 1.5 };
export const heroFinalQuestion = { fontWeight: 800 };

/* ===== Estilos dos cards/imagens (sem mudar lógica) ===== */
export const optionButtonBaseStyle = {
  p: 0,
  m: 0,
  bgcolor: "transparent",
  boxShadow: "none",
  border: "none",
  outline: "none",
  "&:hover": { bgcolor: "transparent" },
};

export const optionImageBaseStyle = {
  width: "100%",
  objectFit: "contain" as const,
  display: "block",
  border: "none",
  transition: "transform .2s ease, filter .2s ease, box-shadow .2s ease",
};

export const optionImageMobileSize = { height: 160 };
export const optionImageDesktopSize = { width: 220, height: 220 };

export const optionImageHoverStyle = {
  "&:hover": { transform: "translateY(-6px) scale(1.04)", filter: "brightness(1.05)" },
};

export const optionImageSelectedStyle = {
  willChange: "transform",
  "&:hover": { filter: "brightness(1.08)" },
};

export const selectedWiggle = (prefersReducedMotion: boolean) =>
  prefersReducedMotion ? {} : { animation: `${oscilar} 1s ease-in-out infinite` };

/* ===== estilos já existentes (mantidos) ===== */
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
  flexDirection: "column" as const,
  textAlign: "center" as const,
  py: 1,
};

export const gridDesktopStyle = {
  display: "flex",
  flexWrap: "wrap" as const,
  justifyContent: "center",
  gap: 1,
  mt: 2,
  mb: 2,
};

export const buttonSelectedStyle = (theme: Theme) => ({
  bgcolor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
});

export const toggleButtonBase = { px: 3, mx: 1 };

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
  textAlign: "center" as const,
};

export const comentarioTituloStyle = {
  fontSize: { xs: "1rem", md: "1.2rem" },
  mb: 1,
  textAlign: "center" as const,
};

export const buttonEnviarStyle = {
  mt: 3,
  fontSize: { xs: "0.9rem", md: "1rem" },
  px: 4,
};

export const statusTextStyle = {
  mt: 2,
  textAlign: "center" as const,
};


// --- imagem do título 
export const heroBrandWrap = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: { xs: 2, sm: 3 },
};

export const heroBrandImg = {
  width: { xs: "92%", sm: "720px", md: "900px" },
  maxWidth: "100%",
  height: "auto",
  display: "block",
};
