import React from "react";
import {Wrapper} from './Swipper.styles'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination,Navigation,Autoplay } from "swiper";
import thanhthoitimtro from '../../../image/thanhthoitimtro.png'
import phogtrosinhvien from '../../../image/phongtrosinhvien.png'
import dichvuthuenhanhanh from '../../../image/dichvuthuenhanhanh.png'
import kinhnghiemquanlynhatro from '../../../image/kinh-nghiem-quan-ly-nha-tro.png'
const Swipper =()=>{
    
    return(     
        <Wrapper>
            <Swiper pagination={{clickable: true,}} navigation={true} 
            autoplay={{delay: 2500,disableOnInteraction: false,}} centeredSlides={true} spaceBetween={30}
            modules={[Pagination,Navigation, Autoplay]} className="mySwiper">               
                <SwiperSlide><img src={thanhthoitimtro} alt="Thảnh thơi tìm trọ" className="img"/></SwiperSlide>
                <SwiperSlide><img src={phogtrosinhvien} alt="Phòng trọ sinh viên" className="img"/></SwiperSlide>                
                <SwiperSlide><img src={kinhnghiemquanlynhatro} alt="Kinh nghiệm quản lý nhà trọ" className="img"/></SwiperSlide>
                <SwiperSlide><img src={dichvuthuenhanhanh} alt="Dịch vụ cho thuê nhà nhanh" className="img"/></SwiperSlide>                
            </Swiper>
        </Wrapper>
    )
}
export default Swipper