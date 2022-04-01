import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { nombre, stock, precio, imagen, id } = producto;
  return (
    <Card id="cardProducto" className="col-md-4">
      <Card.Img variant="top" src={imagen} alt={nombre} />
      <Card.Body>
        <Card.Title className="text-center">{nombre}</Card.Title>
        <Card.Text className="textoProducto">
          Quedan {stock} unidades, apurate!
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
          USD {precio}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
