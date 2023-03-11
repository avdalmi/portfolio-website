import { styled } from "@mui/material/styles";

export const BpIcon = styled("span")(({ theme }) => ({
  width: 16,
  height: 16,
  backgroundColor: theme.palette.mode === "dark" ? "#1c1c1c" : "#fff",
}));

export const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `3px solid ${theme.palette.divider}`,

  "&:before": {
    display: "block",
    width: 16,
    height: 16,

    content: '""',
  },
}));
