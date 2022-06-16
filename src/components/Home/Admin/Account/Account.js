import React, { useState } from "react";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { Tabs, Tab } from "react-bootstrap";
import { Wrapper } from "./Account.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillInfoCircle } from "react-icons/ai";

import { HookGetAdminAllInnkeeper } from "../../../../hook/AdminHook";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Account = (props) => {
  const { account, check } = HookGetAdminAllInnkeeper(props?.idtoken);
  const onClickViewInnkeeper = (item) => {
    props?.setCheck(2);
    props?.setIdUser(item?.id_user);
    props?.setAccount(item);
  };
  const renderEmptyData = () => {
    return (
      <div>
        <Skeleton height={100} width={"100%"} />
      </div>
    );
  };
  return (
    <Wrapper style={{ width: "100%" }}>
      <h4 style={{ marginLeft: "10%", marginTop: "1%" }}>
        Danh sách tài khoản đã đăng kí:
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
        {account?.length && check ? (
          account.map((item) => (
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
                  alt={item?.displayname}
                  loading="lazy"
                  style={{ width: 150, height: 150, objectFit: "fill" }}
                />
                <ImageListItemBar
                  title={
                    item?.displayname
                      ? `${item?.displayname}`
                      : "Chưa có thông tin"
                  }
                  subtitle={
                    item?.phonenumber
                      ? `${item?.phonenumber}`
                      : "Chưa có thông tin"
                  }
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item?.cost}`}
                      onClick={() => onClickViewInnkeeper(item)}
                      target={"_blank"}
                    >
                      <AiFillInfoCircle />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Grid>
          ))
        ) : !check ? (
          <SkeletonTheme color="#202020" highlightColor="#444">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <Grid item xs={2} sm={5} md={4} className="grid-in">
                <Skeleton height={150} width={150} />
              </Grid>
            ))}
          </SkeletonTheme>
        ) : (
          <Skeleton height={100} width={"100%"} />
        )}
      </Grid>
      <h4 style={{ marginLeft: "10%", marginTop: "1%" }}>
        Danh sách tài khoản đã bị khóa:
      </h4>
    </Wrapper>
  );
};
export default React.memo(Account);
