import { Container } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer";
import ItemDetail from "./ItemDetail";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  return (
    <Container as="main" id="mainInicio">
      <ItemListContainer id="itemListContainer" />
      <ItemDetailContainer />
    </Container>
  );
};

export default Main;
