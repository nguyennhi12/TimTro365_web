import React, { useEffect, useState } from "react";
import { Wrapper } from "./DanhMucNew.style";
import Header from '../Header/Header'
import Footer  from "../Footer/Footer";
import Toolbar from "../Home/Toolbar/Toolbar";
import { Breadcrumb } from "react-bootstrap";
import { Grid, ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import {AiFillInfoCircle} from "react-icons/ai";
import { HookGetNewsOfType } from '../../hook/NewsHook';
import { getQueryVariable } from "../../helper";
const DanhMucNew = ()=> {
    let danhmuc_id= getQueryVariable("danhmuc");
    const { news } = HookGetNewsOfType(danhmuc_id);
    console.log(news)
    const [danhmuc, setdanhmuc]=useState("")
    useEffect(()=>{
        danhmuc_id==1?setdanhmuc("Nhà trọ")
                        :danhmuc_id==2?setdanhmuc("Kí túc xá")
                        :danhmuc_id==3?setdanhmuc("Chung cư")
                        :danhmuc_id==4?setdanhmuc("Ở ghép"):setdanhmuc("Căn hộ")
    },[danhmuc_id])
   
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
          author: '@bkristastucchio',
          rows: 2,
          cols: 2,
          featured: true,
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          author: '@helloimnik',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          author: '@nolanissac',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          author: '@hjrc33',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          author: '@arwinneil',
          rows: 2,
          cols: 2,
          featured: true,
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
          author: '@tjdragotta',
        },
    ];
    return(
        <Wrapper>
            <Header/>
            <Toolbar/>            
            <Breadcrumb className="breadcrum">
                <Breadcrumb.Item href="http://localhost:3000/" className="breadcrum-item">Trang chủ</Breadcrumb.Item>                
                <Breadcrumb.Item active>{danhmuc}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="grid">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 9, md: 20 }} >
                {news.map((item) => (
                // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
                // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
                    <Grid item xs={2} sm={4} md={5} key={item.img} className="grid-in">
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item?.image}`}
                                srcSet={`${item.image}`}
                               
                                loading="lazy"
                            />
                        <ImageListItemBar
                            title={`${item.cost} triệu`}
                            subtitle={`${item?.header}`}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    href={`http://localhost:3000/viewroom?id=${item.id_news}`}
                                    target={'_blank'}>                                             
                                    <AiFillInfoCircle/>
                                </IconButton>
                            }
                        />
                        </ImageListItem>
                    </Grid>
                ))}
            </Grid>
            </div>
            <Footer/>
        </Wrapper>
    )
}

export default DanhMucNew;