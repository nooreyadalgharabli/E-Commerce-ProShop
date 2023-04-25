import React from 'react'
import RecentlyViewed from '../RecentlyViewed'
import { Button, Col, Row, Typography } from 'antd';
const { Title, Text } = Typography;

const PlaceOrder = () => {
    const data = JSON.parse(localStorage.getItem("AddDeleteCart"));
    const AddressData = JSON.parse(localStorage.getItem("ShippingAddress"));

  return (
    <div className='PlaceOrderStyle'>
        <div className='TopSide'>
            <Title level={2}> Payment Success! </Title>
            <Row>
                <Col span={8} style={{fontWeight: 'bold'}}>
                    <p> Order number</p>
                    <p> Shipping Address </p>
                    <p> Order Items </p>
                </Col>

                <Col>
                    <p> {AddressData.order._id}</p>
                    <p> {AddressData.order.shippingAddress.address} ,{AddressData.order.shippingAddress.city} ,{AddressData.order.shippingAddress.country} - {AddressData.order.shippingAddress.postalCode} </p>
                    {data.cart.items.map((data) => <Text style={{fontSize:14, fontWeight: 'unset'}}> {data.product.name}. </Text>)}
                    
                </Col>
            </Row>

            <p> An email will be sent to your email address</p>
            <p> contains order Confirmation and tacking code. </p>
            
        </div>

        <div style={{display: 'flex', justifyContent: 'right', marginRight: 100}}>
         <Button type='primary'> Keep Shopping</Button>
        </div>

        <RecentlyViewed/>
    </div>
  )
}

export default PlaceOrder