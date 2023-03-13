import { styled } from "@mui/material/styles";
import { Link, List, ListItem } from "@mui/material";

export const NavBarUL = styled(List)(({ theme }) => ({
  listStyleType: "none",
  textAlign: "left",
  padding: 0,
  margin: "1rem 0",
  //   backgroundColor: "red",
  width: "100px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
  },
}));

export const NavBarLI = styled(ListItem)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.palette.primary.main,
  fontSize: "0.7rem",
  lineHeight: 0.5,

  "&:hover": {
    fontSize: "0.9rem",
    transition: "all 0.9s ease",
  },
}));

export const NavBarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  [theme.breakpoints.down("sm")]: {
    // textAlign: "right",
    // backgroundColor: "thistle",
    // margin: "0 auto",
  },
}));
