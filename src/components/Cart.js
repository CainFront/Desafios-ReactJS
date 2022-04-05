import { React, useState } from "react";
import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import {
  Button,
  Modal,
  ModalBody,
  ModalTitle,
  ModalFooter,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { dbFirebase } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const Cart = () => {
  const { CartList, EmptyCart, PriceTotal } = UseCartContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const confirmarCompra = () => {
    const orden = {
      buyer: {
        nombre: "Cain",
        telefono: "Caamiña",
        email: "ejemplo@gmail.com",
      },
      items: CartList,
      date: serverTimestamp(),
      total: PriceTotal(),
    };

    const pedidosCollection = collection(dbFirebase, "ordenes");
    const pedido = addDoc(pedidosCollection, orden);
  };

  return (
    <div>
      {loading ? (
        <h2>cargando Carrito..</h2>
      ) : (
        <div className="carritoFlex">
          <h2>Carrito</h2>

          {CartList.length < 1 ? (
            <>
              <h2>Todavia no hay nada.</h2>
              <Link to="/">
                <Button variant="warning" size="lg" className="m-3">
                  VOLVER A COMPRAR
                </Button>
              </Link>
            </>
          ) : (
            <div>
              <div>
                <div>
                  {CartList.map((i) => (
                    <CartItem
                      key={i.item.id}
                      Item={i.item}
                      Quantity={i.cantidad}
                    />
                  ))}
                </div>
              </div>
              <div className="d-grid gap-2">
                {" "}
                <Button onClick={EmptyCart} variant="danger" size="lg">
                  Borrar Carrito
                </Button>
                <Button onClick={confirmarCompra} variant="success" size="lg">
                  Confirmar Compra
                </Button>
              </div>
              ;<h2>Total: {PriceTotal()} USD</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
