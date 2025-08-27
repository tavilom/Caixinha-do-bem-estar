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
import Caixinha from "@/assets/images/caixinha-bem-estar-texto.jpg";
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
  // styles
  heroContainerStyle,
  heroSquarePinkTL,
  heroSquareOrangeTop,
  heroSquarePinkRight,
  heroStripeGreenBottom,
  heroBrandImg,
  heroBrandWrap,
  heroCopyContainer,
  heroParagraph,
  heroFinalQuestion,
  // image styles
  optionButtonBaseStyle,
  optionImageBaseStyle,
  optionImageMobileSize,
  optionImageDesktopSize,
  optionImageHoverStyle,
  optionImageSelectedStyle,
  selectedWiggle,
} from "@/modules/lootbox/lootboxStyle";

const opcoes = [
  { label: "Empatia & Afeto", src: Img1 },
  { label: "Esperança", src: Img2 },
  { label: "Pensamento Positivo", src: Img3 },
  { label: "Saúde", src: Img4 },
];

function HeroBanner() {
  return (
    <Box sx={heroContainerStyle}>
      <Box sx={heroSquarePinkTL} />
      <Box sx={heroSquareOrangeTop} />
      <Box sx={heroSquarePinkRight} />
      <Box sx={heroStripeGreenBottom} />

      <Box sx={heroBrandWrap}>
        <Box
          component="img"
          src={Caixinha}
          alt="Caixinha do bem-estar"
          loading="eager"
          decoding="async"
          draggable={false}
          sx={heroBrandImg}
        />
      </Box>

      <Box sx={heroCopyContainer}>
        <Typography sx={heroParagraph}>
          Todos nós carregamos pequenas <strong>“caixinhas da vida”</strong>:
          lugares onde guardamos emoções, lembranças e sentidos. Algumas pesam,
          outras fortalecem.
        </Typography>
        <Typography sx={heroParagraph}>
          A <strong>Caixinha do Bem-Estar</strong> é um convite para abrir
          espaço ao que faz bem, para dar atenção ao que traz sentido e leveza
          ao seu dia.
        </Typography>
        <Typography sx={heroParagraph}>
          Aqui, você pode abrir até duas caixinhas por dia e encontrar mensagens
          que acolhem, inspiram e lembram você de cuidar de si.
        </Typography>
        <Typography sx={heroFinalQuestion}>
          E hoje, qual caixinha você quer abrir?
        </Typography>
      </Box>
    </Box>
  );
}

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
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );

  return (
    <Box component="main" sx={mainContainerStyle}>
      <Navbar Logo={Logo} Logo2={Logo2} />

      <Paper elevation={5} sx={paperStyle}>
        {/* HERO sem bg image */}
        <HeroBanner />

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
                sx={optionButtonBaseStyle}
              >
                <Box
                  component="img"
                  src={src}
                  alt={label}
                  sx={{
                    ...optionImageBaseStyle,
                    ...optionImageMobileSize,
                    ...(mensagemSelecionada === label
                      ? {
                          ...optionImageSelectedStyle,
                          ...selectedWiggle(prefersReducedMotion),
                        }
                      : optionImageHoverStyle),
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
                sx={optionButtonBaseStyle}
              >
                <Box
                  component="img"
                  src={src}
                  alt={label}
                  sx={{
                    ...optionImageBaseStyle,
                    ...optionImageDesktopSize,
                    ...(mensagemSelecionada === label
                      ? {
                          ...optionImageSelectedStyle,
                          ...selectedWiggle(prefersReducedMotion),
                        }
                      : optionImageHoverStyle),
                  }}
                />
              </ButtonBase>
            ))}
          </Box>
        )}

        {mensagemSelecionada && (
          <Typography variant="h6" sx={mensagemSelecionadoStyle}>
            Você selecionou: {mensagemSelecionada}
          </Typography>
        )}

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
