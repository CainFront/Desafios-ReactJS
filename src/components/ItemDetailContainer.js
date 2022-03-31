import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { dbFirebase } from "./firebase";
import { getDoc, doc, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const legoCollection = collection(dbFirebase, "productos");
    const documentos = getDocs(legoCollection);

    documentos
      .then((respuesta) => {
        const aux = [];

        respuesta.forEach((documento) => {
          const lego = {
            id: documento.id,
            ...documento.data(),
          };

          aux.push(lego);
        });
      })
      .catch(() => {
        toast.error("algo paso con tu base de datos");
      });
  });

  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(aux);
        }, 2000);
      });
    };

    getItem()
      .then((resolve) => {
        setItem(resolve.find((product) => product.id === +id));
        setCargando(true);
      })
      .catch((error) => toast.error(error));
  }, []);

  if (!cargando) {
    return <div>Esperando respuesta del Servidor...</div>;
  } else {
    return (
      <div className="itemDetailContainer">
        <ItemDetail item={item} />
      </div>
    );
  }
};

export default ItemDetailContainer;
