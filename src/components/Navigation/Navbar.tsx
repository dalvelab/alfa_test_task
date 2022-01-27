import { Link } from "react-router-dom";

import { Container } from "../UI";

import "./Navbar.scss";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar__main">
      <Container>
        <div className="links__wrapper">
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
        </div>
      </Container>
    </nav>
  );
};
