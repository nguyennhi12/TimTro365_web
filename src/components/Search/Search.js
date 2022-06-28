import React, { useEffect, useState } from "react";
import { Wrapper, Links, Content } from "./Search.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Toolbar from "../Home/Toolbar/Toolbar";
import { Breadcrumb } from "react-bootstrap";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { AiFillInfoCircle } from "react-icons/ai";
import { HookGetNewsOfType } from "../../hook/NewsHook";
import { getQueryVariable } from "../../helper";
import NewsAPISetting from "../../config/NewsConfig";
import { FaSistrix } from "react-icons/fa";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import logo from "../../image/logo365.PNG";
import smile from "../../image/simle.png";

const SearchAll = () => {
  const keySearch = getQueryVariable("key");
  const [key, setkey] = useState(keySearch);
  const [news, setNews] = useState([]);

  useEffect(async () => {
    const detail = await NewsAPISetting.getSearch(key);
    if (detail.statusCode == 200) {
      setNews(detail.data);
      console.log(news);
    } else {
      alert("không có bản tin phù hợp");
    }
  }, []);
  function handleInputChange(e) {
    setkey(e.target.value);
  }

  const onSearch = async () => {
    const detail = await NewsAPISetting.getSearch(key);
    if (detail.statusCode == 200) {
      setNews(detail.data);
      console.log(news);
    } else {
      alert("không có bản tin phù hợp");
    }
  };

  return (
    <Wrapper>
      <Links>
        <h4>Tìm trọ nhanh chóng, an toàn tuyệt đối!!</h4>
        <a href="#">Tin tức</a>
        <a href="#">Liên hệ</a>
        <a href="http://localhost:3000/loginadmin">Đăng nhập</a>
      </Links>
      <Content>
        <a href="http://localhost:3000/" className="a-img">
          <img src={logo} alt="Cinque Terre" className="img-logo" />
        </a>
        <InputGroup className="mb-3 search">
          <FormControl
            placeholder="Tìm kiếm bản tin ...."
            aria-describedby="basic-addon2"
            className="input"
            onChange={handleInputChange}
            value={key}
          />
          <Button
            onClick={onSearch}
            variant="outline-warning"
            className="button-search"
          >
            <FaSistrix icon="FaSistrix" size={30} />
          </Button>
        </InputGroup>
        <img src={smile} alt="smile"></img>
      </Content>

      {/* <Toolbar/>            
            <Breadcrumb className="breadcrum">
                <Breadcrumb.Item href="http://localhost:3000/" className="breadcrum-item">Trang chủ</Breadcrumb.Item>                
                <Breadcrumb.Item active>{danhmuc}</Breadcrumb.Item>
            </Breadcrumb> */}
      <div className="grid" onChange={onSearch}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 9, md: 20 }}
        >
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
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                      href={`http://localhost:3000/viewroom?id=${item.id_news}`}
                      target={"_blank"}
                    >
                      <AiFillInfoCircle />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </div>
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default SearchAll;
