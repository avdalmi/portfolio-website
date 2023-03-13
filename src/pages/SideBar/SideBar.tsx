import { Typography } from "@mui/material";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { SideBarCont } from "./styles";

function SideBar() {
  return (
    <SideBarCont>
      <Typography variant="h1">
        <span style={{ transition: "all 0.8s ease" }}>Akiko</span>
        <br />
        <span style={{ transition: "all 1.5s ease" }}>van Dal</span>
      </Typography>
      <NavBar />
    </SideBarCont>
  );
}

export default SideBar;
