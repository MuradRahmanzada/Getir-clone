import React, { useState, useEffect } from "react";
import categoriesData from "../api/categories.json";
import CategoryItem from "../components/ui/Category";
import Title from "./ui/Title";

const Categories = () => {
  const [categories, setCategories] = useState("");

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          {categories &&
            categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Categories;
