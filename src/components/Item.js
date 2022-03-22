import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { titulo, stock, precio, imagen, id } = producto;
  return (
    <Card id="cardProducto" className="col-md-4">
      <Card.Img variant="top" src={imagen} alt={titulo} />
      <Card.Body>
        <Card.Title className="text-center">{titulo}</Card.Title>
        <Card.Text className="textoProducto">
          Quedan {stock} unidades, apurate!
        </Card.Text>
        <Link
          as="Button"
          to={`/item/${id}`}
          variant="primary"
          className="btnDetalle"
        >
          Detalles
        </Link>
        <Button variant="success" className="btnAñadir">
          $ {precio}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
