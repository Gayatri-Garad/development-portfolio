import React, { useEffect, useState } from "react";
import axios from "axios";
import Categoury from "./Categoury";
import ProductAccessData from "./ProductAccessData";

function GrousaryData() {
  const [product, setProduct] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const [categories, setCategories] = useState([
    "fruits",
    "vegetables",
    "meat",
    "grains",
    "dairy",
    "seafood",
    "condiments",
  ]);

  const fetchData = async () => {
    try {
      const url = "https://dummyjson.com/products/category/groceries";
      const response = await axios.get(url);

      if (response.data && response.data.products) {
        setProduct(response.data.products);
        filterList(response.data.products, "fruits");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function filterList(products, tag) {
    const filteredItems = products.filter((product) =>
      product.tags.includes(tag)
    );
    setFilterData(filteredItems);
  }

  return (
    <>
      <center>
        <h1>Grocery Items</h1>
      </center>

      <Categoury
        productsType={categories}
        productItems={product}
        filter={filterList}
      />

      <ProductAccessData productaccess={filterData} />
    </>
  );
}

export default GrousaryData;
