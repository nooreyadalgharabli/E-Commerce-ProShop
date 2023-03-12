import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const HeaderSearch = () => {
    const onSearch = (value) => console.log(value);
  return (
    <div>
        <Search placeholder="input search text" onSearch={onSearch}  enterButton=<div><SearchOutlined /> Search </div>/>
    </div>
  )
}

export default HeaderSearch