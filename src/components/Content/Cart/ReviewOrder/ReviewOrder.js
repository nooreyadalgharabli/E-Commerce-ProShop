import React from "react";
import "./ReviewOrder.scss";
import { Typography, Button, Steps } from 'antd';
import { useState } from 'react';
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

const { Title } = Typography;

const steps = [
  {
    title: 'Shipping and Payment',
    content: <FirstStep/>,
  },
  {
    title: 'Place an order',
    content: <SecondStep/>,
  },

];

const ReviewOrder = () => {

  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));


  return (
    <div className="ReviewOrderStyle">
      <Title level={2}> Review Order</Title>

      <Steps current={current} items={items} />
      <div>{steps[current].content}</div>
      <div style={{ marginTop: 24, display:'flex', justifyContent:'right'}} >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Review order
          </Button>
        )}
  
      </div>

    </div>
  );
};

export default ReviewOrder;
