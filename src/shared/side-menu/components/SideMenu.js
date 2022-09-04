import ReactDOM from "react-dom";
import { ReactComponent as CloseButton } from "../../../assets/close.svg";
import "animate.css";
import "./SideMenu.css";
import { useNavigate } from "react-router-dom";

const SideMenu = (props) => {
  const navigate = useNavigate();

  const navigateToPage = (event) => {
    props.toggleMenu();

    navigate(`/${event.target.innerText.toLowerCase()}`);
  };

  return ReactDOM.createPortal(
    <>
      <nav
        className="animate__animated animate__slideInLeft"
        // style={{ height: use100vh() }}
      >
        <CloseButton onClick={props.toggleMenu} />

        <span className="item" onClick={navigateToPage}>
          Home
        </span>

        <span className="item" onClick={navigateToPage}>
          About
        </span>

        <span className="item" onClick={navigateToPage}>
          Blogs
        </span>

        <span className="item" onClick={navigateToPage}>
          Projects
        </span>
      </nav>
    </>,
    document.getElementById("burger-menu-root")
  );
};

export default SideMenu;
