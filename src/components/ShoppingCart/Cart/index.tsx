import styles from "./styles.module.scss";
import { CartTypes } from "./types";

function Cart({ onUpdateCart, toggleCart, cart, cartVisible }: CartTypes) {
  const cartClassName = cartVisible
    ? `${styles.cart} ${styles.cart_visible}`
    : `${styles.cart} ${styles.cart_hidden}`;

  //this is used to count title
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={cartClassName}>
      <button onClick={toggleCart}>Close</button>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div className={styles.cartItem}>
              <div>
                <p>
                  {item.title} - ${item.price}
                </p>
                <div>
                  <button onClick={() => onUpdateCart(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateCart(item.id, 1)}>+</button>
                </div>
              </div>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>Grand Total : ${totalPrice.toFixed(2)}</p>
      <button>Lets Checckout Now!</button>
    </div>
  );
}

export default Cart;
