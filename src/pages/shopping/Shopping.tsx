import ProductList from "../../components/ProductList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ShoppingCart from "../../components/ShoppingCart";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./styles.module.scss";
// import { ShoppingTypes } from "./types";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import Cart from "../../components/ShoppingCart/Cart";

function Shopping() {
  const url = "https://fakestoreapi.com/products?limit=10";
  const { daftarProduk } = useFetch(url);
  const { onAddCart, onUpdateCart, cart } = useCart();
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  return (
    <div>
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
      <div className={styles.card_container}>
        {daftarProduk.map((item) => (
          <ProductList onAddCart={onAddCart} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Shopping;
