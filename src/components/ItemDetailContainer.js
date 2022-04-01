import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { dbFirebase } from "./firebase";
import {
  query,
  where,
  getDocs,
  collection,
  getDoc,
  doc,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [error, setError] = useState(false);
  const [objeto, setObjeto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const legoCollection = collection(dbFirebase, "productos");
    const documento = getDoc(doc(legoCollection, id));
    documento.then((respuesta) => setObjeto(respuesta.data()));
  }, [id]);

  return (
    <div id="ItemDetailContainer">
      <ItemDetail objeto={objeto} />
    </div>
  );
};

export default ItemDetailContainer;
