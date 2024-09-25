import { Container } from "./styles";
import ThomasFoto from "../../assets/fotokaart.png";
import wordpress from "../../assets/wordpress.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-left">
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft">
            <h2>Curriculum Vitae</h2>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
            <h3>Opleiding</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <h4>Heilig Graf, Turnhout</h4>
            <p>Diploma IT & Netwerken (afgestudeerd 2019)</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <h4>Karel de Grote Hogeschool, Antwerpen</h4>
            <p>Bachelor Informatica (09/2019 - 01/2020)</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <h4>Artesis Plantijn Hogeschool, Antwerpen</h4>
            <p>Graduaat Programmeren (02/2020 - 05/2021)</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <h4>Thomas More Hogeschool, Turnhout</h4>
            <p>Graduaat Programmeren (09/2022 - 06/2024)</p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
            <h3>Hard Skills</h3>
          </ScrollAnimation>

          <div className="hard-skills">
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
                <img src={wordpress} alt="Wordpress" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={reactIcon} alt="React" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
                <img src={typescriptIcon} alt="Typescript" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
                <img src={vueIcon} alt="Vue" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
                <img src={nodeIcon} alt="Node" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
                <img src={htmlIcon} alt="Html" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
                <img src={cssIcon} alt="Css" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={boostrapIcon} alt="bootstrap" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
                <img src={jsIcon} alt="JavaScript" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <div className="about-right">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={ThomasFoto} alt="Thomas Mertens" />
        </ScrollAnimation>

        <div className="work-experience">
          <ScrollAnimation animateIn="fadeInRight" delay={0.3 * 1000}>
            <h3>Werkervaring</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
            <h4>Juli 2017</h4>
            <p>Studentenjob • Tuinbouw • Quirynen Energy Farming</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={0.5 * 1000}>
            <h4>November 2017 – Mei 2021</h4>
            <p>Studentenjob • Restaurant Haute Cookure</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
            <h4>April 2017 - ...</h4>
            <p>Student/Interim • Webdeveloper • MM Consulting</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={0.7 * 1000}>
            <h4>Juli 2021 – December 2021</h4>
            <p>Interim • Web account manager/klantendienst • Pelckmans Tuincentrum</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={0.8 * 1000}>
            <h4>Juni 2022 – September 2022</h4>
            <p>Interim • Winkelmedewerker • Colruyt Vosselaar</p>
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  );
}
