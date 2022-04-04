import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ productos }) => {
  const { producto, id } = productos;
  return (
    <Card id="cardProducto" className="col-md-4">
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
      <Card.Body>
        <Card.Title className="text-center">{producto.nombre}</Card.Title>
        <Card.Text className="textoProducto">
          Quedan {producto.stock} unidades, apurate!
        </Card.Text>
        <Link
          as="Button"
          to={`/objeto/${id}`}
          variant="primary"
          className="btnDetalle"
        >
          Detalles
        </Link>
        <Button variant="success" className="btnAñadir">
          USD {producto.precio}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
