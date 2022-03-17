import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export let listaProductos = [
  {
    id: 1,
    titulo: "Producto 1 (Tendencia)",
    stock: 10,
    precio: 50,
    categoria: "tendencia",
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    titulo: "Producto 2 (Tendencia)",
    stock: 10,
    precio: 50,
    categoria: "tendencia",
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 3,
    titulo: "Producto 3 (Tendencia)",
    stock: 10,
    precio: 50,
    categoria: "tendencia",
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 4,
    titulo: "Producto 4 (Tendencia)",
    stock: 10,
    precio: 50,
    categoria: "tendencia",
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 5,
    titulo: "Producto 5 (Tendencia)",
    stock: 10,
    precio: 50,
    categoria: "tendencia",
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 6,
    titulo: "Producto 6 (ofertas)",
    stock: 10,
    precio: 50,
    categoria: "ofertas",
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 7,
    titulo: "Producto 7 (ofertas)",
    stock: 10,
    precio: 50,
    categoria: "ofertas",
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 8,
    titulo: "Producto 8 (ofertas)",
    stock: 10,
    precio: 50,
    categoria: "ofertas",
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 9,
    titulo: "Producto 9 (ofertas)",
    stock: 10,
    precio: 50,
    categoria: "ofertas",
    imagen: "https://picsum.photos/200/200",
  },
  {
    id: 10,
    titulo: "Producto 10 (ofertas)",
    stock: 10,
    precio: 50,
    categoria: "ofertas",
    imagen: "https://picsum.photos/200/200",
  },
];

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getProductos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // console.log(id); comentado porque lo uso y no tiene sentido un toasty para esto.
          resolve(listaProductos);
        }, 2000);
      });
    };

    getProductos()
      .then((resolve) => {
        if (id == "tendencia") {
          const tendencia = listaProductos.filter(
            (producto) => producto.categoria == "tendencia"
          );
          setProductos(tendencia);
          setCargando(true);
        } else if (id == "ofertas") {
          const ofertas = listaProductos.filter(
            (producto) => producto.categoria == "ofertas"
          );
          setProductos(ofertas);
          setCargando(true);
        } else {
          setProductos(resolve);
          setCargando(true);
        }
      })
      .catch((error) => {
        toast.error("Error al cargar los productos ");
      });
  }, [id]);

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
