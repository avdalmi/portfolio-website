import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SideBarCont = styled(Box)(({ theme }) => ({
  // width: "120%",
  // width: "24rem",
  // width: "1000px",

  //   height: "90vh",
  margin: "1.7rem 0 1.7rem 1.7rem",
  // backgroundColor: "thistle",
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
