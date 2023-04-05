import { BookmarkIcon } from "@radix-ui/react-icons";
import { Button, Card, List, Rate } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../../redux";

const TopRateProductList = () => {
  const { data } = useSelector((state) => state.TopRate);
  const dispatch = useDispatch();


  return (
    <List
      bordered
      grid={{
        gutter: 9,
        column: 3,
      }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card
          bordered={false}
          >
            <img
              width={150}
              height={150}
              src={item.images}
              alt="not found"
            ></img>

            <p>{item.name}</p>

            <Rate allowHalf value={item.rating} />

            <p style={{ fontWeight: "bold" }}>${item.price}</p>

            <div style={{ marginTop:10}}>
              <Button icon={<BookmarkIcon />} />
              <Button type="primary" style={{ marginLeft: 20 }} onClick={() => {dispatch(fetchCart({productId : item._id, qty: 1}))}}>
                Add to card
              </Button>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default TopRateProductList;
