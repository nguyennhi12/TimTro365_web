import React, { useState, useCallback } from "react";
import { Wrapper, FB_GG } from "./Login.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Breadcrumb, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import AdminAPISetting from "../../config/AdminConfig";
import HomeAdmin from "../Home/Admin/HomeAdmin";
import { HookGetAdminAllInnkeeper } from "../../hook/AdminHook";
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
      <Header />
      <Breadcrumb className="breadcrum">
        <Breadcrumb.Item
          href="http://localhost:3000/"
          className="breadcrum-item"
        >
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Đăng nhập</Breadcrumb.Item>
      </Breadcrumb>
      <Form>
        <Form.Group>
          <h1>Đăng nhập </h1>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username </Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={changeusername}
            value={username_admin}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Mật khẩu"
            onChange={changepassword}
            value={password_admin}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={onLogin}
          style={{ textAlign: "center" }}
        >
          Đăng nhập
        </Button>
        {/* <a
          href="http://localhost:3000/forgotpassword"
          style={{ marginLeft: "32%" }}
        >
          Bạn quên mật khẩu?
        </a> */}
        {/* <FB_GG>
          <Button variant="primary" type="submit" className="Button-FB">
            <ImFacebook2 size={20} /> Facebook
          </Button>
          <Button variant="primary" type="submit" className="Button-GG">
            <FcGoogle size={20} /> Google
          </Button>
        </FB_GG> */}
        {/* <Form.Group className="mb-3" controlId="formBasicDangky">
          <Form.Label style={{ marginLeft: "20%" }}>
            Bạn chưa có tài khoản?
            <a href="http://localhost:3000/register" className="a-img">
              Đăng ký ngay
            </a>
          </Form.Label>
        </Form.Group> */}
      </Form>

      <Footer />
    </Wrapper>
  );
};

export default LoginAdmin;
