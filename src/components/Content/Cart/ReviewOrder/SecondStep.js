import { Col, Row, Typography, List, Button } from "antd";
import React from "react";
// import { ShoppingCartOutlined} from  '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const SecondStep = () => {

  const data = JSON.parse(localStorage.getItem("AddDeleteCart")).cart;

  return (
    <div className="SecondStepStyle">
    <Row>
      <Col className="LS" span={15}>
        <Title level={3}>Shipping Address</Title>


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


        <Title level={3}>Payment Details</Title>

        
      </Col>

      <Col className="RS" span={8}>
        <div className="RSOrderDetail">
        <Title level={3}>Order Details</Title>
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
        </div>
        <div style={{ marginTop: 24, display:'flex', justifyContent:'right'}} > 
        <Button type="primary"> Place Order </Button>
        </div>
      </Col>
      
      
    </Row>
  </div>  )
}

export default SecondStep