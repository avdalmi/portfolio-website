import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const AppBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  backgroundColor: theme.palette.background.default,

  webkitTransition: `${theme.palette.background.default} 2s ease-out`,
  mozTransition: `${theme.palette.background.default} 2s ease-out`,
  oTransition: `${theme.palette.background.default} 2s ease-out`,
  transition: `${theme.palette.background.default} 2s ease-out`,
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const MainBox = styled(Box)(({ theme }) => ({
  height: "calc(100vh - 60px)",
  border: `1px solid ${theme.palette.divider}`,
  margin: "1.7rem 1.7rem 1.7rem 0",
  width: "calc(100vw - 60px)",
  transition: "all 1.2s ease",
  // backgroundColor: theme.palette.background.default,
  display: "flex",

  [theme.breakpoints.down("sm")]: {
    minHeight: "calc(100vh - 60px)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.9s ease",
  },
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  margin: "1.7rem",
  overflow: "auto",
  transition: "all 1s ease",

  [theme.breakpoints.up("sm")]: {
    width: "150%",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    margin: "1rem",
  },
}));
