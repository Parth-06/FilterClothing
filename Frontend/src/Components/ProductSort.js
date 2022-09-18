import React, { memo } from "react";
import { CartState } from "../Context/Context";
const SingleProduct = React.lazy(() => import("./SingleProduct"));

const ProductSort = React.memo(() => {
  const {
    state: { data },
    productState: {
      byStock,
      byFastDelivery,
      sort,
      searchQuery,
      byRating,
      Men,
      Women,
      Kids,
    },
  } = CartState();

  let sortedProducts = data;

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

  if (Men) {
    sortedProducts = sortedProducts.filter((prod) => prod.category === "Men");
  }
  if (Women) {
    sortedProducts = sortedProducts.filter((prod) => prod.category === "Women");
  }
  if (Kids) {
    sortedProducts = sortedProducts.filter((prod) => prod.category === "Kids");
  }

  if (byRating) {
    sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
  }
  if (searchQuery) {
    sortedProducts = sortedProducts.filter((prod) =>
      prod.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return sortedProducts.map((prod) => {
    return <SingleProduct prod={prod} key={prod.id} />;
  });
});

export default memo(ProductSort);
