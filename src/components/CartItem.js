import React from "react";
import { UseCartContext } from "../context/CartContext";
import { Card, CloseButton } from "react-bootstrap";

const CartItem = ({ Item, Quantity }) => {
  const { DelItem } = UseCartContext();
  const { imagen, titulo, id, precio } = Item;

  const total = precio * Quantity;

  return (
    <Card className="cartItemContainer col-md-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagen} alt={titulo} />
      <Card.Body>
        <Card.Title className="text-center">{titulo}</Card.Title>
        <Card.Text className="text-center">
          ¿Solo {Quantity} unidades?
        </Card.Text>
        <Card.Text className="text-center">Son: ${total}</Card.Text>
        <div className="bg-dark p-1">
          <CloseButton
            onClick={() => DelItem(id)}
            variant="white"
            aria-label="Hide"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
