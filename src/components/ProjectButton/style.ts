import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LinkButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  margin: "1rem 1rem 0 0",
  minWidth: "8rem",
  //   transition: "all 1s ease",
  "&:hover": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
    // transition: "all 1s ease",
  },
  [theme.breakpoints.down("sm")]: {},
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
  },
}));
