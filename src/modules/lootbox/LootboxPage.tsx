import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
  ButtonBase,
} from "@mui/material";

import { useMensagem } from "./useLootbox";
import Navbar from "@/modules/lootbox/components/Navbar";
import Logo from "@/assets/images/logo_unimed.png";
import Logo2 from "@/assets/images/pinheiro.jpg";

import Img1 from "@/assets/images/empatia.jpg";
import Img2 from "@/assets/images/esperaca.jpg";
import Img3 from "@/assets/images/positvo.jpg";
import Img4 from "@/assets/images/saude.jpg";

import { keyframes } from "@mui/system";

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
  { label: "Empatia & Afeto", src: Img1 },
  { label: "Esperança", src: Img2 },
  { label: "Pensamento Positivo", src: Img3 },
  { label: "Saúde", src: Img4 },
];

const oscilar = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

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
          Selecione duas caixinhas para abrir e descubra sua mensagem!
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
                <Box
                  component="img"
                  src={src}
                  alt={label}
                  sx={{
                    width: "100%",
                    height: 160, // tamanho mobile
                    objectFit: "contain",
                    display: "block",
                    border: "none",
                    transition:
                      "transform .2s ease, filter .2s ease, box-shadow .2s ease",
                    ...(mensagemSelecionada === label
                      ? {
                          animation: `${oscilar} 1s ease-in-out infinite`,
                          willChange: "transform",
                          "&:hover": { filter: "brightness(1.08)" }, // não interfere no transform da animação
                        }
                      : {
                          "&:hover": {
                            transform: "translateY(-6px) scale(1.04)",
                            filter: "brightness(1.05)",
                          },
                        }),
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
                <Box
                  component="img"
                  src={src}
                  alt={label}
                  sx={{
                    width: 220,
                    height: 220, // tamanho desktop
                    objectFit: "contain",
                    display: "block",
                    border: "none",
                    transition:
                      "transform .2s ease, filter .2s ease, box-shadow .2s ease",
                    ...(mensagemSelecionada === label
                      ? {
                          animation: `${oscilar} 1s ease-in-out infinite`,
                          willChange: "transform",
                          "&:hover": { filter: "brightness(1.08)" },
                        }
                      : {
                          "&:hover": {
                            transform: "translateY(-6px) scale(1.04)",
                            filter: "brightness(1.05)",
                          },
                        }),
                  }}
                />
              </ButtonBase>
            ))}
          </Box>
        )}

        {/* Seleção atual */}
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
