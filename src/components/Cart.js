import { React, useState } from "react";
import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

export const Cart = () => {
  const { CartList, EmptyCart, PriceTotal } = UseCartContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>
      {loading ? (
        <h1>cargando Carrito..</h1>
      ) : (
        <div>
          <h2>Carrito</h2>

          {CartList.length < 1 ? (
            <h2>Todavia no hay nada.</h2>
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
              <button onClick={EmptyCart}>Borrar Carrito</button>
              <h2>Total: {PriceTotal()} $</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
