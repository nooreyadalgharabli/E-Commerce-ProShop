import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../../redux";
import { LoadingOutlined } from "@ant-design/icons";
import "./ProductDetaile.scss";
import ProductsContainer from "../mainContent/ProductsContainer";
import ProductDescription from "./ProductDescription";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import { Typography } from "antd";

const { Text } = Typography;

const ProductContainer = () => {
  const { loading, data, error } = useSelector((state) => state.ProductDetails);
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
      <Link to="/" style={{paddingLeft:50}}>
        <Text style={{ color: "#e8e8e8", fontWeight: "bold" }}>Back / </Text>
      </Link>
      <Text>{data.name}</Text>

      <ProductDescription />

      <Reviews />

      <ProductsContainer />
    </div>
  );
};

export default ProductContainer;
