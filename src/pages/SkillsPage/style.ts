import { Link, styled, Typography } from "@mui/material";

export const SkillItem = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.palette.primary.main,
  fontSize: "0.8rem",
  transition: "all 0.9s ease",

  "&:hover": {
    fontSize: "0.9rem",
    fontWeight: 500,
    transition: "all 0.9s ease",
  },
}));

export const SkillLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",

  [theme.breakpoints.down("sm")]: {},
}));
