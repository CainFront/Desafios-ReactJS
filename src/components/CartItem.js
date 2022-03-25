import React from "react";
import { UseCartContext } from "../context/CartContext";
import { Card, Button } from "react-bootstrap";

const CartItem = ({ Item, Quantity }) => {
  const { DelItem } = UseCartContext();
  const { imagen, titulo, id, precio } = Item;

  const total = precio * Quantity;

  return (
    <Card className="cartItemContainer col-md-3">
      <Card.Img variant="top" src={imagen} alt={titulo} />
      <Card.Body>
        <Card.Title className="text-center">{titulo}</Card.Title>
        <Card.Text className="text-center">
          ¿Solo {Quantity} unidades?
        </Card.Text>
        <Button
          variant="success"
          className="deleteItem"
          w-100
          onClick={() => DelItem(id)}
        >
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
