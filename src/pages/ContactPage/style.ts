import { styled } from "@mui/material/styles";
import { Box, FormLabel, Input, TextField } from "@mui/material";

export const FormInput = styled(TextField)(({ theme }) => ({
  //   margin: "0.7rem 0",

  "& .MuiOutlinedInput-root": {
    fontFamily: "Quicksand",
    "& fieldset": {
      margin: "0.7rem 0",
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: "7px",
    },
    "&.Mui-focused fieldset": {
      //   border: `4px solid green`,
      //   backgroundColor: "pink",
    },
  },
}));
