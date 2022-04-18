import { React, useState, useEffect } from "react";
import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dbFirebase } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAt, faUser } from "@fortawesome/free-solid-svg-icons";
import cartVacio from "../assets/img/cartVacio.png";
import validator from "validator";

export const Cart = () => {
  const { CartList, EmptyCart, PriceTotal } = UseCartContext();
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardPIN, setCardPIN] = useState("");

  const [validarName, setValidarName] = useState(false);
  const [validarEmail, setValidarEmail] = useState(false);
  const [validarCardNumber, setValidarCardNumber] = useState(false);
  const [validarCardYear, setValidarCardYear] = useState(false);
  const [validarCardPIN, setValidarCardPIN] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const confirmarCompra = () => {
    const orden = {
      buyer: {
        nombre: name,
        email: email,
        cardNumber: cardNumber,
        cardYear: cardYear,
        cardPIN: cardPIN,
      },
      items: CartList,
      date: serverTimestamp(),
      total: PriceTotal(),
    };

    const pedidosCollection = collection(dbFirebase, "ordenes");
    const pedido = addDoc(pedidosCollection, orden);

    pedido.then((res) => {
      toast(`👌 Pedido exitoso,  N° ${res.id}`, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });

    EmptyCart();
  };

  useEffect(() => {
    setValidarName(validator.isAlpha(name, "es-ES", { ignore: " " }));
    setValidarEmail(validator.isEmail(email));
    setValidarCardNumber(validator.isNumeric(cardNumber, "es-ES"));
    setValidarCardYear(validator.isNumeric(cardYear, "es-ES"));
    setValidarCardPIN(validator.isNumeric(cardPIN, "es-ES"));
  }, [name, email, cardNumber, cardYear, cardPIN]);

  return (
    <Container fluid>
      {loading ? (
        <div className="boxSpinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <Row className="cart">
          {CartList.length < 1 ? (
            <>
              <div className="imgCartVacio">
                {" "}
                <img alt="cartVacio" src={cartVacio} />
                <Link to="/">
                  <Button variant="warning" size="lg" className="m-3">
                    Volver a Comprar
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <Col sm={7} className="cartProductos">
                <Container>
                  <Row>
                    {CartList.map((i) => (
                      <CartItem
                        key={i.item.id}
                        Item={i.item}
                        Quantity={i.cantidad}
                      />
                    ))}
                  </Row>
                </Container>
                <button onClick={EmptyCart} className="botonBorrarCart">
                  Borrar Carrito
                </button>
              </Col>
              <Col sm={5} className="cartDatos">
                <div className="cartDatosPersonales">
                  <h2>DATOS</h2>
                  <div>
                    <FontAwesomeIcon icon={faUser} color="white" />
                    <input
                      onChange={(event) => setName(event.target.value)}
                      className="cartInput"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faAt} color="white" />
                    <input
                      onChange={(event) => setEmail(event.target.value)}
                      className="cartInput"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faAddressCard} color="white" />
                    <input
                      onChange={(event) => setCardNumber(event.target.value)}
                      className="cartInput"
                      placeholder="Card Number"
                      required
                    />
                  </div>
                  <div>
                    <input
                      onChange={(event) => setCardYear(event.target.value)}
                      className="cartInput inputShort"
                      placeholder="Year expiration"
                      required
                    />
                    <input
                      onChange={(event) => setCardPIN(event.target.value)}
                      className="cartInput inputShort"
                      placeholder="PIN"
                      type="password"
                      required
                    />
                  </div>
                </div>
                <div className="cartDatosTotal">
                  <p>
                    Total (Con envio): <span>${PriceTotal()}</span>.00
                  </p>
                </div>
                <button
                  onClick={confirmarCompra}
                  className="btnConfirmar"
                  disabled={
                    !validarName ||
                    !validarEmail ||
                    !validarCardNumber ||
                    !validarCardYear ||
                    !validarCardPIN
                  }
                >
                  Confirmar Compra
                </button>
              </Col>
            </>
          )}
          ;
        </Row>
      )}
    </Container>
  );
};

export default Cart;
