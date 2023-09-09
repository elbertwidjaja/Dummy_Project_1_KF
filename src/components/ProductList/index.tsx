import DefaultButton from "../button/DefaultButton";
import styles from "./styles.module.scss";
import { ProductListTypes } from "./types";

function ProductList({ item, onAddCart }: ProductListTypes) {
  return (
    <div className={styles.card_list}>
      <div className={styles.card}>
        <span>{item.id}</span>
        <img src={item.image} alt="Product" className={styles.product_image} />
        <h2>{item.title} </h2>
        <h2>${item.price} </h2>
        <DefaultButton detail="Add to Cart" onClick={() => onAddCart(item)} />
      </div>
    </div>
  );
}

export default ProductList;
