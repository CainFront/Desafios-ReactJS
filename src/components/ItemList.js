import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="container">
      <div className="row">
        {productos.map((producto, id) => (
          <Item key={id} productos={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
