import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SideBarCont = styled(Box)(({ theme }) => ({
  margin: "1.7rem 0 1.7rem 1.7rem",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
    height: "50%",
    margin: "1rem auto",
  },
}));
