import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, InputNumber, Space, Typography } from "antd";
import { useSelector } from "react-redux";

const { Text } = Typography;

const ProductDescription = () => {
  const { data } = useSelector((state) => state.ProductDetails);
  const [color, setColor] = useState("-");
  const [categories, setCategories] = useState("-");

  return (
    <div className="ProductDescriptionStyle">
      <Link to="/">
        <Text style={{ color: "#e8e8e8", fontWeight: "bold" }}>Back / </Text>
      </Link>
      <Text>{data.name}</Text>
      <Space>
        <div className="leftSide">
          <img src={data.images} alt="not found" width={250} height={300} />
          <div className="images">
            <Space>
              <img src={data.images} alt="not found" width={100} />
              <img src={data.images} alt="not found" width={100} />
              <img src={data.images} alt="not found" width={100} />
            </Space>
          </div>
        </div>
        <div className="rightSide">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Text>{data.name}</Text>
              <br />
              <InputNumber addonBefore="-" addonAfter="+" defaultValue={1} />
            </div>
            <div className="priceStyle">
              {data.discount === 0 ? (
                <p style={{ fontSize: 20 }}>${data.price}</p>
              ) : (
                <p
                  style={{
                    color: "#707070",
                    textDecoration: "line-through",
                  }}
                >
                  ${data.price}
                </p>
              )}
              {data.discount === 0 ? null : (
                <p style={{ color: "red" }}>
                  {Math.round(
                    100 - (100 * (data.price - data.discount)) / data.price
                  )}
                  % Sale
                </p>
              )}
              {data.discount === 0 ? null : (
                <p
                  style={{
                    fontSize: 20,
                    color: "black",
                  }}
                >
                  $ {data.price - data.discount}
                </p>
              )}
            </div>
          </div>

          <div className="colorStyle">
            <Text style={{ color: "#a5a5a5" }}>Color: </Text>
            <Text>{color}</Text>
            <br />
            {data.colors
              ? data.colors.map((item) => {
                  return (
                    <Button
                      shape="circle"
                      onClick={() => {
                        setColor(item);
                      }}
                      style={{ backgroundColor: item }}
                    />
                  );
                })
              : null}
          </div>

          <div className="categoriesStyle">
            <Text style={{ color: "#a5a5a5" }}>Categories: </Text>
            <Text>{categories}</Text>
            <br />
            {data.categories
              ? data.categories.map((item) => {
                  return (
                    <Button
                      onClick={() => {
                        setCategories(item);
                      }}
                    >
                      {item}
                    </Button>
                  );
                })
              : null}
          </div>

          {/*

          <div className='sizeStyle'>
            <Text style={{ color: "#a5a5a5" }}>Size: </Text>
            <Text>{Size}</Text>
            <br />
            <Button
              onClick={() => {
                setSize("64GB");
              }
            }
            >
              64GB
            </Button>
            <Button
              onClick={() => {
                setSize("256GB");
              }}
            >
              256GB
            </Button>
            <Button
              onClick={() => {
                setSize("512GB");
              }}
            >
              512GB
            </Button>
          </div>
  
            */}

          <p>{data.description}</p>
        </div>
      </Space>
    </div>
  );
};

export default ProductDescription;
