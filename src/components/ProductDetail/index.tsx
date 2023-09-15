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

const url = "https://fakestoreapi.com/products?limit=25";

function ProductDetail() {
  const { data: productList } = useFetch({
    url,
    initialData: [],
  });
  const { onAddCart, onUpdateCart, cart } = useCart();
  const { productId } = useParams<useParamsTypes>();
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  if (
    !productList.length ||
    Number(productId) <= 0 ||
    Number(productId) > productList.length
  ) {
    return <div>Loading...</div>;
  }

  const product = productList[Number(productId) - 1];

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
        <img src={product.image} alt="Product_image" />
        <div className={styles.product_detail}>
          <h1>{product.title}</h1>
          <h2>Price</h2>
          <p>
            <b>${product.price}</b>
          </p>
          <h2>Description</h2>
          <p>{product.description} </p>
          <div>
            <DefaultButton
              detail="Add to Cart!"
              onClick={() => onAddCart(product)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
