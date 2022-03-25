import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const [show, setShow] = useState(true);

  const sumar = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > initial) setContador(contador - 1);
  };

  let agregarCarrito = () => {
    onAdd(contador);
    setShow(false);
  };

  if (show && stock > 0) {
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
  }

  if (stock == 0) {
    return <p>Sin unidades disponibles</p>;
  }

  if (!show && stock > 0) {
    return (
      <Link to="/Cart">
        <button>Ir al carrito</button>
      </Link>
    );
  }
};

export default ItemCount;
