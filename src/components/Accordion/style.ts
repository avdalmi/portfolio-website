import { ExpandMore } from "@mui/icons-material";
import { Accordion } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AccordionS = styled(Accordion)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  borderRadius: "5px",
  margin: "0.5rem 0",

  "&:hover": {},
  [theme.breakpoints.down("sm")]: {},
}));

export const ExpandIcon = styled(ExpandMore)(({ theme }) => ({
  color: theme.palette.divider,
}));
