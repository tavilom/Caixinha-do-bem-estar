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

import marcadagua from "@/assets/images/marcadagua.png";
import Caixinha from "@/assets/images/caixinha-bem-estar-texto.jpg";
import Img1 from "@/assets/images/empatia.jpg";
import Img2 from "@/assets/images/esperaca.jpg";
import Img3 from "@/assets/images/positvo.jpg";
import Img4 from "@/assets/images/saude.jpg";

import {
  mainContainerStyle,
  paperStyle,
  //tituloDestaqueContorno,
  gridMobileStyle,
  gridDesktopStyle,
  buttonEnviarStyle,
  statusTextStyle,
  secaoDestaqueContainer,
  decoQuadradoRosaSupEsq,
  decoQuadradoLaranjaTopoCentro,
  decoQuadradoRosaDireita,
  decoFaixaVerdeInferior,
  marcaImagemTitulo,
  marcaContainerTitulo,
  textoIntroContainer,
  paragrafoIntro,
  perguntaFinalDestaque,
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
    <Box sx={secaoDestaqueContainer}>
      <Box sx={decoQuadradoRosaSupEsq} />
      <Box sx={decoQuadradoLaranjaTopoCentro} />
      <Box sx={decoQuadradoRosaDireita} />
      <Box sx={decoFaixaVerdeInferior} />

      <Box sx={marcaContainerTitulo}>
        <Box
          component="img"
          src={Caixinha}
          alt="Caixinha do bem-estar"
          loading="eager"
          decoding="async"
          draggable={false}
          sx={marcaImagemTitulo}
        />
      </Box>

      <Box sx={textoIntroContainer}>
        <Typography sx={paragrafoIntro}>
          Todos nós carregamos pequenas <strong>“caixinhas da vida”</strong>:
          lugares onde guardamos emoções, lembranças e sentidos. Algumas pesam,
          outras fortalecem.
        </Typography>
        <Typography sx={paragrafoIntro}>
          A <strong>Caixinha do Bem-Estar</strong> é um convite para abrir
          espaço ao que faz bem, para dar atenção ao que traz sentido e leveza
          ao seu dia.
        </Typography>
        <Typography sx={paragrafoIntro}>
          Aqui, você pode abrir até duas caixinhas por dia e encontrar mensagens
          que acolhem, inspiram e lembram você de cuidar de si.
        </Typography>
        <Typography sx={perguntaFinalDestaque}>
          E hoje, qual caixinha você quer abrir?
        </Typography>
        <Typography sx={perguntaFinalDestaque}>
          Você pode abrir até duas caixinhas por dia
        </Typography>
      </Box>
    </Box>
  );
}

export default function LootboxPage() {
  const {
    status,
    selecionadas,
    abertasHoje,
    limiteDiario,
    enviadoHoje,
    toggleOpcao,
    enviarMensagens,
  } = useMensagem();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
    {
      noSsr: true,
    }
  );

  const restantesHoje = Math.max(limiteDiario - abertasHoje, 0);
  const podeSelecionarMais = selecionadas.length < restantesHoje;
  const jaAtingiuLimite = restantesHoje === 0;

  const handleClickMensagem = (label: string) => {
    const jaSelecionada = selecionadas.includes(label);
    if (jaSelecionada || podeSelecionarMais) toggleOpcao(label);
  };

  const botaoDesabilitado =
    selecionadas.length === 0 ||
    enviadoHoje ||
    selecionadas.length > restantesHoje;

  const botaoTexto =
    selecionadas.length > 0
      ? `Abrir ${selecionadas.length} caixinha(s): ${selecionadas.join(" + ")}`
      : "Abrir caixinha";

  // const instrucoes =
  //   restantesHoje >= 2
  //     ? "Selecione até duas caixinhas para abrir e descubra sua mensagem!"
  //     : restantesHoje === 1
  //     ? "Selecione mais uma caixinha para abrir!"
  //     : "Você já abriu todas as caixinhas de hoje.";

  return (
    <Box component="main" sx={mainContainerStyle}>
      <Paper elevation={5} sx={{ ...paperStyle, overflow: "hidden" }}>
        <HeroBanner />

        {/* <Typography variant="h1" sx={tituloDestaqueContorno}>
          {instrucoes}
        </Typography> */}

        {jaAtingiuLimite && (
          <Typography sx={{ mt: 1 }} aria-live="polite">
            Você já abriu {limiteDiario} caixinhas hoje. Volte amanhã 💚
          </Typography>
        )}

        {isMobile ? (
          <Box sx={gridMobileStyle}>
            {opcoes.map(({ label, src }) => {
              const selected = selecionadas.includes(label);
              const bloqueada = !selected && !podeSelecionarMais;
              return (
                <ButtonBase
                  key={label}
                  aria-label={label}
                  aria-pressed={selected}
                  aria-disabled={bloqueada}
                  onClick={() => handleClickMensagem(label)}
                  disableRipple
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  sx={{
                    ...optionButtonBaseStyle,
                    ...(bloqueada
                      ? { opacity: 0.35, pointerEvents: "none" }
                      : {}),
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={label}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    sx={{
                      ...optionImageBaseStyle,
                      ...optionImageMobileSize,
                      ...(selected
                        ? {
                            ...optionImageSelectedStyle,
                            ...selectedWiggle(prefersReducedMotion),
                          }
                        : optionImageHoverStyle),
                    }}
                  />
                </ButtonBase>
              );
            })}
          </Box>
        ) : (
          <Box sx={gridDesktopStyle}>
            {opcoes.map(({ label, src }) => {
              const selected = selecionadas.includes(label);
              const bloqueada = !selected && !podeSelecionarMais;
              return (
                <ButtonBase
                  key={label}
                  aria-label={label}
                  aria-pressed={selected}
                  aria-disabled={bloqueada}
                  onClick={() => handleClickMensagem(label)}
                  disableRipple
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  sx={{
                    ...optionButtonBaseStyle,
                    ...(bloqueada
                      ? { opacity: 0.35, pointerEvents: "none" }
                      : {}),
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={label}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    sx={{
                      ...optionImageBaseStyle,
                      ...optionImageDesktopSize,
                      ...(selected
                        ? {
                            ...optionImageSelectedStyle,
                            ...selectedWiggle(prefersReducedMotion),
                          }
                        : optionImageHoverStyle),
                    }}
                  />
                </ButtonBase>
              );
            })}
          </Box>
        )}

        <Button
          variant="contained"
          sx={buttonEnviarStyle}
          onClick={enviarMensagens}
          disabled={botaoDesabilitado}
        >
          {botaoTexto}
        </Button>

        {status && (
          <Typography sx={statusTextStyle} aria-live="polite">
            {status}
          </Typography>
        )}
        <Box
          aria-hidden
          sx={{
            mt: 10,
            ml: (theme) => `-${theme.spacing(3)}`,
            mr: (theme) => `-${theme.spacing(3)}`,
            width: (theme) => `calc(100% + ${theme.spacing(6)})`,
            height: 180, 
            backgroundImage: `url(${marcadagua})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Paper>
    </Box>
  );
}
