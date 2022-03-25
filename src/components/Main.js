import { Container } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../components/Cart";

const Main = () => {
  return (
    <Container as="main" id="mainInicio">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Container>
  );
};

export default Main;
