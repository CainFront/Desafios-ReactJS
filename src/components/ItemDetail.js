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

function ItemDetail({ objeto }) {
  const { AddItem, CartList } = UseCartContext();
  // const [stock2, setStock2] = useState( objeto.stock);
  // const [seleccionado, setSeleccionado] = useState(false);

  // useEffect(() => {
  //   const index = CartList.findIndex((i) => i.item.id === item.id);
  //   if (index > -1) {
  //     const oldStock = CartList[index].cantidad;
  //     setStock2(oldStock > stock ? 0 : stock - oldStock);
  //   } else {
  //     setStock2(stock);
  //   }
  // });

  // antes tenia cantidad como "unidadesCompradas"
  const onAdd = (cantidad) => {
    AddItem(objeto, cantidad);
    toast.success(`Perfecto,${cantidad} unidades en el carrito`);
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
        <img src={objeto.imagen} />
      </div>
      <div className="productoDato col-md-4">
        <h2 className="productoDatoTitulo">{objeto.nombre}</h2>
        <div className="productoDatoPrecio">$ {objeto.precio}</div>
        <div className="productoDatoEspecificaciones">
          <h5>Descripción:</h5>
          <p>{objeto.descripcion}</p>
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
          <h5>{objeto.stock} unidades</h5>
        </div>
        {/* <ItemCount initial={1} stock={objeto.stock} onAdd={onAdd} /> */}
      </div>
    </Container>
  );
}

export default ItemDetail;
