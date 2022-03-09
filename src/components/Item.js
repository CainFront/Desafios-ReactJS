import { Card, Button, CardImg, Col, Row, Container } from "react-bootstrap";

const Item = ({ producto }) => {
  const { titulo, stock, precio, imagen } = producto;
  return (
    <Card id="cardProducto" className="col-md-4">
      <Card.Img variant="top" src={imagen} alt={titulo} />
      <Card.Body>
        <Card.Title className="text-center">{titulo}</Card.Title>
        <Card.Text className="textoProducto">
          Quedan {stock} unidades, apurate!
        </Card.Text>
        <Button variant="primary" className="btnDetalle">
          Detalles
        </Button>
        <Button variant="success" className="btnAñadir">
          $ {precio}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
