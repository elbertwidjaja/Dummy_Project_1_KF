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
        <h2 className={styles.item_title}>{item.title} </h2>
        <p>${item.price} </p>
        <DefaultButton detail="Add to Cart" onClick={() => onAddCart(item)} />
      </div>
    </div>
  );
}

export default ProductCard;
