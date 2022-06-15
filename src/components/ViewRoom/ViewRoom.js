import React, { useEffect, useState } from "react";

import {
  Wrapper,
  ListImageRoom,
  ImageRoom_Cost,
  Info,
  InfoInn,
  InfoNews,
  News_GoiY,
} from "./ViewRoom.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  Breadcrumb,
  ListGroup,
  Image,
  Button,
  Col,
  Nav,
  Row,
  Tab,
  Card,
} from "react-bootstrap";
import { HiLocationMarker } from "react-icons/hi";
import { GrSchedule } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import Logo from "../../image/logo365.PNG";
import { MdOutlineHighQuality } from "react-icons/md";
import { AiFillCarryOut, AiOutlineTeam } from "react-icons/ai";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { AiFillInfoCircle } from "react-icons/ai";
import Toolbar from "../Home/Toolbar/Toolbar";
import {
  useGetDetailNews,
  useGetDetailNewsImage,
  HookGetInformationById,
  HookRatingNewByIdNew,
  useHookGetGoiYNews,
} from "../../hook/NewsHook";
import { getQueryVariable } from "../../helper";
import Rating from "@mui/material/Rating";
const ViewRoom = () => {
  const [infonews, setinfonews] = useState(true);
  const idNews = getQueryVariable("id");
  console.log(idNews);
  const { news } = useGetDetailNews(idNews);
  const { news: newsimage } = useGetDetailNewsImage(idNews);
  
  const { news: newsrating } = HookRatingNewByIdNew(idNews);
  console.log(news);
  console.log(!!newsrating?.length);
  const iduser = JSON.parse(localStorage.getItem("iduser"));
  console.log(iduser);
  const { news: newsinformation } = HookGetInformationById(iduser);
  console.log(newsinformation);
  const { news: newsgoiy } = useHookGetGoiYNews(iduser,idNews);
  console.log(newsgoiy)

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      author: "@hjrc33",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
      featured: true,
    },
  ];
  const onClickShareFB = () => {
    return console.log();
  };
  const mapclick = () => {};
  useEffect(() => {
    try {
      if (infonews === true) {
        document.getElementById("info-new").style.background = " #FFC938";
        document.getElementById("info-review").style.background = "white";
        document.getElementById("info-new").style.borderRadius = "5px";
      } else {
        document.getElementById("info-new").style.background = "white";
        document.getElementById("info-review").style.background = " #FFC938";
        document.getElementById("info-review").style.borderRadius = "5px";
      }
    } catch (error) {
      console.warn(error);
    }
  }, [infonews]);
  const [ImageRoom, setImageRoom] = useState();
  useEffect(() => {
    if (!ImageRoom) {
      setImageRoom(newsimage[0]?.image);
    }
  }, [newsimage]);
  return (
    <Wrapper>
      <Header />
      <Toolbar />
      <Breadcrumb className="breadcrum">
        <Breadcrumb.Item
          href="http://localhost:3000/"
          className="breadcrum-item"
        >
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{news[0]?.header}</Breadcrumb.Item>
      </Breadcrumb>
      <ImageRoom_Cost>
        <Image
          src={`${ImageRoom}`}
          srcSet={`${ImageRoom}`}
          alt="Image room"
          className="ImageRoom"
          width="100px"
          height="350px"
        />
        <Info>
          <div className="header">
            <h4>{news[0]?.header}</h4>
            <p>
              {" "}
              <Button
                href={`http://localhost:3000/mapbox?id=${news[0]?.id_news}`}
                target="_blank"
                style={{ backgroundColor: "white", borderColor: "white" }}
              >
                <HiLocationMarker size={25} color="red" />
              </Button>
              {news[0]?.address}.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              paddingBottom: "2%",
              paddingTop: "1%",
              borderBottom: "1px solid #8E8F94",
            }}
          >
            <p style={{ marginTop: "4%", fontSize: 20 }}>Giá:</p>{" "}
            <h1 className="cost">{news[0]?.cost} triệu VNĐ</h1>
          </div>
          {/* <div className="d-grid gap-2">
                        <Button variant="warning" size="lg" style={{marginTop:"2%"}}
                         href="http://localhost:3000/setschedule?idnews=NEWS96177E23-E7ED-49B4" target="_blank">
                            <GrSchedule size={20} style={{margin:"0% 1% 1% 0%"}}/> Đặt lịch hẹn
                        </Button>
                    </div> */}
          {/* <div style={{ display: "flex", marginTop: "2%" }}>
            <p style={{ marginTop: "5%" }}>Chia sẻ với:</p>
            <div>
              <ListGroup horizontal={true} style={{ width: "180%" }}>
                <ListGroup.Item
                  action
                  onClick={() => onClickShareFB()}
                  className="ListItem"
                  key="fb"
                >
                  <GrFacebook size={40} />
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div> */}
        </Info>
      </ImageRoom_Cost>
      <ListImageRoom>
        <ListGroup horizontal={true} className="ListGroup">
          {newsimage.map((item, index) => (
            <ListGroup.Item
              action
              onClick={() => setImageRoom(item?.image)}
              className="ListItem"
            >
              <Image
                src={`${item?.image}`}
                srcSet={`${item?.image}`}
                alt={item.title}
                key={index}
                className="Image"
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </ListImageRoom>
      <InfoInn>
        <Image src={newsinformation[0]?.image} className="avatar" />
        <div className="info">
          <h6>{newsinformation[0]?.displayname}</h6>
          <p>{newsinformation[0]?.address}</p>
          <p>{newsinformation[0]?.phonenumber}</p>
        </div>
      </InfoInn>
      <InfoNews>
        {/* info news */}
        <div className="info">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav className="flex-column">
                  <Nav.Item>
                    <div id="info-new">
                      <Nav.Link
                        eventKey="first"
                        className="Nav"
                        onClick={() => setinfonews(true)}
                      >
                        Thông tin chi tiết:
                      </Nav.Link>
                    </div>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <div id="info-review">
                      <Nav.Link
                        eventKey="second"
                        className="Nav"
                        id="info-review"
                        onClick={() => setinfonews(false)}
                      >
                        Đánh giá và nhận xét
                      </Nav.Link>
                    </div>
                  </Nav.Item> */}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <pre>{news[0]?.description}</pre>
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="second">
                    {!!newsrating?.length ? (
                      <InfoInn>
                        <Image
                          src={newsinformation[0]?.image}
                          className="avatar"
                        />
                        <div className="info">
                          <Rating name="read-only" value={2} readOnly />
                          <h6>{newsinformation[0]?.displayname}</h6>
                          <p>{newsinformation[0]?.address}</p>
                          <p>{newsinformation[0]?.phonenumber}</p>
                        </div>
                      </InfoInn>
                    ) : (
                      <div>Chưa có đánh giá</div>
                    )}
                  </Tab.Pane> */}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div>
          <Card style={{ width: "90%", marginLeft: "9%" }}>
            <Card.Header style={{ background: "#FFC938" }}>
              Lý do bạn nên chọn
            </Card.Header>
            <Card.Body>
              <Card.Img src={Logo} />
              <div style={{ display: "flex" }}>
                <MdOutlineHighQuality size={40} />{" "}
                <p style={{ width: "120%", marginLeft: "2%" }}>
                  Nhà trọ 365 đảm bảo mang đến cho bạn những bài đăng uy tín
                  nhất.
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <AiFillCarryOut size={40} />
                <p style={{ width: "120%", marginLeft: "2%" }}>
                  Luôn tạo mọi điều kiện thuận lợi nhất cho người dùng.
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <AiOutlineTeam size={40} />
                <p style={{ width: "120%", marginLeft: "2%" }}>
                  Đa dạng người dùng cũng như mang lại nhiều sự lựa chọn hơn.
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </InfoNews>
      <News_GoiY>
        <div style={{ background: "#FFC938" }}>
          <h3 style={{ margin: "0 auto 2% auto", width: "30%" }}>
            SẢN PHẨM LIÊN QUAN
          </h3>
        </div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 9, md: 20 }}
          
        >
          {newsgoiy.map((item) => (
            // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
            // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
            <Grid item xs={2} sm={4} md={4} key={item.img} >
              <ImageListItem key={item?.image} style= {{height: "200px", width: "100%"}}>
                <img
                  src={`${item?.image}`}
                  srcSet={`${item?.image}`}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={`${item?.cost} triệu`}
                  subtitle={`${item?.header}`}
                  
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item?.cost}`}
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
      </News_GoiY>
      <Footer />
    </Wrapper>
  );
};
export default ViewRoom;
