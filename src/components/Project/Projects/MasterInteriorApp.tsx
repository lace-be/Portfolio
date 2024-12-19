import { Container } from "./styles";

export default function MasterInteriorApp() {
    return (
        <Container id="project">
          <h2>Master Interior Application</h2>
          <p className="subtitle">
            In this app is made for customers and personel. As a customer u
                can view your orders, offers, invoices and manage your account
                details. Personel can also manage projects and clients.
          </p>
          <div className="projects" style={{ marginTop: "5rem" }}>
            <div className="project">
              <div className="content">
                <h3>Login</h3>
                <p className="left">This application is build with authentication so the user has to login first to get access to other routes.</p>
                <img
                  src="Images/MasterInterior/login.png"
                  alt="Login"
                  className="project-img"
                  style={{ maxWidth: "30%" }}
                />
              </div>
            </div>

            <div className="project">
              <div className="content">
              <h3>Send reset password email</h3>
                <p className="right">
                  If a user forgot his password he can request a reset password email.
                </p>
                <img
                  src="Images/MasterInterior/wwReset.png"
                  alt="Send reset password email"
                  className="project-img"
                  style={{ maxWidth: "30%" }}
                />
              </div>
            </div>

            <div className="project">
              <div className="content">
                <h3>Reset Password</h3>
                <p className="left">
                  If the user received the email he can reset his password.
                </p>
                <img
                  src="Images/MasterInterior/wwChange.png"
                  alt="Reset Password"
                  className="project-img"
                  style={{ maxWidth: "30%" }}
                />
              </div>
            </div>

            <div className="project">
              <div className="content">
              <h3>My Apps</h3>
                <p className="right">
                  If a user is logged in he can view his apps.
                </p>
                <img
                  src="Images/MasterInterior/menu.png"
                  alt="My Apps"
                  className="project-img"
                  style={{ maxWidth: "50%" }}
                />
              </div>
            </div>

            <div className="project">
              <div className="content">
                <h3>Orders</h3>
                <p className="left">
                  Here a user can view his orders.
                </p>
                <img
                  src="Images/MasterInterior/ordersPage.png"
                  alt="Orders"
                  className="project-img"
                  style={{ maxWidth: "50%" }}
                />
              </div>
            </div>

            <div className="project">
              <div className="content">
              <h3>Order details</h3>
                <p className="right">
                  If a user clicks on an order he can view the details of that order.
                </p>
                <img
                  src="Images/MasterInterior/orderPage.png"
                  alt="Order details"
                  className="project-img"
                  style={{ maxWidth: "50%" }}
                />
              </div>
            </div>

            <div className="project">
              <div className="content">
                <h3>Account details</h3>
                <p className="left">
                  Here a user can manage his account details.
                </p>
                <img
                  src="Images/MasterInterior/accDetailsPage.png"
                  alt="Account details"
                  className="project-img"
                  style={{ maxWidth: "50%" }}
                />
              </div>
            </div>

            <div className="project">
              <div className="content">
              <h3>Change password</h3>
                <p className="right">
                  Here a user can change his password.
                </p>
                <img
                  src="Images/MasterInterior/wwChangeLoggedIn.png"
                  alt="Change password"
                  className="project-img"
                  style={{ maxWidth: "50%" }}
                />
              </div>
            </div>
          </div>
        </Container>
    );
}