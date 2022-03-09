import { Container } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer";

const Main = () => {
  return (
    <Container as="main" id="mainInicio">
      <ItemListContainer id="itemListContainer" />
    </Container>
  );
};

export default Main;
