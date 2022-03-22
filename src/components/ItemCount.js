import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
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
    <div className="itemCount">
      <div className="itemCountBtn">
        <button className="resta" onClick={restar}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <p> {contador} Unidad/es</p>
        <button className="suma" onClick={sumar}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <button className="itemCountAgregar" onClick={agregarCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
