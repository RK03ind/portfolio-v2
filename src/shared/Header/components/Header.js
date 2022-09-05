import "./Header.css";
import { ReactComponent as DarkSwitch } from "../../../assets/darkSwitch.svg";
import { ReactComponent as BurgerMenuIcon } from "../../../assets/burger-menu.svg";
import { useEffect, useState } from "react";
import SideMenu from "../../side-menu/components/SideMenu";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [themeFlag, setTheme] = useState(
    document.documentElement.getAttribute("dark") === "true" ? true : false
  );
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("dark", themeFlag);
  }, [themeFlag]);

  const toggleTheme = () => {
    setTheme((prevState) => {
      return prevState === false;
    });
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => {
      return prevState === false;
    });
  };

  return (
    <header>
      <BurgerMenuIcon onClick={toggleMenu} />
      {isMenuOpen && <SideMenu toggleMenu={toggleMenu} />}
      <div className="header-options">
        <NavLink to="/" activeClassName="active">
          <span>Home</span>
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          <span>About</span>
        </NavLink>
        <NavLink to="/blogs" activeClassName="active">
          <span>Blogs</span>
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          <span>Projects</span>
        </NavLink>
      </div>
      <DarkSwitch onClick={toggleTheme} />
    </header>
  );
};

export default Header;
