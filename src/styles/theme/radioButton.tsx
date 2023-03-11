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
