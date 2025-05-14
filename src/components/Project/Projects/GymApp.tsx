import { Container } from "./styles";

export default function GymApp() {
  return (
    <Container id="project">
      <h2>GymApp Application</h2>
      <p className="subtitle">
        This app was made for a school assignment. Developped with React Native
        you can track your progress, make your own workouts, and look for nearby
        gyms.
      </p>
      <div className="projects" style={{ marginTop: "5rem" }}>
        <div className="project">
          <div className="content">
            <h3>Login</h3>
            <p className="left">
              This application is build with authentication so the user has to
              login first to get access to other routes. You can login with
              Google or Facebook.
            </p>
            <img
              src="Images/GymApp/login.png"
              alt="Login"
              className="project-img"
              style={{ maxWidth: "60%" }}
            />
          </div>
        </div>

        <div className="project">
          <div className="content">
            <h3>Workouts</h3>
            <p className="right">The user can add and save his workouts.</p>
            <img
              src="Images/GymApp/workouts.png"
              alt="Send reset password email"
              className="project-img"
              style={{ maxWidth: "60%" }}
            />
          </div>
        </div>

        <div className="project">
          <div className="content">
            <h3>Edit workouts</h3>
            <p className="left">
              When the user clicks a workout he can edit the name and add
              exercises.
            </p>
            <img
              src="Images/GymApp/workoutdetails.png"
              alt="Reset Password"
              className="project-img"
              style={{ maxWidth: "60%" }}
            />
          </div>
        </div>

        <div className="project">
          <div className="content">
            <h3>Exercises</h3>
            <p className="right">
              When the user clicks to add exercises he can search for an
              exercise and select to add it to the workout.
            </p>
            <img
              src="Images/GymApp/workoutexercise.png"
              alt="My Apps"
              className="project-img"
              style={{ maxWidth: "60%" }}
            />
          </div>
        </div>

        <div className="project">
          <div className="content">
            <h3>Progress</h3>
            <p className="left">
              The user can save his progress by adding photos that are grouped
              in months.
            </p>
            <img
              src="Images/GymApp/Progress.png"
              alt="Orders"
              className="project-img"
              style={{ maxWidth: "50%" }}
            />
          </div>
        </div>

        <div className="project">
          <div className="content">
            <h3>Gyms</h3>
            <p className="right">
              On this page the user can see nearby gyms and details like
              location, rating and when it's open.
            </p>
            <img
              src="Images/GymApp/gyms.png"
              alt="Order details"
              className="project-img"
              style={{ maxWidth: "70%" }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
