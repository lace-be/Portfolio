import { Container } from "./styles";
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
import mySqlIcon from "../../assets/mysql-icon.svg";
import csharpIcon from "../../assets/c--4.svg";
import laravelIcon from "../../assets/laravel-2.svg";
import tailwindIcon from "../../assets/tailwind-css-2.svg";
import angularIcon from "../../assets/angular-icon-1.svg";
import dockerIcon from "../../assets/docker-4.svg";
import download from "../../assets/download.png";
import Resume from '../../assets/ThomasMertensCV.pdf';

export function About() {
  return (
    <Container id="about">
      <div className="about-left">
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft">
            <h2>Curriculum Vitae</h2> 
            <a href={Resume} download>
              <img src={download} alt="Download" style={{ width: '35px', marginBottom: '-8px', marginLeft: '10px' }}/>
            </a>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000} style={{ marginTop: '1.2rem'}}>
            <h3>Education</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <h4>Heilig Graf, Turnhout</h4>
            <p>Certificate IT & Networking (graduated 2019)</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <h4>Karel de Grote Hogeschool, Antwerpen</h4>
            <p>Bachelor Informatica (09/2019 - 01/2020)</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <h4>Artesis Plantijn Hogeschool, Antwerpen</h4>
            <p>Graduate Programming (02/2020 - 05/2021)</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <h4>Thomas More Hogeschool, Turnhout</h4>
            <p>Graduate Programming (09/2022 - 06/2024)</p>
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
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
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
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
                <img src={mySqlIcon} alt="MySql" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
                <img src={csharpIcon} alt="C#" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
                <img src={laravelIcon} alt="Laravel" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
                <img src={tailwindIcon} alt="Tailwind" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
                <img src={angularIcon} alt="Angular" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
                <img src={dockerIcon} alt="Docker" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <div className="about-right">
        <div className="work-experience">
          <ScrollAnimation animateIn="fadeInRight" delay={0.3 * 1000}>
            <h3>Experience</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={0.8 * 1000}>
            <h4>Juni 2022 – September 2022</h4>
            <p>Interim • Store employee • Colruyt Vosselaar</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={0.7 * 1000}>
            <h4>July 2021 – December 2021</h4>
            <p>Interim • Web account manager/customer service • Pelckmans Tuincentrum</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
            <h4>April 2017 - August 2024</h4>
            <p>Student/Interim • Webdeveloper • MM Consulting</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={0.5 * 1000}>
            <h4>November 2017 – May 2021</h4>
            <p>Student • Restaurant Haute Cookure</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
            <h4>July 2017</h4>
            <p>Student • Horticulture • Quirynen Energy Farming</p>
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  );
}
