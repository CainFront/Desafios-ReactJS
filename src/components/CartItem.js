import React from "react";
import { UseCartContext } from "../context/CartContext";

const CartItem = ({ Item, Quantity }) => {
  const { DelItem } = UseCartContext();
  const { imagen, titulo, id, precio } = Item;

  const total = precio * Quantity;

  return (
    <div className="cartItemContainer">
      <img src={imagen} alt={titulo} />
      <h4>{titulo}</h4>
      <h4> {Quantity} Units</h4>
      <h4> U$D {total}</h4>
      <button className="deleteItem" onClick={() => DelItem(id)}>
        X
      </button>
    </div>
  );
};

export default CartItem;
