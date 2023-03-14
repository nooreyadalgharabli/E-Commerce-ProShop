import React from "react";
import image1 from "../../../images/Group 421-signup.png";
import { Link } from "react-router-dom";
import { Button, Divider, Input, Space, Typography } from "antd";

const { Title, Text } = Typography;

const SignUpContainer = () => {
  return (
    <div className="SignupStyle">
      <Space>
        <div className="signupLS">
          <Title>Signup</Title>
          <p>Sign up and get exclusive offers from us</p>
          <div className="emailStyle">
            <Text className="TextStyle">Name</Text>
            <Input placeholder="Your name" />
          </div>
          <div className="emailStyle">
            <Text className="TextStyle">Enter your email address</Text>
            <Input placeholder="name@example.com" />
          </div>
          <div className="passwordStyle">
            <Text className="TextStyle">Enter your password</Text>
            <Input.Password placeholder="********" />
          </div>
          <div className="passwordStyle">
            <Text className="TextStyle">Confirm your password</Text>
            <Input.Password placeholder="********" />
          </div>
          <Button className="SignupButton" type="primary">
            Sign up
          </Button>
          <Divider></Divider>
          <div style={{textAlign:'center'}}>
            <Text className="textstyle">Have an account ?</Text>
            <Link to={"/login"}>
              <Text className="textLinkStyle">Login</Text>
            </Link>
          </div>
        </div>

        <img src={image1} alt="not found " width={650} />
      </Space>
    </div>
  );
};

export default SignUpContainer;
