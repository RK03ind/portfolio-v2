import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import use100vh from "./hooks/use100vh";
import Header from "./shared/Header/components/Header";

function App() {
  //solving the 100vh problem in mobile devices
  document.getElementById("burger-menu-root").style.height = use100vh();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
