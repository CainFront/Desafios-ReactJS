import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { dbFirebase } from "./firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import { Container, Row } from "react-bootstrap";

const ItemDetailContainer = () => {
  const [objeto, setObjeto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const legoCollection = collection(dbFirebase, "productos");
    const documento = getDoc(doc(legoCollection, id));
    documento.then((respuesta) => setObjeto(respuesta.data()));
  }, [id]);

  return (
    <Container id="ItemDetailContainer">
      <Row>
        <ItemDetail objeto={objeto} />
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
