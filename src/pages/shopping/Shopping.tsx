import ProductCard from "../../components/ProductList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ShoppingCart from "../../components/ShoppingCart";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./styles.module.scss";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import Cart from "../../components/ShoppingCart/Cart";
import { useForm } from "react-hook-form";
import FilteredCards from "../../components/FilteredCards";
import useFilter from "../../hooks/useFilter";
import { Link } from "react-router-dom";

const url = "https://fakestoreapi.com/products?limit=25";

function Shopping() {
  const { loading, data: productList } = useFetch({
    url,
    initialData: [],
  });
  const { filteredProducts, handleInputChange } = useFilter(productList);
  const { onAddCart, onUpdateCart, cart } = useCart();
  const [cartVisible, setCartVisible] = useState(false);

  const { register } = useForm({
    defaultValues: {
      filter: "",
    },
  });

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const isLoading = (load: boolean) => {
    return load ? styles.loader : styles.card_container;
  };

  return (
    <div>
      <Header />
      <div className={styles.filter_container}>
        <form>
          <input
            {...register("filter")}
            onChange={handleInputChange}
            placeholder="Search"
          />
        </form>
        {filteredProducts.length > 0 &&
          filteredProducts.map((item: any) => <FilteredCards data={item} />)}
      </div>
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
          // <Link to="/">
          <Link to={`/product/${item.id}`}>
            <ProductCard onAddCart={onAddCart} item={item} />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Shopping;
