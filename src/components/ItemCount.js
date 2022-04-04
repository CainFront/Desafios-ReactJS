import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > initial) setContador(contador - 1);
  };

  let agregarCarrito = () => {
    onAdd(contador);
  };

  return (
    <div>
      <div className="Counter">
        {" "}
        <button type="button" onClick={restar}>
          -
        </button>
        <p className="Cantidad">Cantidad {contador}</p>
        <button type="button" onClick={sumar}>
          +
        </button>
      </div>
      <button onClick={agregarCarrito}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
