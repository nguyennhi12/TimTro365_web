import React from "react";
import { Wrapper, FB_GG } from "./Register.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Breadcrumb, Form, Button } from "react-bootstrap";
import {ImFacebook2} from 'react-icons/im';
import{FcGoogle} from 'react-icons/fc';
import UploadAndDisplayImage from './Uploadimage';
const Register =()=>{
    return(
        <Wrapper>
            <Header/>
            <Breadcrumb className="breadcrum">
                <Breadcrumb.Item href="http://localhost:3000/" className="breadcrum-item">Trang chủ</Breadcrumb.Item>                
                <Breadcrumb.Item active>Đăng ký</Breadcrumb.Item>
            </Breadcrumb>
            <Form>
                <Form.Group >
                    <h1>Đăng ký </h1>               
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Họ và tên </Form.Label>
                    <Form.Control type="name" placeholder="Họ và tên" />                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAccount">
                    <Form.Label>Tài khoản </Form.Label>
                    <Form.Control type="name" placeholder="Tài khoản" />                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Số điện thoại </Form.Label>
                    <Form.Control type="name" placeholder="Số điện thoại" />                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Địa chỉ </Form.Label>
                    <Form.Control type="name" placeholder="Địa chỉ" />                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Mật khẩu" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nhập lại mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Mật khẩu" />
                </Form.Group> 
                <label>Chọn ảnh đại diện</label>
                <UploadAndDisplayImage style={{marginTop:'4%'}}/>                
                <Button variant="primary" type="submit">
                    Đăng ký
                </Button>
                <Form.Group className="mb-3" controlId="formBasicDangky">
                    <Form.Label style={{marginLeft:'30%',marginTop:'5%'}}>Bạn có thể đăng ký với
                    </Form.Label>  
                </Form.Group>  
                <FB_GG>
                    <Button variant="primary" type="submit" className="Button-FB">
                        <ImFacebook2 size={20}/> Facebook
                    </Button>
                    <Button variant="primary" type="submit" className="Button-GG">
                        <FcGoogle size={20}/> Google
                    </Button>
                </FB_GG>
            </Form>

            <Footer/>
        </Wrapper>
    )
}

export default Register;