import ProductCard from "../../components/ProductList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ShoppingCart from "../../components/ShoppingCart";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./styles.module.scss";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import Cart from "../../components/ShoppingCart/Cart";

const url = "https://fakestoreapi.com/products?limit=25";

function Shopping() {
  const { loading, data: productList } = useFetch({
    url,
    initialData: [],
  });
  const { onAddCart, onUpdateCart, cart } = useCart();
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  const isLoading = (load: boolean) => {
    return load ? styles.loader : styles.card_container;
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
      <div className={isLoading(loading)}>
        {productList.map((item: any) => (
          <ProductCard onAddCart={onAddCart} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Shopping;
