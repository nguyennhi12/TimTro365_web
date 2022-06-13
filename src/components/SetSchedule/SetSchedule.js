import React , {useCallback, useState} from "react";
import { Wrapper, Info, Schedule } from "./SetSchedule.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Toolbar from "../Home/Toolbar/Toolbar";
import { Breadcrumb, Image, ListGroup } from "react-bootstrap";
import{HiLocationMarker} from 'react-icons/hi'
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';

export const SetSchedule = ()=>{
    const [value, setValue] = useState(new Date());
    const onChange = useCallback(
        (val) => {
        setValue(val);
        },
        [setValue],
    );
    // Lấy api những ngày mà inn đã có lịch hẹn isdisable
    const isDisabled = useCallback((date) => {
        // disable wednesdays and any date that is divisible by 3 - Ví dụ hoi
        if (date.getDate() % 3 === 0) {
          return true;
        }
    }, []);
    const isHighlight = useCallback((date) => {
        // highlight any data that is divisible by 5
        if (date.getDate() % 5 === 0) {
          
          return true;
        }
    }, []);
    return(
        <Wrapper>
            <Header/>            
            <Toolbar/>
            <Breadcrumb className="breadcrum">
                <Breadcrumb.Item href="http://localhost:3000/" className="breadcrum-item">Trang chủ</Breadcrumb.Item>                
                <Breadcrumb.Item active>Đặt lịch hẹn</Breadcrumb.Item>
            </Breadcrumb>
            <Info>
                <h3 style={{margin: "1% auto 2% auto", width:"50%"}}>Mã tin: NEWS96177E23-E7ED-49B4</h3>
                <div className="infocus-inn">                    
                    {/* người đăng tin */}
                    <div className="infoinn">
                        <Image src={`https://drive.google.com/uc?id=1V2kkJPnVaa3y3zGtUQ0oPPJnlKdYEt0E`} className='avatar'/>
                        <div className="info">
                            <h6>Đỗ Ngọc Trọng</h6>
                            <p>số 1, Võ Văn Ngân, phường Linh Chiểu, TP Thủ Đức, TPHCM</p>
                            <p>0908986918</p>
                        </div>
                    </div>
                    {/* người xem */}
                    <div className="infoinn" >
                        <Image src={`https://drive.google.com/uc?id=1mLOoGuog6-VGa8IHkvqRdnURG8lTq4El`} className='avatar'/>
                        <div className="info">
                            <h6>Nguyễn Nhi</h6>
                            <p>số 1, Võ Văn Ngân, phường Linh Chiểu, TP Thủ Đức, TPHCM</p>
                            <p>0908986918</p>
                        </div>
                    </div>
                </div>
                {/* info news */}
                <div style={{margin: "1% auto 2% auto", width:"30%", display:"flex"}}>
                    <h4>Thông tin nhà trọ</h4>
                    {/* lấy cái id news trên link chèn dô nhe bé iu <3 */}
                    <h4>(</h4> <a href="http://localhost:3000/viewroom?id=NEWS96177E23-E7ED-49B4" style={{fontSize:"120%"}}>Xem thêm</a> <h4>)</h4>
                </div>
                <div className="infonews">
                    <Image src={`https://drive.google.com/uc?id=12cc3rjKAo9H_WGbCsMn9zrANRdr5xhAT`} className='avatar'/>
                        <div className="info">
                            <h4>Phòng trọ thoáng mát, cao cấp Tân Bình (Ưu đãi)</h4>
                            <h2 style={{color:"red"}}>3.000.000 VNĐ</h2>
                            <p> <HiLocationMarker size={25}/> 23A, đường Nguyễn Sĩ Sách, phường 15, quận Tân Bình, TP.HCM</p>                            
                        </div>
                    </div>
            </Info>
            <Schedule>
                <h4 style={{margin: "1% auto 2% auto", width:"30%"}}> Chọn ngày xem trọ</h4>
                <div>
                <Calendar startOfWeek={1} disablePast value={value} onChange={onChange}
                 isDisabled={isDisabled} isHighlight={isHighlight}
                 size={420} fontSize={18} 
                 />
                    <ListGroup>
                        <ListGroup.Item>No style</ListGroup.Item>
                        <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                        <ListGroup.Item action variant="secondary">
                            Secondary
                        </ListGroup.Item>
                        <ListGroup.Item action variant="success">
                            Success
                        </ListGroup.Item>
                        <ListGroup.Item action variant="danger">
                            Danger
                        </ListGroup.Item>
                        <ListGroup.Item action variant="warning">
                            Warning
                        </ListGroup.Item>
                        <ListGroup.Item action variant="info">
                            Info
                        </ListGroup.Item>
                        <ListGroup.Item action variant="light">
                            Light
                        </ListGroup.Item>
                        <ListGroup.Item action variant="dark">
                            Dark
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Schedule>
            <Footer/>
        </Wrapper>
    )

}