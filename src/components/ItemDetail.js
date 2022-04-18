import ItemCount from "./ItemCount";
import { UseCartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import { Col } from "react-bootstrap";

function ItemDetail({ objeto }) {
  const { AddItem } = UseCartContext();

  const onAdd = (cantidad) => {
    AddItem(objeto, cantidad);
    toast.success(`Perfecto,${cantidad} unidades en el carrito`);
  };

  return (
    <div className="itemDetail">
      <Col sm={4} className="itemDetailFilaUno">
        <h2 className="itemDetailTitulo">{objeto.nombre}</h2>
        <img className="itemDetailImagen" src={objeto.imagen} />
      </Col>
      <Col sm={8} className="itemDetailFilaDos">
        <h3 className="itemDetailPrecio">
          Precio:<span>${objeto.precio},00</span>
        </h3>
        <ItemCount initial={1} stock={objeto.stock} onAdd={onAdd} />
        <div className="itemDetailDescripcion">
          <h5>Descripción:</h5>
          <p>{objeto.descripcion}</p>
        </div>
        <h5 className="itemDetailStock">
          Stock: <span> {objeto.stock} unidades</span>
        </h5>
        <h6>LEGO® {objeto.serie}</h6>
      </Col>
    </div>
  );
}

export default ItemDetail;
