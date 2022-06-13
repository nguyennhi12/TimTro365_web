import React from "react";
import { Wrapper, FB_GG } from "./Forgotpassword.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Breadcrumb, Form, Button } from "react-bootstrap";
import {ImFacebook2} from 'react-icons/im'
import{FcGoogle} from 'react-icons/fc'
const Forgotpassword =()=>{
    return(
        <Wrapper>
            <Header/>
            <Breadcrumb className="breadcrum">
                <Breadcrumb.Item href="http://localhost:3000/" className="breadcrum-item">Trang chủ</Breadcrumb.Item>                
                <Breadcrumb.Item active>Quên mật khẩu</Breadcrumb.Item>
            </Breadcrumb>
            <Form>
                <Form.Group >
                    <h1>Quên mật khẩu </h1>               
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Nhập email xác nhận" />                    
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-3'>
                    Gửi email
                </Button>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mã code </Form.Label>
                    <Form.Control placeholder="Nhập mã xác nhận" />                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Mật khẩu" />
                </Form.Group> 
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Nhập lại mật khẩu" />
                </Form.Group>               
                <Button variant="primary" type="submit">
                    Đổi mật khẩu
                </Button>
            </Form>

            <Footer/>
        </Wrapper>
    )
}

export default Forgotpassword;