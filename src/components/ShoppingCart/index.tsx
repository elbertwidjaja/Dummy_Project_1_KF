import styles from "./styles.module.scss";
import { ShoppingCartTypes } from "./types";

const ShoppingCart: React.FC<ShoppingCartTypes> = ({ toggleCart }) => {
  return (
    <div className={styles.iconContainer}>
      <button className={styles.iconLink} onClick={toggleCart}>
        <span className={`material-icons ${styles.icon}`}>
          shopping_cart_checkout
        </span>
      </button>
    </div>
  );
};

export default ShoppingCart;
