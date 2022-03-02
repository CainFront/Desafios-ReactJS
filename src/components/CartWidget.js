import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <a href="#" className="iconoCarrito">
      <FontAwesomeIcon icon={faBasketShopping} />
    </a>
  );
};

export default CartWidget;
