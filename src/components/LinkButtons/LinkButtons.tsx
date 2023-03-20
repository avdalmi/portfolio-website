import { Box, Link } from "@mui/material";
import React from "react";
import { LinkButton } from "./style";

function LinkButtons() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <Link
        href="https://www.linkedin.com/in/akiko-van-dal/"
        target="_blank"
        sx={{ textDecoration: "none" }}
      >
        <LinkButton>LinkedIn</LinkButton>
      </Link>

      <br />
      <Link
        href="https://github.com/avdalmi"
        target="_blank"
        sx={{ textDecoration: "none" }}
      >
        <LinkButton>GitHub</LinkButton>
      </Link>
    </Box>
  );
}

export default LinkButtons;
