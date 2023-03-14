import { Accordion, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AccordionS = styled(Accordion)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  borderRadius: "5px",
  margin: "0.5rem 0",

  "&:hover": {
    // backgroundColor: theme.palette.text.primary,
    // color: theme.palette.background.default,
    // transition: "all 1s ease",
  },
  [theme.breakpoints.down("sm")]: {},
}));
