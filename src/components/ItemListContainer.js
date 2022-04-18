import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { dbFirebase } from "./firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    if (!id) {
      const legoCollection = collection(dbFirebase, "productos");
      const documentos = getDocs(legoCollection);

      documentos
        .then((respuesta) =>
          setProductos(
            respuesta.docs.map((doc) => ({ producto: doc.data(), id: doc.id }))
          )
        )

        .catch((error) => toast.error("Error al obtener los legos"))
        .finally(() => setLoading(false));
    } else {
      const legoCollection = collection(dbFirebase, "productos");
      const miFiltro = query(legoCollection, where("serie", "==", id));
      const documentos = getDocs(miFiltro);

      documentos
        .then((respuesta) =>
          setProductos(
            respuesta.docs.map((doc) => ({ producto: doc.data(), id: doc.id }))
          )
        )
        .catch((error) => toast.error("Error al obtener los legos"))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <>
      <p>
        {loading ? (
          <div className="boxSpinner">
            <div className="spinner"></div>
          </div>
        ) : (
          " "
        )}
      </p>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
