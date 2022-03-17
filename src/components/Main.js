import { Container } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer";
import ItemDetail from "./ItemDetail";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import Carrito from "./Carrito";

const Main = () => {
  return (
    <Container as="main" id="mainInicio">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Container>
  );
};

export default Main;
