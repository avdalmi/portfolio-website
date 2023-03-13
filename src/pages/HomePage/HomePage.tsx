import { Typography } from "@mui/material";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { HomeMainCont } from "./styles";

function HomePage() {
  return (
    <HomeMainCont>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "1rem",
          backgroundColor: "thistle",
        }}
      >
        <Typography variant="h1">
          Akiko
          <br /> van Dal
        </Typography>
      </div> */}
      <Typography variant="h1">
        <span>Akiko</span>
        <br />
        <span>van Dal</span>
      </Typography>
      <NavBar />
    </HomeMainCont>
  );
}

export default HomePage;
