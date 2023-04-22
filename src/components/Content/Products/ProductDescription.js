import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Button, InputNumber, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { fetchCart } from "../../../redux";

const { Text } = Typography;

const ProductDescription = () => {
  const { data } = useSelector((state) => state.ProductDetails);
  const dispatch = useDispatch();
  const [color, setColor] = useState("-");
  const [categories, setCategories] = useState("-");
  
  const QTY = {productId: data._id , qty: 1}
  localStorage.setItem('NumOfQTY', JSON.stringify(QTY), { expires: 7 });

  const onChange = (value) => {
    localStorage.setItem('NumOfQTY', JSON.stringify({productId: data._id , qty: value}), { expires: 7 });
    console.log('changed', value);
  };
  

  return (
    <div className="ProductDescriptionStyle">
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
              <InputNumber addonBefore="-" addonAfter="+" defaultValue={1} min={0} onChange={onChange}/>
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

          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            <div style={{margin: 10, alignSelf:'flex-end'}}>
              <Button style={{borderColor:'#fcdd06'}} icon={<BookmarkIcon />} />
              <Button type="primary" style={{ marginLeft: 20, backgroundColor:'#fcdd06', color:'black', width:150 }} onClick={() => {dispatch(fetchCart(JSON.parse(localStorage.getItem('NumOfQTY'))))}}>
                Add to card
              </Button>
            </div>
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
