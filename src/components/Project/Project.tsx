import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";
import kuubixLogo from "../../assets/kuubixLogo.svg";
import { useNavigate } from "react-router-dom";

export function Project() {
  const navigate = useNavigate();

  return (
    <Container id="project">
      <h1 className="titlehead">My Projects</h1>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://github.com/lace-be/WorkoutApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h2>Gym Application</h2>
              <p>
                Developed an app in React Native where you can track your
                progress, make your own workouts, and look for nearby gyms.
              </p>
            </div>
            <footer>
              <p
                className="details-button"
                onClick={() => {
                  window.scrollTo(0, 0); //scrolls to top
                  navigate("/gym-application");
                }}
              >
                View Details
              </p>
              <ul className="tech-list">
                <li>Angular</li>
                <li>Ionic</li>
              </ul>
              <img src="Images/tmlogo.png" alt="Tech Logo" />
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://github.com/lace-be/WPF-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h2>Vet Application</h2>
              <p>
                In this app you can manage appointments between doctors and
                clients and their pets
              </p>
            </div>
            <footer>
              {/* <p
                className="details-button"
                onClick={() => navigate("/gym-application")}
              >
                View Project Details
              </p> */}
              <ul className="tech-list">
                <li>WPF</li>
                <li>.NET</li>
              </ul>
              <li>
                <img src="Images/tmlogo.png" alt="Visit site" />
              </li>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://github.com/lace-be/MVC-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h2>School Application</h2>
              <p>
                In this app you can manage classes, students, study subjects,
                make photo albums etc.
              </p>
            </div>
            <footer>
              {/* <p
                className="details-button"
                onClick={() => navigate("/gym-application")}
              >
                View Project Details
              </p> */}
              <ul className="tech-list">
                <li>MVC</li>
                <li>.NET</li>
              </ul>
              <li>
                <img src="Images/tmlogo.png" alt="Visit site" />
              </li>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h2>Master Interior Application</h2>
              <p>
                In this app is made for customers and personel. As a customer u
                can view your orders, offers, invoices and manage your account
                details. Personel can also manage projects and clients.
              </p>
            </div>
            <footer>
              <p
                className="details-button"
                onClick={() => {
                  window.scrollTo(0, 0); //scrolls to top
                  navigate("/master-interior-application");
                }}
              >
                View Details
              </p>
              <ul className="tech-list">
                <li>Php Laravel</li>
                <li>Vue.js</li>
              </ul>
              <li>
                <img src={kuubixLogo} alt="Menu" />
              </li>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
