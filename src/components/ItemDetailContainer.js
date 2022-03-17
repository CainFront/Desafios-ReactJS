import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { toast } from "react-toastify";
import { listaProductos } from "./ItemListContainer";

let productoUno = {
  id: 1,
  estado: "Usado",
  titulo: "Smart Tv 50 RCA Android UHD 4k Youtube Netflix",
  precio: 39.999,
  descuento: 15,
  descripcion: "Como nuevo en caja, lo compre y nunca lo use.",
  stock: 10,
  fotoUno: "https://picsum.photos/300/500",
  fotoDos: "https://picsum.photos/300/500",
  fotoTres: "https://picsum.photos/300/500",
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productoUno);
        }, 2000);
      });
    };

    getItem()
      .then((resolve) => {
        setItem(resolve);
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
