import { Container, Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <Container fluid="md">
      <Row>
        {productos.map((producto, id) => (
          <Item key={id} productos={producto} />
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
