import React, { useState } from "react";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { Tabs, Tab, Image, Button, Table } from "react-bootstrap";
import { InfoInn, Wrapper } from "./NewsInnKeeper.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillInfoCircle } from "react-icons/ai";
import {
  HookAdminNewsByInnkeeper,
  HookGetNewsHideByAdmin,
  HookGetNewsHideByUser,
} from "../../../../hook/AdminHook";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const NewsInnKeeper = (props) => {
  const { news, check } = HookAdminNewsByInnkeeper(props?.id_user);
  const { news: newsHideByAdmin, check: checkHideByAdmin } =
    HookGetNewsHideByAdmin(props?.id_user);
  const { news: newsHideByUser, check: checkHideByUser } =
    HookGetNewsHideByUser(props?.id_user);
  console.log(newsHideByAdmin, newsHideByUser);
  const onClickViewInnkeeper = (item) => {
    props?.setIdUser(item?.id_user);
  };
  return (
    <Wrapper style={{ width: "80%" }}>
      <InfoInn>
        <div className="info">
          <Image
            src={props?.account?.image}
            className="avatar"
            style={{ width: "80%" }}
          />
        </div>
      </InfoInn>
      <h4
        style={{
          marginLeft: "10%",
          marginTop: 30,
        }}
      >
        Danh sách bản tin đã đăng:
      </h4>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 20 }}
        className="grid"
        style={{
          marginLeft: "20%",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        {news?.length && check ? (
          news.map((item) => (
            // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
            // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
            <Grid
              item
              xs={2}
              sm={5}
              md={4}
              key={item?.image}
              className="grid-in"
            >
              <ImageListItem key={item?.image} style={{ width: 150 }}>
                <img
                  src={`${item?.image}`}
                  srcSet={`${item?.image}`}
                  alt={item?.header}
                  loading="lazy"
                  style={{ width: 150, height: 150, objectFit: "fill" }}
                />
                <ImageListItemBar
                  title={item?.header ? `${item?.header}` : "Chưa có thông tin"}
                  subtitle={`${item?.cost} triệu`}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item?.cost}`}
                      href={`https://tim-tro365-cxnl5dyq6-nguyennhi12.vercel.app/viewroom?id=${item.id_news}`}
                      target={"_blank"}
                    >
                      <AiFillInfoCircle />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Grid>
          ))
        ) : check ? (
          <h6>Không có bản tin nào được đăng</h6>
        ) : (
          <SkeletonTheme color="#202020" highlightColor="#444">
            {[0, 1, 2, 3].map((item) => (
              <Grid item xs={2} sm={5} md={4} className="grid-in">
                <Skeleton height={150} width={150} />
              </Grid>
            ))}
          </SkeletonTheme>
        )}
      </Grid>
      <h4
        style={{
          marginLeft: "10%",
          marginTop: 30,
        }}
      >
        Danh sách bản tin đã bị khóa bởi người dùng:
      </h4>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 20 }}
        className="grid"
        style={{
          marginLeft: "20%",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        {newsHideByUser?.length && checkHideByUser ? (
          newsHideByUser.map((item) => (
            // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
            // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
            <Grid
              item
              xs={2}
              sm={5}
              md={4}
              key={item?.image}
              className="grid-in"
            >
              <ImageListItem key={item?.image} style={{ width: 150 }}>
                <img
                  src={`${item?.image}`}
                  srcSet={`${item?.image}`}
                  alt={item?.header}
                  loading="lazy"
                  style={{ width: 150, height: 150, objectFit: "fill" }}
                />
                <ImageListItemBar
                  title={item?.header ? `${item?.header}` : "Chưa có thông tin"}
                  subtitle={`${item?.cost} triệu`}
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
          ))
        ) : checkHideByUser ? (
          <h6>Không có bản tin nào được đăng</h6>
        ) : (
          <SkeletonTheme color="#202020" highlightColor="#444">
            {[0, 1, 2].map((item) => (
              <Grid item xs={2} sm={5} md={4} className="grid-in">
                <Skeleton height={150} width={150} />
              </Grid>
            ))}
          </SkeletonTheme>
        )}
      </Grid>
      <h4
        style={{
          marginLeft: "10%",
          marginTop: 30,
        }}
      >
        Danh sách bản tin đã bị khóa bởi admin:
      </h4>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 20 }}
        className="grid"
        style={{
          marginLeft: "20%",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        {newsHideByAdmin?.length && checkHideByAdmin ? (
          newsHideByAdmin.map((item) => (
            // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
            // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
            <Grid
              item
              xs={2}
              sm={5}
              md={4}
              key={item?.image}
              className="grid-in"
            >
              <ImageListItem key={item?.image} style={{ width: 150 }}>
                <img
                  src={`${item?.image}`}
                  srcSet={`${item?.image}`}
                  alt={item?.header}
                  loading="lazy"
                  style={{ width: 150, height: 150, objectFit: "fill" }}
                />
                <ImageListItemBar
                  title={item?.header ? `${item?.header}` : "Chưa có thông tin"}
                  subtitle={`${item?.cost} triệu`}
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
          ))
        ) : checkHideByAdmin ? (
          <h6>Không có bản tin nào được đăng</h6>
        ) : (
          <SkeletonTheme color="#202020" highlightColor="#444">
            {[0, 1, 2].map((item) => (
              <Grid item xs={2} sm={5} md={4} className="grid-in">
                <Skeleton height={150} width={150} />
              </Grid>
            ))}
          </SkeletonTheme>
        )}
      </Grid>
    </Wrapper>
  );
};
export default NewsInnKeeper;
