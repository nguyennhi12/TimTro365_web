import React from "react";
import { Wrapper, Download, Support, First_Footer,End_Footer, LienKet, DiaChi } from "./Footer.styles";
import MaQR from '../../image/MaQR.png'
import {ImFacebook2} from 'react-icons/im'
import{FcGoogle} from 'react-icons/fc'
const Footer = () =>{
    return(
        <Wrapper>
            <First_Footer>
                <Download>
                    <h6 className="h6">TẢI ỨNG DỤNG TÌM TRỌ 365</h6>
                    <img src={MaQR} alt="Mã QR" className="img"/>               
                    <a href="http://webcoban.vn" className="a">Hoặc tải ứng dụng tại đây</a>
                </Download>
                <Support>
                    <h6>
                    HỖ TRỢ KHÁCH HÀNG                   
                    </h6>
                    <a href="#" className="a">Trung tâm trợ giúp</a>  <br/>
                    <a href="#" className="a">Qui định</a> <br/>
                    <a href="#" className="a">Hướng dẫn</a> <br/>
                    <a href="#" className="a">Liên hệ và hỗ trợ</a> <br/>
                </Support>
                <Support>
                    <h6>
                    VỀ ỨNG DỤNG TÌM TRỌ 365                 
                    </h6>
                    <a href="#" className="a">Giới thiệu</a>  <br/>
                    <a href="#" className="a">Tuyển dụng</a> <br/>
                    <a href="#" className="a">Truyền thông</a> <br/>                    
                </Support>
            </First_Footer>            
            <End_Footer>
                <LienKet>
                    <h6>LIÊN KẾT TÀI KHOẢN:</h6>
                    <ImFacebook2 size={45} className="icon"/> 
                    <FcGoogle size={50} className="icon"/>
                </LienKet>
                <DiaChi>
                    <h6>
                        ĐỊA CHỈ LIÊN HỆ:
                    </h6>
                    <p>Trụ sở chính:</p> 
                    <p>145/2 đường số 9, phường Linh Tây, Thành phố Thủ Đức, Thành Phố Hồ Chí Minh</p> 
                    <p>Chi nhánh 1:</p>
                    <p>Tòa B03, Kí túc xá khu B, đường Tô Vĩnh Diện, phường Đông Hòa, Thành phố Dĩ An, tỉnh Bình Dương</p>
                    <p>Email hỗ trợ:</p>
                    <p>timtro365@gmail.com - SĐT hỗ trợ: 0786962329 - 0797772505</p>
                </DiaChi>
            </End_Footer>
        </Wrapper>
    )
}
export default Footer;