import { React, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { UseCartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";

function ItemDetail({ item }) {
  const { imagen, estado, titulo, precio, descuento, descripcion, stock } =
    item;

  const { AddItem, CartList } = UseCartContext();
  const [stock2, setStock2] = useState(stock);
  const [seleccionado, setSeleccionado] = useState(false);

  useEffect(() => {
    const index = CartList.findIndex((i) => i.item.id === item.id);
    if (index > -1) {
      const oldStock = CartList[index].cantidad;
      setStock2(oldStock > stock ? 0 : stock - oldStock);
    } else {
      setStock2(stock);
    }
  });

  // antes tenia cantidad como "unidadesCompradas"
  const onAdd = (cantidad) => {
    AddItem(item, cantidad);
  };

  return (
    <Container id="itemDetail">
      <div className="productoBtn col-md-1">
        <Button variant="outline-dark" size="sm" className="p-3 m-3">
          1
        </Button>
        <Button variant="outline-dark" size="sm" className="p-3 m-3">
          2
        </Button>
        <Button variant="outline-dark" size="sm" className="p-3 m-3">
          3
        </Button>
        <Button variant="outline-dark" size="sm" className="p-3 m-3">
          4
        </Button>
      </div>
      <div className="productoFoto col-md-4">
        <img src={imagen} />
      </div>
      <div className="productoDato col-md-4">
        <h5 className="productoDatoEstado">{estado}</h5>
        <h2 className="productoDatoTitulo">{titulo}</h2>
        <div className="productoDatoPrecio">
          $ {precio} <span>{descuento}% OFF</span>
        </div>
        <div className="productoDatoEspecificaciones">
          <h5>Descripción:</h5>
          <p>{descripcion}</p>
        </div>
      </div>
      <div className="productoEnvio col-md-3">
        <div className="productoEnvioDescripcion">
          <p>
            <FontAwesomeIcon icon={faTruckFast} /> Envio Gratis a todo el pais{" "}
            <FontAwesomeIcon icon={faBoltLightning} /> <span>FULL</span>
          </p>
        </div>
        <div className="productoEnvioStock">
          <h5>stock disponible:</h5>
          <h5>{stock} unidades</h5>
        </div>
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      </div>
    </Container>
  );
}

export default ItemDetail;
