import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SearchRequest } from "../../redux";
const { Search } = Input;

const HeaderSearch = () => {
  const { filterData } = useSelector((state) => state.SearchProducts);
  const dispatch = useDispatch();

  const onSearch = (e) => {
    dispatch(SearchRequest(e));
    console.log(e);
  };

  return (
    <div>
      <Search
        allowClear
        placeholder="input search text"
        onSearch={onSearch}
        enterButton=<div>
          <Link to={`/Search/${filterData}`} style={{ color: "black" }}> 
            <SearchOutlined /> Search
          </Link>  
        </div>
      />
    </div>
  );
};

export default HeaderSearch;
