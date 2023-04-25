import React, { useEffect } from "react";
import { Carousel, Image, Space, Typography, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRateProduct } from "../../../redux";
import image1 from "../../../images/1-.png"
import image2 from "../../../images/2-Smartphone.png"
import image3 from "../../../images/3-.png"


const { Title } = Typography;

const CarouselContainer = () => {

  const { loading, data, error } = useSelector((state) => state.TopRate);
  const dispatch = useDispatch();

  const image = [image1, image2, image3];

  useEffect(() => {
    dispatch(fetchTopRateProduct());
  }, [dispatch]);

  return loading ? (
    <h2>
      Loading <LoadingOutlined />
    </h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <Carousel autoplay style={{backgroundColor:'#f5f5f5'}}>
      {data.map(({  price, name, description }, index) => {
        return (
          <div>
          <Space >
            <div className="carouselLS">
              <p style={{ fontSize: 14 }}>Save up to ${price}</p>
              <Title level={3}> {name}</Title>
              <p style={{ fontSize: 12 }}> {description} </p>
              <Button type="primary">Shop now</Button>
            </div>

            <Image width={300} src={image[index]} preview={false} />
          </Space>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselContainer;
