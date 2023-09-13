import { useForm } from "react-hook-form";
import useCategory from "../../hooks/useCategory";
import { useState, useEffect } from "react";

function Category() {
  const {
    categoryList,
    fetchCategoryItem,
    categoryListItem,
    setCategoryListItem,
  } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      selectCategory: "",
    },
  });

  const handleSelectChange = async (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    console.log("Selected Category:", selectedValue);

    const categoryItem = await fetchCategoryItem(selectedValue);
    setCategoryListItem(categoryItem);
    console.log(categoryListItem);
  };

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <h1>Category Data</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("selectCategory")} onChange={handleSelectChange}>
          {categoryList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
      <div>
        <h2>Items in {selectedCategory}</h2>
        <ul>
          {categoryListItem.length > 0 ? (
            categoryListItem.map((item) => <li key={item.id}>{item.title}</li>)
          ) : (
            <li>No items found</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Category;
