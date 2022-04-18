import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";

const Item = ({ productos }) => {
  const { producto, id } = productos;
  return (
    <Col sm={3}>
      <Card id="cardProducto">
        <Card.Img
          variant="top"
          className="cardImg"
          src={producto.imagen}
          alt={producto.nombre}
        />
        <Card.Body className="textoProducto">
          <Card.Text className="textoProductoSerie">
            LEGO® {producto.serie}
          </Card.Text>
          <Card.Title className="text-center textoProductoTitulo">
            {producto.nombre}
          </Card.Title>
          <Link to={`/objeto/${id}`}>
            <button className="btnDetalle">
              Detalles <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
