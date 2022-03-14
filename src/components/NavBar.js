import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header id="mainHeader">
      {/* <link to="/">
        <h1>DeRemate.com</h1>
      </link> */}
      <nav>
        <a href="#">Categorias</a>
        <a href="#">Ofertas</a>
        <a href="#">Ayuda</a>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
