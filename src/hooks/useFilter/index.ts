import { useState } from "react";
import { useFilterTypes } from "./types";

const useFilter = (productList) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const SearchItem = (itemSearch, productArray) => {
    return productArray.filter((items) => items.title.includes(itemSearch));
  };

  const handleSearch = (value) => {
    const filteredItems = SearchItem(value, productList);
    setFilteredProducts(filteredItems);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    //this handle when the search input is ""
    value.trim() === "" ? setFilteredProducts([]) : handleSearch(value);
  };

  return { filteredProducts, handleInputChange };
};

export default useFilter;
