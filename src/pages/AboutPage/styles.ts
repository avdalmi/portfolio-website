import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const AboutCont = styled(Box)(({ theme }) => ({
  margin: "1.7rem 1rem 1.7rem 2rem",
  // backgroundColor: "pink",
  //   transition: "all 1.2s ease",
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("xs")]: {
    margin: 0,
  },
}));
