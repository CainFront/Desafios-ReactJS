import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import superMario from "../assets/img/superMario.png";
import starWars from "../assets/img/starWars.png";
import harryPotter from "../assets/img/harryPotter.png";
import minecraft from "../assets/img/minecraft.png";
import marvel from "../assets/img/marvel.png";
import dc from "../assets/img/dc.png";
import disney from "../assets/img/disney.png";
import jurassicWorld from "../assets/img/jurassicWorld.png";
import batman from "../assets/img/batman.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const { CartList } = UseCartContext();

  const totalWidget = CartList.map((item) => item.cantidad).reduce(
    (prev, curr) => prev + curr,
    0
  );

  return (
    <header>
      <Navbar className="navBar">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <div className="navBarLogo">
                <img
                  alt="logo"
                  src={logo}
                  width="50"
                  height="50"
                  className=""
                />{" "}
              </div>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="btnInicio">
              <div className="navBarInicio">
                <button>
                  Inicio <FontAwesomeIcon icon={faHouse} />
                </button>
              </div>
            </Link>
            <Link to="/serie/Super Mario">
              <div className="btnSecciones">
                <img
                  alt="superMario"
                  src={superMario}
                  width="60"
                  height="60"
                  className=""
                />
                <span>Super Mario</span>
              </div>
            </Link>
            <Link to="/serie/Star Wars">
              <div className="btnSecciones">
                <img
                  alt="starWars"
                  src={starWars}
                  width="60"
                  height="60"
                  className=""
                />
                <span>Star Wars</span>
              </div>
            </Link>
            <Link to="/serie/Harry Potter">
              <div className="btnSecciones">
                <img
                  alt="harryPotter"
                  src={harryPotter}
                  width="60"
                  height="60"
                  className=""
                />
                <span>Harry Potter</span>
              </div>
            </Link>
            <Link to="/serie/Minecraft">
              <div className="btnSecciones">
                <img
                  alt="Minecraft"
                  src={minecraft}
                  width="60"
                  height="60"
                  className=""
                />
                <span>Minecraft</span>
              </div>
            </Link>
            <Link to="/serie/Marvel">
              <div className="btnSecciones">
                <img
                  alt="Marvel"
                  src={marvel}
                  width="60"
                  height="60"
                  className=""
                />
                <span>Marvel</span>
              </div>
            </Link>
            <Link to="/serie/DC">
              <div className="btnSecciones">
                <img alt="DC" src={dc} width="60" height="60" className="" />
                <span>DC Comics</span>
              </div>
            </Link>
            <Link to="/serie/Disney">
              <div className="btnSecciones">
                <img
                  alt="disney"
                  src={disney}
                  width="60"
                  height="60"
                  className=""
                />
                <span>Disney</span>
              </div>
            </Link>
            <Link to="/serie/Jurassic World">
              <div className="btnSecciones">
                <img
                  alt="JurassicWorld"
                  src={jurassicWorld}
                  width="60"
                  height="60"
                  className=""
                />
                <span>Jurassic World</span>
              </div>
            </Link>
            <Link to="/serie/Batman">
              <div className="btnSecciones">
                <img
                  alt="batman"
                  src={batman}
                  width="60"
                  height="60"
                  className=""
                />
                <span>Batman</span>
              </div>
            </Link>
          </Nav>
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
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
