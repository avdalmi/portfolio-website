import { useLocation } from "react-router-dom";
import { NavBarLI, NavBarLink, NavBarUL } from "./Styles";

function NavBar() {
  const location = useLocation();
  const dot = "●";
  const NavBarItems = [
    {
      href: "/home",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/cv",
      title: "CV",
    },
    {
      href: "/projects",
      title: "Projects",
    },
    {
      href: "/contact",
      title: "Contact",
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
