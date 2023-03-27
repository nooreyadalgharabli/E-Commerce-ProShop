import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import RecentlyViewed from "./RecentlyViewed";
import image1 from "../../../images/Group 491-emptyCart.png"

const { Text } = Typography;

const CartContainer = () => {
  return (
    <div className="Cartstyle">
      <Link to="/">
        <Text style={{ color: "#e8e8e8", fontWeight: "bold" }}>Back / </Text>
      </Link>
      <Text>Shopping Cart</Text>
      <div className="emptyCart">
        <Text>Your Shopping cart is empty</Text>
        <img src={image1} alt='not found' />
      </div>
      <RecentlyViewed />
    </div>
  );
};

export default CartContainer;
