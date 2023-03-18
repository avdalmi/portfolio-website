import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

export const FormInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      margin: "0.8rem 0",
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: "7px",
    },
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,

  "&:hover": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
  },
}));
