import { styled } from "@mui/material/styles";
import { Link, Box, ListItem } from "@mui/material";

export const HomeMainCont = styled(Box)(({ theme }) => ({
  width: "50%",
  //   height: "90vh",
  margin: "1.7rem 0 1.7rem 1.7rem",
  //   backgroundColor: "pink",
  [theme.breakpoints.up("md")]: {
    // transition: "all 1.2s ease",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
    height: "50%",
    margin: "1rem auto",
    // transition: "all 1.2s ease",
  },
}));
