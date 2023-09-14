import { useState } from "react";
import { ProductListTypes } from "./types";

const useFilter = (productList: ProductListTypes) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductListTypes>(
    []
  );

  const handleSearch = (value: string) => {
    const filteredItems = SearchItem(value);
    setFilteredProducts(filteredItems);
  };

  const SearchItem = (itemSearch: string) => {
    return productList.filter((items) => items.title.includes(itemSearch));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    //this handle when the search input is ""
    value.trim() === "" ? setFilteredProducts([]) : handleSearch(value);
  };

  return { filteredProducts, handleInputChange };
};

export default useFilter;
