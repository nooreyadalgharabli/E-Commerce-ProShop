import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchProduct } from '../../redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import SearchListPage from './SearchListPage';


const items = [
  {
    key: '1',
    label: `Featured Products`,
    children: <SearchListPage/>,
  },
];

const SearchPage = () => {
  const { loading, error, filterData } = useSelector((state) => state.SearchProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchProduct(filterData));
  }, [dispatch, filterData]);

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

export default SearchPage