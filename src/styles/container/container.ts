import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const MainCont = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  transition: "all 1.9s ease",
}));

export const SectionCont = styled(Box)(({ theme }) => ({
  height: "calc(100vh - 60px)",
  border: `1px solid ${theme.palette.divider}`,
  margin: "30px 30px 30px 0",
  width: "calc(100vw - 60px)",
  transition: "all 1.9s ease",
}));
