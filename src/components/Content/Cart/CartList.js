import React from "react";
import { Button, Card, Col, Divider, InputNumber, List, Row } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import { fetchCart, fetchDeleteCart } from "../../../redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CartList = () => {
  const data = JSON.parse(localStorage.getItem("AddDeleteCart")).cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const onChange = (value) => {
  //   localStorage.setItem('NumOfQTY', JSON.stringify({productId: data.product._id , qty: value}), { expires: 7 });
  //   console.log('changed', value);
  // };

  return (
    <div className="CartListStyle">
      <Row style={{justifyContent: 'space-between'}}>
        <Col span={18}>
          <List
            grid={{
              // gutter: 16,
              column: 1,
            }}
            dataSource={data.items}
            renderItem={(item, index) => (
              <List.Item>
                <Card style={{backgroundColor:'#f2f2f2'}}>
                  <Row style={{justifyContent: 'space-between'}}>
                    <Col span={8}>
                      <img
                        width={200}
                        src={item.product ? item.product.images : null}
                        alt="not found"
                      />
                    </Col>
                    <Col span={5}> {item.product ? item.product.name : null} </Col>
                    <Col span={6}>
                      <InputNumber
                        addonBefore="-"
                        addonAfter="+"
                        defaultValue={item.qty}
                        min={0}
                        onChange={(value) => {
                          localStorage.setItem('NumOfQTY', JSON.stringify({productId: item.product._id , qty: value}), { expires: 7 });
                          console.log('changed', value);
                          dispatch(fetchCart(JSON.parse(localStorage.getItem('NumOfQTY')),navigate))
                        }}
                      />
                    </Col>
                    <Col span={4}>
                      <div className="priceStyle">
                        {item.product ? (
                          item.product.discount === 0 ? (
                            <p style={{ fontSize: 20, fontWeight: 'bold' }}>
                              ${item.product.price}
                            </p>
                            
                          ) : (
                            <p
                              style={{
                                color: "#707070",
                                textDecoration: "line-through",
                              }}
                            >
                              ${item.product.price}
                            </p>
                          )
                        ) : null}

                        {item.product ? (
                          item.product.discount === 0 ? null : (
                            <p
                              style={{
                                fontSize: 20,
                                color: "black",
                                fontWeight: "bold",
                              }}
                            >
                              $ {item.product.price - item.product.discount}
                            </p>
                          )
                        ) : null}
                      </div>
                    </Col>
                    <Col span={1}> <CloseOutlined  onClick={() => {dispatch(fetchDeleteCart(item.product._id,navigate)); }} />  </Col>
                  </Row>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={6}>
          <Card className="totalCartStyle">
          <p>Subtotal ({data.totalQty}) items</p>
          <p> ${data.totalPrice} </p>
          <Divider/>
          <Link to={'/Order'}>
          <Button className="buttonStyle">Proceed to checkout</Button>
          </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartList;
