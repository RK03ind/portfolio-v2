import ReactDOM from "react-dom";
import { ReactComponent as CloseButton } from "../../../assets/close.svg";
import "animate.css";
import "./SideMenu.css";

const SideMenu = (props) => {
  return ReactDOM.createPortal(
    <>
      <nav className="animate__animated animate__slideInLeft">
        <CloseButton onClick={props.toggleMenu} />
        <div className="item">Home</div>
        <div className="item">About</div>
        <div className="item">Blogs</div>
        <div className="item">Projects</div>
      </nav>
    </>,
    document.getElementById("burger-menu-root")
  );
};

export default SideMenu;
