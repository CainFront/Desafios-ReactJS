import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const listaProductos = [
  {
    id: 1,
    titulo: "Producto 1",
    stock: 10,
    precio: 50,
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    titulo: "Producto 2",
    stock: 10,
    precio: 50,
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 3,
    titulo: "Producto 3",
    stock: 10,
    precio: 50,
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 4,
    titulo: "Producto 4",
    stock: 10,
    precio: 50,
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 5,
    titulo: "Producto 5",
    stock: 10,
    precio: 50,
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 6,
    titulo: "Producto 6",
    stock: 10,
    precio: 50,
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 7,
    titulo: "Producto 7",
    stock: 10,
    precio: 50,
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 8,
    titulo: "Producto 8",
    stock: 10,
    precio: 50,
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 9,
    titulo: "Producto 9",
    stock: 10,
    precio: 50,
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 10,
    titulo: "Producto 10",
    stock: 10,
    precio: 50,
    imagen: "https://picsum.photos/200/200",
  },
];

const miOnAdd = () => {};

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const getProductos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(listaProductos);
        }, 2000);
      });
    };

    getProductos()
      .then((resolve) => {
        setProductos(resolve);
        setCargando(true);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!cargando) {
    return <div>...Cargando</div>;
  } else {
    return (
      <div className="itemContainer">
        <ItemList productos={productos} />
      </div>
    );
  }
};

export default ItemListContainer;
