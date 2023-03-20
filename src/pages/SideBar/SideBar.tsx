import { Typography } from "@mui/material";
import { NavBar } from "../../components";
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
        <span>van Dal</span>
      </Typography>
      <NavBar />
    </SideBarCont>
  );
}

export default SideBar;
