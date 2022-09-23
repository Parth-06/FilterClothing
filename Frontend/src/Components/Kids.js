import React from "react";
import { CartState } from "../Context/Context";
import HeaderFilter from "./HeaderFilter";
import LeftBox from "./LeftBox";
import SingleProduct from "./SingleProduct";
import "react-toastify/dist/ReactToastify.css";

const Kids = () => {
  const {
    state: { data },
    productState: { byStock, byFastDelivery, sort, searchQuery, byRating },
  } = CartState();

  let Products = data;
  if (data) {
    Products = Products.filter((prod) => prod.category === "Kids");
  }
  let sortedProducts = Products;

  if (sort) {
    sortedProducts = sortedProducts.sort((a, b) =>
      sort === "lowtohigh" ? a.price - b.price : b.price - a.price
    );
  }

  if (!byStock) {
    sortedProducts = sortedProducts.filter((prod) => prod.inStock);
  }

  if (byFastDelivery) {
    sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
  }

  if (byRating) {
    sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
  }
  if (searchQuery) {
    sortedProducts = sortedProducts.filter((prod) =>
      prod.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <>
      <HeaderFilter />
      <div className="main">
        <LeftBox />

        <div className="right_box">
          {sortedProducts.map((prod) => {
            return <SingleProduct prod={prod} key={prod.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Kids;
