import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";
import kuubixLogo from "../../assets/kuubixLogo.svg";
import { useNavigate } from "react-router-dom";

export function Project() {
  const navigate = useNavigate();

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
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
              <h3>Gym Application</h3>
              <img
                src="Images/gymApp.png"
                alt="Menu"
                style={{ maxWidth: "50%", height: "auto" }}
              />
              <p>
                Developed an app in React Native where you can track your
                progress, make your own workouts, and look for nearby gyms.
              </p>
            </div>
            <footer>
              <p className="details-button" onClick={() => navigate("/gym-application")}>
                View Project Details
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
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
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
              <h3>Vet Application</h3>
              <p>
                In this app you can manage appointments between doctors and
                clients and their pets
              </p>
            </div>
            <footer>
              <p className="details-button" onClick={() => navigate("/gym-application")}>
                View Project Details
              </p>
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
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
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
              <h3>School Application</h3>
              <p>
                In this app you can manage classes, students, study subjects,
                make photo albums etc.
              </p>
            </div>
            <footer>
              <p className="details-button" onClick={() => navigate("/gym-application")}>
                View Project Details
              </p>
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
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Master Interior Application</h3>
              <img
                src="Images/MasterInterior/menu.png"
                alt="Menu"
                style={{ maxWidth: "50%", height: "auto" }}
              />
              <p>
                In this app is made for customers and personel. As a customer u
                can view your orders, offers, invoices and manage your account
                details. Personel can also manage projects and clients.
              </p>
              
            </div>
            <footer>
            <p className="details-button" onClick={() => navigate("/master-interior-application")}>
                    View Project Details
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