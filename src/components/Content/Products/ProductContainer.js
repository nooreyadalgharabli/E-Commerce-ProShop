import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../../redux";
import { LoadingOutlined } from "@ant-design/icons";
import "./ProductDetaile.scss";
import ProductsContainer from "../mainContent/ProductsContainer";
import ProductDescription from "./ProductDescription";


const ProductContainer = () => {
  const { loading, error } = useSelector((state) => state.ProductDetails);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  return loading ? (
    <h2>
      Loading <LoadingOutlined />
    </h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div className="ProductStyle">
      <ProductDescription/>

      <ProductsContainer />
    </div>
  );
};

export default ProductContainer;
