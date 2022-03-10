import "./Home.css";
import "animate.css";
import { ReactComponent as Hero } from "../assets/main-hero.svg";
import { ReactComponent as MailIcon } from "../assets/mail-icon.svg";
import { ReactComponent as LocationIcon } from "../assets/location-icon.svg";
import Header from "../shared/Header/components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main-home">
        <div className="details  animate__animated animate__slideInUp">
          <div className="intro-container">
            <span>Hello I'm</span>
          </div>
          <span className="name">Rudra Konar</span>
          <span className="role">MERN Stack Developer</span>
          <div className="contacts">
            <div>
              <MailIcon /> <span> gamitech95@gmail.com</span>
            </div>
            <div>
              <LocationIcon /> <span>Burdwan, WB, India</span>
            </div>
          </div>
        </div>
        <div className="hero-image animate__animated animate__slideInUp">
          <Hero />
        </div>
      </main>
    </>
  );
};

export default Home;
