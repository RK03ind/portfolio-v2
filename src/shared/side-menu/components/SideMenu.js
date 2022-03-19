import ReactDOM from "react-dom";
import { ReactComponent as CloseButton } from "../../../assets/close.svg";
import "animate.css";
import "./SideMenu.css";
import { Link } from "react-router-dom";

const SideMenu = (props) => {
  return ReactDOM.createPortal(
    <>
      <nav className="animate__animated animate__slideInLeft">
        <CloseButton onClick={props.toggleMenu} />
        <Link to="/">
          <div className="item" onClick={props.toggleMenu}>
            Home
          </div>
        </Link>
        <div className="item" onClick={props.toggleMenu}>
          About
        </div>
        <div className="item" onClick={props.toggleMenu}>
          Blogs
        </div>
        <Link to="/projects">
          <div className="item" onClick={props.toggleMenu}>
            Projects
          </div>
        </Link>
      </nav>
    </>,
    document.getElementById("burger-menu-root")
  );
};

export default SideMenu;
