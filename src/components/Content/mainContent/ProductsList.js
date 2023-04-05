import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Card, List, Rate } from "antd";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { fetchCart } from "../../../redux";


const ProductsList = () => {
  const { data } = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  return (
    <List
      grid={{
        gutter: 9,
        column: 3,
      }}
      itemLayout="horizontal"
      dataSource={data}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
        position: "bottom",
        align: "center",
      }}
      renderItem={(item) => (
        <List.Item>
          <Card style={{ backgroundColor: "white" }}>
          <Link to={`/Products/${item._id}`}>
            <Badge
              count={
                item.discount === 0
                  ? null
                  : `${Math.round(
                      -100 + (100 * (item.price - item.discount)) / item.price
                    )}%`
              }
              // offset={[10, 10]}
            >
              <img
                width={150}
                height={150}
                src={item.images}
                alt="not found"
              ></img>
            </Badge>

            <p>{item.name}</p>

            <Rate allowHalf value={item.rating} />

            <div>
              {item.discount === 0 ? null : (
                <p
                  style={{
                    fontWeight: "bold",
                    display: "inline-flex",
                    paddingRight: 10,
                    color: "red",
                  }}
                >
                  $ {item.price - item.discount}
                </p>
              )}
              {item.discount === 0 ? (
                <p style={{ fontWeight: "bold", display: "inline-flex" }}>
                  ${item.price}
                </p>
              ) : (
                <p
                  style={{
                    fontWeight: "bold",
                    display: "inline-flex",
                    textDecoration: "line-through",
                  }}
                >
                  ${item.price}
                </p>
              )}
            </div>

            </Link>
            
            <div>
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

export default ProductsList;
