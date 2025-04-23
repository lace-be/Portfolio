import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import emailIcon from "../../assets/email-mail-svgrepo-com.svg";
import Hello from "../../assets/Hello.gif";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Thomas Mertens</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Graduate Programming</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          {/* Use NavHashLink directly */}
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/thomas-mertens-55a773178/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/lace-be"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Github" />
            </a>
            <a href="mailto:thomasmertens50@gmail.com">
              <img src={emailIcon} alt="GitHub" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img
            src="Images/fotokaarthemd.png"
            alt="Login"
            className="profile-img"
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
