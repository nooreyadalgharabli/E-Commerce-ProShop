import React from "react";
import CarouselContainer from "./CarouselContainer";
import CategoriesContainer from "./CategoriesContainer";
import ProductsContainer from "./ProductsContainer";
import TopRateProductContainer from "./TopRateProductContainer";


const MainContent = () => {
  return (
    <div >
      <CarouselContainer/>
      <CategoriesContainer/>
      <ProductsContainer/>
      <TopRateProductContainer/>
    </div>
  );
};

export default MainContent;
