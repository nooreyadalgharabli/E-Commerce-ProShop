import React from 'react'
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Tabs } from 'antd';
import TopRateProductList from '../mainContent/TopRateProductList';

const items = [
    {
      key: "1",
      label: `Recently viewed`,
      children: <TopRateProductList/>,
    },
  ];


const RecentlyViewed = () => {
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
}

export default RecentlyViewed