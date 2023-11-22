/* eslint-disable react/jsx-no-target-blank */
import "./Home.css";
import "animate.css";
import { ReactComponent as Hero } from "../../assets/main-hero.svg";
import { ReactComponent as MailIcon } from "../../assets/mail-icon.svg";
import { ReactComponent as LocationIcon } from "../../assets/location-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as DiscordIcon } from "../../assets/discord.svg";

const Home = () => {
  return (
    <>
      <main className="main-home">
        <div className="details animate__animated slideInUpCustom">
          <div className="intro-container">
            <span>Hello I'm</span>
          </div>
          <span className="name">Rudra Konar</span>
          <span className="role">Frontend Developer</span>
          <div className="contacts">
            <div className="email">
              <MailIcon />
              <span
                onClick={() =>
                  (window.location = "mailto:contact@rudrakonar.dev")
                }
              >
                contact@rudrakonar.dev
              </span>
            </div>
            <div className="location">
              <LocationIcon /> <span>Burdwan, WB, India</span>
            </div>
          </div>
          <div className="socials">
            <a href="https://github.com/RK03ind" target="_blank">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/rudra-konar" target="_blank">
              <LinkedinIcon />
            </a>
            <a href="https://twitter.com/rudra_konar" target="_blank">
              <TwitterIcon />
            </a>
            <a
              href="https://discordapp.com/users/780126165872148519"
              target="_blank"
            >
              <DiscordIcon />
            </a>
          </div>
          <div className="resume">
            <a href="https://drive.google.com/file/d/1T7UnzLAuX8t5gfizR4ACF7cRXsHqXgfV/view?usp=sharing">
              <span className="download">Download</span>
              <span>Resume ⬇️</span>
            </a>
          </div>
        </div>
        <div className="hero-image animate__animated slideInUpCustom">
          <Hero />
        </div>
      </main>
    </>
  );
};

export default Home;
