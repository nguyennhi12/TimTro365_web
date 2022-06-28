import React, { useState, useCallback } from "react";
import { Wrapper, FB_GG } from "./Login.styles";

import { Breadcrumb, Form, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import AdminAPISetting from "../../config/AdminConfig";
import logo from "../../image/logo365.PNG";
const LoginAdmin = () => {
  const [username_admin, setUsername_admin] = useState();
  const [password_admin, setPassword_admin] = useState();

  const changeusername = (e) => {
    setUsername_admin(e.target.value);
  };

  const changepassword = (e) => {
    setPassword_admin(e.target.value);
  };
  const navigate = useNavigate();

  async function onLogin(e) {
    e.preventDefault();
    console.warn(username_admin, password_admin);
    const admin = { username_admin, password_admin };
    try {
      const token = localStorage.getItem("accessToken");
      const result = await AdminAPISetting.getLoginAdmin(admin);
      console.log(result);
      if (result.statusCode === 200) {
        localStorage.setItem("token", result?.data.token);
        localStorage.setItem("account", JSON.stringify(result?.data));
        // const { account } = HookGetAdminAllInnkeeper(result?.data.token);
        // localStorage.setItem("listAccount", JSON.stringify(account));
        alert("Đăng nhập thành công");
        navigate(`/admin?token=${result?.data.token}`);
      } else {
        alert("Lỗi đăng nhập");
      }
    } catch (error) {
      console.log(error);
      alert("Lỗi đăng nhập");
    }
  }

  return (
    <Wrapper>
      <div
        style={{
          position: "absolute",
          height: "901px",
          width: "50%",
          left: "0px",
          top: "0px",
          background: `linear-gradient(0deg, rgba(21, 44, 112, 0.26), rgba(21, 44, 112, 0.26)),
             url(https://kientrucauchau.vn/wp-content/uploads/2022/01/ban-ve-thiet-ke-noi-that-nha-tro-dep.jpeg), absolute:'stretch'`,
        }}
      />
      <Image
        src="https://kientrucauchau.vn/wp-content/uploads/2022/01/ban-ve-thiet-ke-noi-that-nha-tro-dep.jpeg"
        style={{
          position: "absolute",
          height: "901px",
          width: "50%",
          left: "0px",
          top: "0px",
          opacity: 0.8,
        }}
      />
      <h2
        style={{
          position: "absolute",
          top: "20px",
          right: "53%",
          color: "white",
        }}
      >
        Tìm trọ 365
      </h2>
      <div
        style={{
          right: "0%",
          top: "150px",
          position: "absolute",
          width: "50%",
        }}
      >
        <Image
          src={logo}
          style={{
            marginBottom: "50px",
            marginLeft: "35%",
          }}
        />
        <Form style={{ width: "50%" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={changeusername}
              value={username_admin}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={changepassword}
              value={password_admin}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={onLogin}>
            Login
          </Button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default LoginAdmin;
