import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Tabs } from 'antd';
import CategoriesList from "./CategoriesList";


const items = [
  {
    key: '1',
    label: `Featured Categories`,
    children: <CategoriesList/>,
  },
];


const CategoriesContainer = () => {
  const { loading, error } = useSelector((state) => state.Categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return loading ? (
    <h2>
      Loading <LoadingOutlined />
    </h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div className="CategoriesStyle">
     <Tabs defaultActiveKey="1" items={items}  />
    </div>
  );
};

export default CategoriesContainer;
