import React from "react";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Tabs } from 'antd';
import TopRateProductList from "./TopRateProductList";


const items = [
  {
    key: "1",
    label: `Top Rate Products`,
    children: <TopRateProductList/>,
  },
];

const TopRateProductContainer = () => {
  const { loading, error } = useSelector((state) => state.TopRate);

  return loading ? (
    <h2>
      Loading <LoadingOutlined />
    </h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div className="TopRateProductsStyle">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default TopRateProductContainer;
