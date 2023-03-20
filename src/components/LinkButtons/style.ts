import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const LinkButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  minWidth: "150px",

  "&:hover": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
  },
}));
