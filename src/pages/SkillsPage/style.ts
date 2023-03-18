import { Link, styled, Typography } from "@mui/material";

export const SkillItem = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  transition: "all 0.9s ease",

  "&:hover": {
    fontSize: "1rem",
    fontWeight: 500,
    transition: "all 0.9s ease",
  },
}));

export const SkillLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));
