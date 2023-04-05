import React, { useEffect } from "react";
import "./profile.scss";
import { Avatar, Button, Col, Divider, Row, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../redux";
import { Link } from "react-router-dom";
// import Cookies from 'js-cookie';


const { Title, Text } = Typography;

const ProfileContainer = () => {

  const {data} = useSelector((state) => state.Profile)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile())
  },[dispatch])

  return (
    <div className="profileStyle">
      <Row>
        <Col className="ProfileLS" span={8}>
          <div style={{ paddingLeft: 50 }}>
            <Avatar size={100} icon={<UserOutlined />} />
            <Text style={{ paddingLeft: 30, paddingRight:10, fontSize: 30 }}>{data.firstName} {data.lastName}</Text>
          </div>
          <Title level={4}>My Orders</Title>
          <Title level={4}>Wishlist</Title>
          <Title level={4}>Notifcations</Title>
          <Title level={4}>Settings</Title>
          <Divider />
          <Link to='/' onClick={() => localStorage.clear()}>
          <Title level={4}>Logout</Title>
          </Link>
        </Col>

        <Col className="ProfileRS" span={15}>
          <div>
            <Title>My Profile</Title>
            <Row>
              <Col className="LS">
                <Title level={4}>First Name</Title>
                <Title level={4}>Last Name</Title>
                <Title level={4}>Email</Title>
                <Title level={4}>Birthday</Title>
              </Col>

              <Col className="RS">
                <Title level={4}>{data.firstName} </Title>
                <Title level={4}>{data.lastName}</Title>
                <Title level={4}>{data.email}</Title>
                <Title level={4}>{data.dateOfBirth}</Title>
              </Col>
            </Row>
            <Button>Change Password</Button>
          </div>
          <div className="PhotoRS">
            <Avatar size={180} icon={<UserOutlined />} src={data.profileImage}/>
            <Button>Upload new photo</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileContainer;
