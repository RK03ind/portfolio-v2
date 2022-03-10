import "./Header.css";
import { ReactComponent as DarkSwitch } from "../../../assets/darkSwitch.svg";
import { ReactComponent as BurgerMenuIcon } from "../../../assets/burger-menu.svg";

const Header = () => {
  return (
    <header>
      <BurgerMenuIcon />
      <div className="header-options">
        <span>Home</span>
        <span>About</span>
        <span>Blogs</span>
        <span>Projects</span>
      </div>
      <DarkSwitch />
    </header>
  );
};

export default Header;
