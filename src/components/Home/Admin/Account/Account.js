import React, { useState } from "react";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { Tabs, Tab, Table, Button } from "react-bootstrap";
import { Wrapper } from "./Account.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillInfoCircle } from "react-icons/ai";

import { HookGetAdminAllInnkeeper } from "../../../../hook/AdminHook";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Account = (props) => {
  const { account, check } = HookGetAdminAllInnkeeper(props?.idtoken);
  const onClickViewInnkeeper = (item) => {
    props?.setPositionOption("news");
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
    <Wrapper style={{ width: "100%", marginTop: "10%" }}>
      <Table responsive="lg" style={{ width: "95%" }}>
        <thead>
          <tr>
            <th>Ảnh đại diện</th>
            <th>Tên tài khoản</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {account?.length && check
            ? account?.map((item, index) => (
                <tr>
                  <td>
                    <img
                      src={`${item?.image}`}
                      srcSet={`${item?.image}`}
                      alt={item?.displayname}
                      loading="lazy"
                      style={{ width: 100, height: 100, objectFit: "fill" }}
                    />
                  </td>
                  <td>
                    <h6 style={{ marginTop: "30%", fontSize: 18 }}>
                      {" "}
                      {item?.displayname}
                    </h6>
                  </td>
                  <td>
                    <div style={{ marginTop: "20%", fontSize: 18 }}>
                      {item?.phonenumber
                        ? `${item?.phonenumber}`
                        : "Chưa có thông tin"}
                    </div>
                  </td>
                  <td>
                    <div style={{ marginTop: "9%", fontSize: 18 }}>
                      {item?.email ? `${item?.email}` : "Chưa có thông tin"}
                    </div>
                  </td>
                  <td>
                    <div style={{ marginTop: "9%", fontSize: 18 }}>
                      {item?.address ? `${item?.address}` : "Chưa có thông tin"}
                    </div>
                  </td>
                  <td>
                    <Button
                      variant="warning"
                      style={{ marginTop: "30%" }}
                      onClick={() => onClickViewInnkeeper(item)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </Wrapper>
  );
};
export default React.memo(Account);
