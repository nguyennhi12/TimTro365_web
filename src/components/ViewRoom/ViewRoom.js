import React, { useEffect, useState } from "react";

import {
  Wrapper,
  ListImageRoom,
  ImageRoom_Cost,
  Info,
  InfoInn,
  InfoNews,
  News_GoiY,
  InfoRating,
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
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import AdminAPISetting from "../../config/AdminConfig";
import { config, realtimeDB } from "../../config/configFirebase";

const ViewRoom = () => {
  const [infonews, setinfonews] = useState(true);
  const idNews = getQueryVariable("id");
  const { news } = useGetDetailNews(idNews);
  const { news: newsimage } = useGetDetailNewsImage(idNews);
  const { news: newsrating, avgRating } = HookRatingNewByIdNew(idNews);
  console.log(news);
  const iduser = JSON.parse(localStorage.getItem("iduser"));
  console.log("news", news, newsrating, avgRating);
  const { news: newsinformation } = HookGetInformationById(iduser);
  const { news: newsgoiy } = useHookGetGoiYNews(iduser, idNews);
  const hideNewsAdmin = async () => {
    const result = await AdminAPISetting.hideNewsAdmin(idNews);
    // console.log(result);
    // notificationNewsHideByAdmin();
    alert(result?.message);
  };
  // const notificationNewsHideByAdmin = () => {
  //   realtimeDB
  //     .ref(
  //       "notificationNewsHideByAdmin/" +
  //         newsinformation[0]?.id_news +
  //         "_" +
  //         idNews
  //     )
  //     .set({
  //       message: `Xin thông báo, bản tin có chủ đề ${news[0]?.header}
  //               được đăng vào ngày ${news[0]?.time_create}
  //               đã bị khóa vì lý do: Có lượng đánh giá thấp nhiều hơn 10 lần
  //               Đánh giá hiện tại: ${avgRating}. Trân trọng`,
  //       position: "Admin",
  //     });
  // };
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
      <HeaderAdmin />
      <h4 style={{ marginLeft: "10%", marginTop: 20 }}>Chi tiết bản tin</h4>
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
          {(avgRating && (
            <div style={{ margin: 20 }}>
              <tr>
                <th style={{ width: 200 }}>
                  <h4 className="cost">Đánh giá:</h4>
                </th>
                <th>
                  <Rating name="read-only" value={avgRating} readOnly />
                </th>
              </tr>
            </div>
          )) || <h4 className="cost">Chưa có đánh giá</h4>}
          <div className="d-grid gap-2">
            <Button
              variant="warning"
              size="lg"
              style={{ marginTop: "2%" }}
              onClick={hideNewsAdmin}
            >
              Khóa bản tin
            </Button>
          </div>
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
        <Image
          src={newsinformation[0]?.image}
          className="avatar"
          style={{ width: 130 }}
        />
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
                  <Nav.Item>
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
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <pre>{news[0]?.description}</pre>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    {!!newsrating?.length ? (
                      newsrating?.map((item) => {
                        return (
                          <InfoRating>
                            <img
                              alt={item?.displayname}
                              src={item?.avatar}
                              style={{
                                height: 80,
                                width: 80,
                                borderRadius: 50,
                              }}
                            />
                            <div className="info">
                              <Rating
                                name="read-only"
                                value={item?.ratting}
                                readOnly
                              />
                              <h6>{item?.displayname}</h6>
                              <p>{item?.review}</p>
                              {item?.imageRatting?.map((item) => (
                                <img
                                  style={{
                                    width: 80,
                                    height: 80,
                                    marginRight: 10,
                                  }}
                                  alt={item?.id_user}
                                  src={item?.image}
                                />
                              ))}
                            </div>
                          </InfoRating>
                        );
                      })
                    ) : (
                      <div>Chưa có đánh giá</div>
                    )}
                  </Tab.Pane>
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
            SẢN PHẨM LIÊN QUAN:
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
            <Grid item xs={2} sm={4} md={4} key={item.img}>
              <ImageListItem
                key={item?.image}
                style={{ height: "200px", width: "100%" }}
              >
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
