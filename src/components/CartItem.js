import React from "react";
import { UseCartContext } from "../context/CartContext";
import { CloseButton, Col } from "react-bootstrap";

const CartItem = ({ Item, Quantity }) => {
  const { DelItem } = UseCartContext();
  const { imagen, titulo, id, precio } = Item;

  const total = precio * Quantity;

  return (
    <Col sm={5} className="cartItem">
      <div className="cartItemImg">
        <img src={imagen} alt={titulo} />
      </div>
      <div className="cartItemNumeros">
        <div>
          <p>Unidades</p>
          <span>{Quantity}</span>
        </div>
        <div>
          <p>Precio</p>
          <span>${total}.00</span>
        </div>
        <CloseButton
          onClick={() => DelItem(id)}
          variant="white"
          aria-label="Hide"
          className="botonBorrar"
        />
      </div>
    </Col>
  );
};

export default CartItem;
