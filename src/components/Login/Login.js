import React from "react";
import { Wrapper, FB_GG } from "./Login.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Breadcrumb, Form, Button } from "react-bootstrap";
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <Wrapper>
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
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Mật khẩu" />
                </Form.Group>                
                <Button variant="primary" type="submit">
                    Đăng nhập
                </Button>
                <a href="http://localhost:3000/forgotpassword" style={{marginLeft:'32%'}} > 
                    Bạn quên mật khẩu?
                </a>    */}
        <FB_GG>
          <Button variant="primary" type="submit" className="Button-FB">
            <ImFacebook2 size={20} /> Facebook
          </Button>
          <Button variant="primary" type="submit" className="Button-GG">
            <FcGoogle size={20} /> Google
          </Button>
        </FB_GG>
        {/* <Form.Group className="mb-3" controlId="formBasicDangky">
                    <Form.Label style={{marginLeft:'20%'}}>Bạn chưa có tài khoản?
                    <a href="http://localhost:3000/register" className='a-img' > 
                    Đăng ký ngay
                    </a>
                    </Form.Label>  
                </Form.Group> */}
      </Form>

      <Footer />
    </Wrapper>
  );
};

export default Login;
