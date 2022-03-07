import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="itemCount">
      <p>Nokia 5200</p>
      <div className="itemCountBtn">
        <button
          href="#"
          className="resta"
          onClick={restar}
          disabled={contador === 1}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <p> {contador} Unidad/es</p>
        <button
          href="#"
          className="suma"
          onClick={sumar}
          disabled={contador === stock}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <button className="itemCountAgregar">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
