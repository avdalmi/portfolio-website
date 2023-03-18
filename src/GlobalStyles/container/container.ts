import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const AppBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  // transition: "all 1.9s ease",

  [theme.breakpoints.down("sm")]: {
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    // transition: "all 1.2s ease",
  },
}));

export const MainBox = styled(Box)(({ theme }) => ({
  height: "calc(100vh - 60px)",
  border: `1px solid ${theme.palette.divider}`,
  margin: "1.7rem 1.7rem 1.7rem 0",
  width: "calc(100vw - 60px)",
  transition: "all 1s ease",
  display: "flex",

  [theme.breakpoints.down("sm")]: {
    // backgroundColor: "orange",
    // width: "30%",
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
  // backgroundColor: "lavender",
  // width: "100%",
  transition: "all 1.2s ease",

  [theme.breakpoints.up("sm")]: {
    width: "150%",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    margin: "1rem",
  },
}));
