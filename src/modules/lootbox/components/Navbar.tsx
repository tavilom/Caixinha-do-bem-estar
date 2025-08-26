import React from "react";
import {
  AppBar,
  Toolbar,
  Card,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Box,
} from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import { HeaderAppBarProps } from "@/types/HeadreAppBarProps";

const HeaderAppBar: React.FC<HeaderAppBarProps> = ({}) => {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const voltarUrl = import.meta.env.VITE_WS_URL || "/";

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <a href="/">
            <Card
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            ></Card>
          </a>
        </Box>

        {/* Título */}
        <Typography
          component="h1"
          fontSize="clamp(1rem, 2.5vw, 2rem)"
          textAlign={isSmallerScreen ? "center" : "left"}
          sx={{
            flexGrow: 1,
            ml: isSmallerScreen ? 0 : 2, 
            my: isSmallerScreen ? 1 : 0, 
            cursour: "default",
            fontSize: isSmallerScreen ? "1.0rem" : "1.5rem",
          }}
        >
          Caixinha do Bem-Estar
        </Typography>

        {/* Botão voltar */}
        {!isSmallerScreen && (
          <Button
            startIcon={<UndoIcon />}
            variant="contained"
            color="info"
            href={voltarUrl}
          >
            Voltar
          </Button>
        )}

        {/* Botão mobile */}
        {isSmallerScreen && (
          <Button
            variant="outlined"
            startIcon={<UndoIcon />}
            color="info"
            size="small"
            href={voltarUrl}
            sx={{ fontSize: "0.75rem" }}
          >
            Voltar
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAppBar;
