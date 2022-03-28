import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { UseCartContext } from "../context/CartContext";

const NavBar = () => {
  const { CartList } = UseCartContext();

  const totalWidget = CartList.map((item) => item.cantidad).reduce(
    (prev, curr) => prev + curr,
    0
  );

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
      {CartList.length < 1 ? (
        <></>
      ) : (
        <>
          <div className="cartNavBar">
            <Link to="/Cart">
              <CartWidget />
            </Link>
            <h4>{totalWidget}</h4>
          </div>
        </>
      )}
    </header>
  );
};

export default NavBar;
