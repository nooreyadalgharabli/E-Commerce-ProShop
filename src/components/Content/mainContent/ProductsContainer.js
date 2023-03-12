import { LoadingOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from '../../../redux';
import ProductsList from './ProductsList';


const items = [
  {
    key: '1',
    label: `Featured Products`,
    children: <ProductsList/>,
  },
];

const ProductsContainer = () => {
  const { loading, error } = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return loading ? (
    <h2>
      Loading <LoadingOutlined />
    </h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div className="ProductsStyle">
     <Tabs defaultActiveKey="1" items={items}  />
    </div>
  );
}

export default ProductsContainer