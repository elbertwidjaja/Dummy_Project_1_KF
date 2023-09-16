import { useState } from "react";
import { useParams } from "react-router-dom";
import { useParamsTypes } from "./types";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./styles.module.scss";
import useCart from "../../hooks/useCart";
import ShoppingCart from "../ShoppingCart";
import Header from "../Header";
import Cart from "../ShoppingCart/Cart";
import DefaultButton from "../button/DefaultButton";
import Footer from "../Footer";

function ProductDetail() {
  const { productId } = useParams<useParamsTypes>();
  const url = `https://fakestoreapi.com/products/${productId}`;
  const { data: productList } = useFetch({
    url,
    initialData: [],
  });
  console.log(productList, "ini product list");

  const { onAddCart, onUpdateCart, cart } = useCart();
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <>
      <Header />
      {cartVisible && (
        <Cart
          onUpdateCart={onUpdateCart}
          cartVisible={cartVisible}
          cart={cart}
          toggleCart={toggleCart}
        />
      )}
      <ShoppingCart toggleCart={toggleCart} />
      <div className={styles.product_container}>
        <img src={productList.image} alt={productList.title} />
        <div className={styles.product_detail}>
          <h1>{productList.title}</h1>
          <h2>Price</h2>
          <p>
            <b>${productList.price}</b>
          </p>
          <h2>Description</h2>
          <p>{productList.description} </p>
          <div>
            <DefaultButton
              detail="Add to Cart!"
              onClick={() => onAddCart(productList)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
