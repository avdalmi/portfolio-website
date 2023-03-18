import { Code } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { NavBarLI, NavBarLink, NavBarUL } from "./Styles";

function NavBar() {
  const location = useLocation();
  const dot = <Code sx={{ height: "10px", m: "-5px" }} />;
  const NavBarItems = [
    {
      href: "/",
      title: "home",
    },
    {
      href: "/about",
      title: "about",
    },
    {
      href: "/cv",
      title: "CV",
    },
    {
      href: "/projects",
      title: "projects",
    },
    {
      href: "/skills",
      title: "skills",
    },
    {
      href: "/contact",
      title: "contact",
    },
  ];

  const getMenuItems = () => {
    return NavBarItems.map((item) => {
      return (
        <NavBarLink key={item.title} href={item.href}>
          {location.pathname === item.href ? (
            <NavBarLI>{dot}</NavBarLI>
          ) : (
            <NavBarLI>{item.title}</NavBarLI>
          )}
        </NavBarLink>
      );
    });
  };
  return <NavBarUL>{getMenuItems()}</NavBarUL>;
}

export default NavBar;
