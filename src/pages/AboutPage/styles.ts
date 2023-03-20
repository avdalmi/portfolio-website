import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const AboutCont = styled(Box)(({ theme }) => ({
  margin: "1.7rem 1rem 1.7rem 2rem",

  [theme.breakpoints.down("sm")]: {
    margin: 0,
  },
}));
