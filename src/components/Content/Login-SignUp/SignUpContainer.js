import React from "react";
import { useDispatch, useSelector } from "react-redux";
import image1 from "../../../images/Group 421-signup.png";
import { Link, useNavigate } from "react-router-dom";
import { Button, Divider, Form, Input, message, Space, Typography } from "antd";
import { fetchSignUp } from "../../../redux";

const { Title, Text } = Typography;

const SignUpContainer = () => {
  const { error } = useSelector((state) => state.SignUp);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(fetchSignUp(values,navigate))
  
    console.log({error})
    console.log("Success:", values);
    
    message.open({
      type: error ? "error" : "success",
      content: error ? error : 'signup success',
    })
  };

  const onFinishFailed = (errorInfo) => {
    message.open({
      type: "error",
      content: "Sign up failed",
    });
    console.log({ error });
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="SignupStyle">
      <Space>
        <div className="signupLS">
          <Title>Signup</Title>
          <p>Sign up and get exclusive offers from us</p>

          <Form
            layout="vertical"
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
            >
              <Input placeholder="Your name" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input placeholder="Your name" />
            </Form.Item>

            <Form.Item
              label="Enter your email address"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
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
                  min: 8,
                  pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$",
                  message:
                    "Please input your password! Password should be 8 digits length at least, contains at least one Capital letter, contains at least one number.",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="********" />
            </Form.Item>

            <Form.Item
              label="Confirm your password"
              name="passwordConfirmation"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="********" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 24,
                span: 24,
              }}
            >
              <Button type="primary" htmlType="submit" className="SignupButton">
                Sign up
              </Button>
            </Form.Item>
          </Form>

          <Divider></Divider>
          <div style={{ textAlign: "center" }}>
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

// <div className="emailStyle">
//             <Text className="TextStyle">Name</Text>
//             <Input required={true} placeholder="Your name" />
//           </div>
//           <div className="emailStyle">
//             <Text className="TextStyle">Enter your email address</Text>
//             <Input placeholder="name@example.com" />
//           </div>
//           <div className="passwordStyle">
//             <Text className="TextStyle">Enter your password</Text>
//             <Input.Password placeholder="********" />
//           </div>
//           <div className="passwordStyle">
//             <Text className="TextStyle">Confirm your password</Text>
//             <Input.Password placeholder="********" />
//           </div>
//           <Button className="SignupButton" type="primary">
//             Sign up
//           </Button>
