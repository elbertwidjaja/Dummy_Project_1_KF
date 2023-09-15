import DefaultButton from "../button/DefaultButton";
import styles from "./styles.module.scss";
import { ProductListTypes } from "./types";

function ProductCard({ item, onAddCart }: ProductListTypes) {
  return (
    <div className={styles.card_list}>
      <div className={styles.card}>
        <span>{item.id}</span>
        <img
          src={item.image}
          alt="Product"
          loading="lazy"
          className={styles.product_image}
        />
        <div className={styles.titleContainer}>
          <h2>{item.title} </h2>
        </div>
        <p>${item.price} </p>
        <DefaultButton detail="Add to Cart" onClick={() => onAddCart(item)} />
      </div>
    </div>
  );
}

export default ProductCard;
