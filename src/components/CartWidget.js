import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <a href="#" className="iconoCarrito">
      <FontAwesomeIcon icon={faCartShopping} />
    </a>
  );
};

export default CartWidget;
