import "./Header.css";
import { ReactComponent as DarkSwitch } from "../../../assets/darkSwitch.svg";
import { ReactComponent as BurgerMenuIcon } from "../../../assets/burger-menu.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [themeFlag, setTheme] = useState(
    document.documentElement.getAttribute("dark") === "true" ? true : false
  );

  useEffect(() => {
    document.documentElement.setAttribute("dark", themeFlag);
  }, [themeFlag]);

  const toggleTheme = () => {
    setTheme((prevState) => {
      return prevState === false;
    });
  };

  return (
    <header>
      <BurgerMenuIcon />
      <div className="header-options">
        <span>Home</span>
        <span>About</span>
        <span>Blogs</span>
        <span>Projects</span>
      </div>
      <DarkSwitch onClick={toggleTheme} />
    </header>
  );
};

export default Header;
