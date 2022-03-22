import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { toast } from "react-toastify";
import { listaProductos } from "./ItemListContainer";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [cargando, setCargando] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(listaProductos);
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
