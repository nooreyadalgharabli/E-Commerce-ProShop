import React from "react";
import { Card, List, Space } from "antd";
import { useSelector } from "react-redux";

const CategoriesList = () => {
  const { data } = useSelector((state) => state.Categories);

  return (
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      itemLayout="horizontal"
      dataSource={data}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 4,
        position: "top",
      }}
      
      renderItem={(item) => (
        <List.Item>
          <Space direction="vertical">
            <Card
              size="small"
              style={{ width: "150", height: '150', backgroundColor: "#f7f8fc" }}
            >
              <img
                width={150}
                height={150}
                src={item.image}
                alt="not found"
              ></img>
            </Card>
            <p>{item.name}</p>
          </Space>
        </List.Item>
      )}
    />
  );
};

export default CategoriesList;
