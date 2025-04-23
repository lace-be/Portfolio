import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import { Container } from './styles';

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <HashLink smooth to="/#home" className="logo" style={{ paddingRight: '15px' }}>
        <span>{"<Thomas "}</span>
        <span>{" Mertens/>"}</span>
      </HashLink>
      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch"></label>
      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to="/#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="/#cv" onClick={closeMenu}>
          CV
        </NavHashLink>
        <NavHashLink smooth to="/#project" onClick={closeMenu}>
          Projects
        </NavHashLink>
        <NavHashLink className="button" smooth to="/#contact" onClick={closeMenu}>
          Contact
        </NavHashLink>
      </nav>
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Open menu' : 'Close menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive);
        }}
      ></div>
    </Container>
  );
}
