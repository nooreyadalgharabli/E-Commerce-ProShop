import { Typography } from "antd";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import RecentlyViewed from "./RecentlyViewed";
import image1 from "../../../images/Group 491-emptyCart.png"
import CartList from "./CartList";

const { Text } = Typography;

const CartContainer = () => {

  const data = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="Cartstyle">
      <Link to="/">
        <Text style={{ color: "#e8e8e8", fontWeight: "bold" }}>Back / </Text>
      </Link>
      <Text>Shopping Cart</Text>
      {data ? data.totalQty !== 0 ? 
      <CartList/>
      :
      <Fragment>
      <div className="emptyCart">
        <Text>Your Shopping cart is empty</Text>
        <img src={image1} alt='not found' />
      </div>
      <RecentlyViewed />
      </Fragment>
    : 
    <Fragment>
      <div className="emptyCart">
        <Text>Your Shopping cart is empty</Text>
        <img src={image1} alt='not found' />
      </div>
      <RecentlyViewed />
      </Fragment>
  }
    </div>
  );
};

export default CartContainer;
