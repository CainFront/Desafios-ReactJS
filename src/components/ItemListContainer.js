import ItemCount from "./ItemCount";
const miOnAdd = () => {};

const ItemListContainer = ({ greetings }) => {
  return (
    /* <p>{greetings}</p> */
    <>
      <ItemCount initial={1} stock={10} onAdd={miOnAdd} />
    </>
  );
};

export default ItemListContainer;
