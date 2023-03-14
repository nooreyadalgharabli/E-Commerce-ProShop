import { Button, Checkbox, Divider, Input, Space, Typography } from "antd";
import React from "react";
import "./Login-Signp.scss";
import image1 from "../../../images/Group240-login.png";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const LoginContainer = () => {
  return (
    <div className="LoginStyle">
      <Space>
        <div className="loginLS">
          <Title>Login</Title>
          <p>Login with your data that you entered during registration.</p>
          <div className="emailStyle">
            <Text className="TextStyle">Enter your email address</Text>
            <Input placeholder="name@example.com" />
          </div>
          <div className="passwordStyle">
            <Text className="TextStyle">Enter your password</Text>
            <Input.Password placeholder="********" />
          </div>
          <Button className="loginButton" type="primary">Login</Button>
          <Checkbox onChange={onChange}>Remember me</Checkbox>
          <p className="pStyle"> Forgot your Password?</p>
          <Divider></Divider>
          <div className="signUpButton">
          <Link to={'/SignUp'}> <Button>Sign up now</Button> </Link>
          </div>
        </div>

        <img src={image1} alt="not found " width={600} />
      </Space>
    </div>
  );
};

export default LoginContainer;
