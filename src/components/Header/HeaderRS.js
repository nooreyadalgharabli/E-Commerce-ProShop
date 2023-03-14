import React from 'react'
import {ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { Badge, Col, Row } from 'antd';
import { Link } from "react-router-dom"

const HeaderRS = () => {
  return (
    <div className='headerRS'>
      
        <Row> 
          <Col span={6}> <Link to = '/login'> <UserOutlined  /> </Link> </Col>
          <Col span={4}> <Badge size="small" showZero count={0}> <BookmarkFilledIcon style={{width:'2em', height:'2em'}}/> </Badge> </Col>
          <Col span={4}> <Badge size="small" showZero count={0}> <ShoppingCartOutlined /></Badge>  </Col>    
        </Row>

        <Row> 
          <Col span={6}> <Link to = '/login'> <p>Login / Sign Up</p> </Link>  </Col>
          <Col span={4}> <p>Wishlist</p> </Col>
          <Col span={4}> <p>Cart</p> </Col>    
        </Row>
  
      
    </div>
  )
}

export default HeaderRS