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
        {/* APUNTA A LA LANDING */}
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        {/* General (final dinamico) */}
        <Route path="/carrito" element={<Carrito />} />
        {/* Carrito de compra*/}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        {/* Detalles de los productos y variable*/}
      </Routes>
    </Container>
  );
};

export default Main;
