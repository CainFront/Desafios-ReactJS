import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <div className="itemCountContador">
        {" "}
        <Button type="button" variant="danger" onClick={restar}>
          -
        </Button>
        <p className="itemCountContadorCantidad">{contador}</p>
        <Button type="button" variant="success" onClick={sumar}>
          +
        </Button>
      </div>
      <div className="itemCountBotones">
        <button onClick={agregarCarrito} className="itemCountAgregar">
          Agregar al Carrito
        </button>
        <Link to="/Cart">
          <button className="itemCountIr">
            Ir al carrito <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
