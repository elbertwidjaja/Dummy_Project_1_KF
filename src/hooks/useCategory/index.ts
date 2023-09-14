import axios from "axios";
import { useEffect, useState } from "react";
import { fakeStoreApiUrl } from "../../env";
import { useCategoryTypes } from "./types";

function useCategory() {
  const [categoryList, setCategoryList] = useState([]);
  const [categoryListItem, setCategoryListItem] = useState([]);
  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${fakeStoreApiUrl}/categories`);
      setCategoryList(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchCategoryItem = async (selectedCategory: useCategoryTypes) => {
    console.log(`${fakeStoreApiUrl}/category/${selectedCategory}`);
    try {
      const response = await axios.get(
        `${fakeStoreApiUrl}/category/${selectedCategory}`
      );
      // setCategoryListItem(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching item", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return {
    categoryList,
    fetchCategoryItem,
    categoryListItem,
    setCategoryListItem,
  };
}

export default useCategory;
