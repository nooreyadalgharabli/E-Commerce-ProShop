import React from "react";
import "./ProductDetaile.scss";
import { Typography, List, Rate } from "antd";
import { useSelector } from "react-redux";

const { Title } = Typography;

const Reviews = () => {
  const { reviews } = useSelector((state) => state.ProductDetails.data);

  return (
    <div className="reviewsStyle">
      <Title>Reviews</Title>
      <List
        bordered
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={reviews}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={
                <div>
                  <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Rate allowHalf value={item.rating} /> 
                    <div style={{ color: "#dddddd" }}>{item.createdAt}</div>
                  </div>
                  <p>{item.comment}</p>
                </div>
              }
            />
            
          </List.Item>
        )}
      />
    </div>
  );
};

export default Reviews;
