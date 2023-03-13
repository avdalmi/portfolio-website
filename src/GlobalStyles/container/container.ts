import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const AppCont = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  transition: "all 1.9s ease",
}));

export const MainCont = styled(Box)(({ theme }) => ({
  height: "calc(100vh - 60px)",
  border: `1px solid ${theme.palette.divider}`,
  margin: "1.7rem 1.7rem 1.7rem 0",
  width: "calc(100vw - 60px)",
  // transition: "all 1.9s ease",
  display: "flex",
  // backgroundColor: "lavender",
  [theme.breakpoints.down("sm")]: {
    // backgroundColor: "orange",
    // width: "30%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 1.2s ease",
  },
}));

export const SectionCont = styled(Box)(({ theme }) => ({
  margin: "1.7rem",
  overflow: "auto",
}));
