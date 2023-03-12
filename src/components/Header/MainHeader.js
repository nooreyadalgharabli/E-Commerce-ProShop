import React, { Fragment } from 'react'
import { Col, Row, Typography } from 'antd';
import HeaderSearch from './HeaderSearch';
import HeaderRS from './HeaderRS';
const { Text } = Typography;


const MainHeader = () => {
  return (
    <Fragment>
        <Row>
            <Col span={7}>
                <Text strong style={{color:'#fcdd06'}}>Pro</Text>
                <Text strong style={{color:'white'}}>Shop</Text>
            </Col>
            <Col span={8}>
              <HeaderSearch/>
            </Col>
            <Col span={8}>
              <HeaderRS/>
            </Col>
        </Row>
    </Fragment>
  )
}


export default MainHeader