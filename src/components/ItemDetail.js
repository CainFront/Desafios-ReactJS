import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import ItemCount from "./ItemCount";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const { estado, titulo, precio, descuento, descripcion, stock, imagen } =
    item;
  const [seleccionado, setSeleccionado] = useState(false);
  const [ocultar, setOcultar] = useState(false);

  const OnAdd = (unidadesCompradas) => {
    toast.success(`Genial, has añadido ${unidadesCompradas} unidades`);
    if (unidadesCompradas != undefined) {
      setSeleccionado(true);
      setOcultar(true);
    }
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
        {ocultar ? (
          <Link to="/Carrito">
            <Button className="btn btn-success btn-sm p-2 fs-2">
              {" "}
              Terminar Compra{" "}
            </Button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock - seleccionado} onAdd={OnAdd} />
        )}
      </div>
    </Container>
  );
};

export default ItemDetail;
