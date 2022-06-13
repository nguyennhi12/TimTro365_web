import React from "react";
import { Wrapper, FB_GG } from "./Post.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Breadcrumb, Form, Button } from "react-bootstrap";
import UploadAndDisplayImage from "./ImageUpload";
const Post =()=>{
      
    return(
        <Wrapper>
            <Header/>
            <Breadcrumb className="breadcrum">
                <Breadcrumb.Item href="http://localhost:3000/" className="breadcrum-item">Trang chủ</Breadcrumb.Item>                
                <Breadcrumb.Item active>Đăng tin</Breadcrumb.Item>
            </Breadcrumb>
            <Form>
                <Form.Group >
                    <h1>Đăng tin </h1>               
                </Form.Group>
                <Form.Group className="mb-3">
                    <h4>Chọn khu vực: Địa bàn TPHCM </h4>               
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Quận huyện:  </Form.Label>  
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>                  
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phường xã:  </Form.Label>  
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>                   
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Đường:  </Form.Label>  
                    <Form.Control type="text" placeholder="Võ Văn Ngân" />                  
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Số nhà:  </Form.Label>  
                    <Form.Control type="text" placeholder="số 1" />                  
                </Form.Group> 
                <Form.Group className="mb-3">
                    <h4>Chọn danh mục </h4>               
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Chọn danh mục:  </Form.Label>  
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>                  
                </Form.Group> 
                <Form.Group className="mb-3">
                    <h4>Thông tin chi tiết </h4>               
                </Form.Group> 
                <Form.Group className="mb-3" >
                    <Form.Label>Diện tích:  </Form.Label>  
                    <Form.Control type="text" placeholder="60 m*m" />                  
                </Form.Group> 
                <Form.Group className="mb-3" >
                    <Form.Label>Giá:  </Form.Label>  
                    <Form.Control type="text" placeholder="3 triệu (VND)" />                  
                </Form.Group> 
                <Form.Group className="mb-3" >
                    <Form.Label>Cọc:  </Form.Label>  
                    <Form.Control type="text" placeholder="3 triệu (VND)" />                  
                </Form.Group> 
                <Form.Group className="mb-3" >
                    <Form.Label>Chủ đề:  </Form.Label>  
                    <Form.Control type="text" placeholder="Cho thuê kí túc xá thoải mái" />                  
                </Form.Group> 
                <Form.Group className="mb-3" >
                    <Form.Label>Địa chỉ:  </Form.Label>  
                    <Form.Control type="text" placeholder="số 1, Võ Văn Ngân, Linh Chiểu, Thủ Đức" />                  
                </Form.Group> 
                <Form.Group className="mb-3" >
                    <Form.Label>Đặc điểm nổi bật:  </Form.Label>  
                    <Form.Control type="text" placeholder="nhà thoáng mát, rộng rãi" />                  
                </Form.Group>
                <label>Chọn hình ảnh và video</label>
                <UploadAndDisplayImage/>               
                <Button variant="primary" type="submit">
                    Đăng tin
                </Button>
                
            </Form>

            <Footer/>
        </Wrapper>
    )
}

export default Post;