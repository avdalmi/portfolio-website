import { FormControlLabel, RadioGroup, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ThemeRadio = styled("input")(({ theme }) => ({
  width: 12,
  height: 12,
  backgroundColor: `${theme.palette.background.default}`,
  outline: `1px solid ${theme.palette.text.primary}`,
  border: `1px solid ${theme.palette.background.default}`,
}));

export const ThemeRadioChecked = styled(ThemeRadio)(({ theme }) => ({
  backgroundColor: `${theme.palette.text.primary}`,
  outline: `1px solid ${theme.palette.text.primary}`,
  border: `2px solid ${theme.palette.background.default}`,
}));

export const SFormControlLabel = styled(FormControlLabel)(({ theme }) => ({}));

export const ThemeRadioGroup = styled(RadioGroup)(({ theme }) => ({
  width: "200px",
  // backgroundColor: "thistle",

  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    margin: "0 3rem -1.7rem 0",
    // transition: "all 1.2s ease",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export const ThemeRadioCont = styled(Box)(({ theme }) => ({
  transform: "rotate(-90deg)",
  width: "30px",
  // backgroundColor: "pink",

  [theme.breakpoints.down("sm")]: {
    transform: "rotate(0deg)",
    width: "100%",
  },
}));
