// src/modules/lootbox/LootboxPage.tsx
import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
  ButtonBase, // <-- IMPORTADO AQUI
} from "@mui/material";

import { useMensagem } from "./useLootbox";
import Navbar from "@/modules/lootbox/components/Navbar";
import Logo from "@/assets/images/logo_unimed.png";
import Logo2 from "@/assets/images/pinheiro.jpg";

import Img1 from "@/assets/images/empatia.jpg";
import Img2 from "@/assets/images/esperaca.jpg";
import Img3 from "@/assets/images/positvo.jpg";
import Img4 from "@/assets/images/saude.jpg";

import {
  mainContainerStyle,
  paperStyle,
  tituloStyle,
  gridMobileStyle,
  gridDesktopStyle,
  mensagemSelecionadoStyle,
  buttonEnviarStyle,
  statusTextStyle,
} from "@/modules/lootbox/lootboxStyle";

const opcoes = [
  { label: "Opção 1", src: Img1 },
  { label: "Opção 2", src: Img2 },
  { label: "Opção 3", src: Img3 },
  { label: "Opção 4", src: Img4 },
];

export default function LootboxPage() {
  const {
    status,
    mensagemSelecionada,
    enviadoHoje,
    handleClickMensagem,
    enviarMensagem,
  } = useMensagem();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component="main" sx={mainContainerStyle}>
      <Navbar Logo={Logo} Logo2={Logo2} />

      <Paper elevation={5} sx={paperStyle}>
        <Typography variant="h1" sx={tituloStyle}>
          Selecione uma caixinha para abrir e descubra sua mensagem!
        </Typography>

        {isMobile ? (
          <Box sx={gridMobileStyle}>
            {opcoes.map(({ label, src }) => (
              <ButtonBase
                key={label}
                aria-label={label}
                onClick={() => handleClickMensagem(label)}
                disableRipple
                sx={{
                  p: 0,
                  m: 0,
                  bgcolor: "transparent",
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  "&:hover": { bgcolor: "transparent" },
                }}
              >
                <img
                  src={src}
                  alt={label}
                  style={{
                    width: "100%",
                    height: 100,
                    objectFit: "contain",
                    display: "block",
                    border: "none",
                  }}
                />
              </ButtonBase>
            ))}
          </Box>
        ) : (
          <Box sx={gridDesktopStyle}>
            {opcoes.map(({ label, src }) => (
              <ButtonBase
                key={label}
                aria-label={label}
                onClick={() => handleClickMensagem(label)}
                disableRipple
                sx={{
                  p: 0,
                  m: 0,
                  bgcolor: "transparent",
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  "&:hover": { bgcolor: "transparent" },
                }}
              >
                <img
                  src={src}
                  alt={label}
                  style={{
                    width: 250,
                    height: 250,
                    objectFit: "contain",
                    display: "block",
                    border: "none",
                  }}
                />
              </ButtonBase>
            ))}
          </Box>
        )}

        {/* Seleção atual (opcional) */}
        {mensagemSelecionada && (
          <Typography variant="h6" sx={mensagemSelecionadoStyle}>
            Você selecionou: {mensagemSelecionada}
          </Typography>
        )}

        {/* Enviar e status */}
        <Button
          variant="contained"
          sx={buttonEnviarStyle}
          onClick={enviarMensagem}
          disabled={!mensagemSelecionada || enviadoHoje}
        >
          Abrir caixinha
        </Button>
        {status && <Typography sx={statusTextStyle}>{status}</Typography>}
      </Paper>
    </Box>
  );
}
