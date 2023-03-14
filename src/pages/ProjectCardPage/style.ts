import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeadingBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));
