import { styled } from "@mui/material/styles";
import { Box, Link, Typography } from "@mui/material";

export const ProjectNavBox = styled(Box)(({ theme }) => ({
  margin: "1.5rem 0",
  // transition: "all 0.5s ease",
  [theme.breakpoints.down("sm")]: {},
}));

export const ProjectNavLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

export const ProjectNavTitle = styled(Typography)(({ theme }) => ({
  transition: "all 0.5s ease",

  "&:hover": {
    fontWeight: 600,
    fontSize: "2rem",
    transition: "all 0.5s ease",
  },
}));
