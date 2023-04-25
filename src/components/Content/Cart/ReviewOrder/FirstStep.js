import { Col, Row, Typography, Form, Input, List, Divider, Button } from "antd";
import React from "react";
import { ShoppingCartOutlined} from  '@ant-design/icons';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchShippingAddress } from "../../../../redux";

const { Title, Text } = Typography;

const FirstStep = () => {

  const data = JSON.parse(localStorage.getItem("AddDeleteCart")).cart;
  const dispatch = useDispatch();


  const onFinish = (values) => {
    dispatch(fetchShippingAddress(values))
    console.log("Success:", values);
  
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div className="FirstStepStyle">
      <Row>
        <Col className="LS" span={15}>
          <Title level={3}>Shipping Address</Title>

          <Form
            name="basic"
            labelCol={{
              span: 12,
            }}
            wrapperCol={{
              span: 20,
            }}
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row>
              <Col span={12}>
                <Form.Item label="Country" name="country">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="City" name="city">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <Form.Item label="Zip Code" name="postalCode">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Street Address" name="address">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>


          </Form>

          <Title level={3}>Payment Details</Title>

          <Form
            name="basic"
            labelCol={{
              span: 12,
            }}
            wrapperCol={{
              span: 20,
            }}
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row>
              <Col span={12}>
                <Form.Item label="Name On Card" name="CardName">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Card Number" name="CardNumber">
                  <Input suffix={<ShoppingCartOutlined />} />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <Form.Item label="Expiration Date" name="ExpirationDate">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="CVC" name="CVC">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          
        </Col>

        <Col className="RS" span={8}>
          <div className="header">
          <Title level={3}>Order Details</Title>
          <Link to= '/Cart'> <Text className="changeStyle">Change</Text> </Link>
          </div>
          <List
            itemLayout="horizontal"
            dataSource={data.items}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<img width={80} src={item.product.images} alt="not found"/>}
                  title={<p>{item.product.name}</p>}
                  description={<div className="list">
                    {item.product.discount === 0 ? <Text> $ { item.product.price }</Text> : 
                    <Text> $ {item.product.price - item.product.discount} </Text>
                    }
                  <Text> x{item.qty} </Text>
                  <Text> ${item.itemTotalPrice} </Text>
                  </div>
                  }
                />
              </List.Item>
            )}
          />
          <Divider/>
          <div style={{display:'flex', justifyContent:'space-between'}}>
          <Col> 
            <p> Subtotal</p>
            <p> Tax </p>
            <p> Shipping </p>
            <p> Total</p>
          </Col>
          <Col>
            <p> ${data.totalPrice}</p>
            <p> - </p>
            <p> - </p>
            <p> -</p>
          </Col>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FirstStep;
