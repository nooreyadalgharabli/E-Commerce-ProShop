import { Alert, Button, Checkbox, Divider, Form, Input, Space, Typography } from "antd";
import React from "react";
import "./Login-Signp.scss";
import image1 from "../../../images/Group240-login.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../../redux";

const { Title } = Typography;

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const LoginContainer = () => {

  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(fetchLogin(values));
    <Alert message="Success sign up" closable type="success" />
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    <Alert message={errorInfo} closable type="error" />
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="LoginStyle">
      <Space>
        <div className="loginLS">
          <Title>Login</Title>
          <p>Login with your data that you entered during registration.</p>
          
          <Form
            layout="vertical"
            name="basic"
            labelCol={{
              span: 16,
            }}
            wrapperCol={{
              span: 19,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >

            <Form.Item
              label="Enter your email address"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: 'email',
                },
              ]}
            >
              <Input placeholder="name@example.com" />
            </Form.Item>

            <Form.Item
              label="Enter your password"
              name="password"
              rules={[
                {
                  required: true,
                  min:8,
                  message: "Please input your password! ",
                },
              ]}
            >
              <Input.Password placeholder="********" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 16,
                span: 24,
              }}
            >
              <Button type="primary" htmlType="submit" className="loginButton">
                Login
              </Button>
            </Form.Item>
          </Form>

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


// <div className="emailStyle">
//             <Text className="TextStyle">Enter your email address</Text>
//             <Input placeholder="name@example.com" />
//           </div>
//           <div className="passwordStyle">
//             <Text className="TextStyle">Enter your password</Text>
//             <Input.Password placeholder="********" />
//           </div>
//           <Button className="loginButton" type="primary">Login</Button>