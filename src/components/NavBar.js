import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <header id="mainHeader">
      <Link to="/">
        <h1>DeRemate.com</h1>
      </Link>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/categoria/tendencia">Tendencia</Link>
        <Link to="/categoria/ofertas">
          Ofertas F<FontAwesomeIcon icon={faBoltLightning} />
          ASH
        </Link>
      </nav>
      <Link to="carrito">
        <CartWidget />
      </Link>
    </header>
  );
};

export default NavBar;
