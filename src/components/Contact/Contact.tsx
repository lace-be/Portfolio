import { Container } from "./styles";
import emailIcon from '../../assets/email-mail-svgrepo-com.svg'

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div className="contact-card">
          <a href="mailto:thomasmertens50@gmail.com">
            <img src={emailIcon} alt="email" />
            <p>thomasmertens50@gmail.com</p>
          </a>
        </div>
      </div>
    </Container>
  );
}