import { Typography } from "@mui/material";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { SideBarCont } from "./styles";

function SideBar() {
  return (
    <SideBarCont>
      <Typography
        style={{
          backgroundColor: "",
          minWidth: "250px",
        }}
        variant="h1"
      >
        <span>Akiko</span>
        <br />
        <span style={{ transition: "all 1s ease" }}>van Dal</span>
      </Typography>
      <NavBar />
    </SideBarCont>
  );
}

export default SideBar;
