import React, { useState } from "react";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { Tabs, Tab, Table, Button } from "react-bootstrap";
import { Wrapper } from "./RattingNews.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillInfoCircle } from "react-icons/ai";

import {
  HookGetAdminAllInnkeeper,
  HookGetRating,
} from "../../../../hook/AdminHook";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AdminAPISetting from "../../../../config/AdminConfig";
const RattingNews = (props) => {
  const { rating, check } = HookGetRating();
  const onClickViewInnkeeper = (item) => {
    props?.setPositionOption("news");
    props?.setIdUser(item?.id_user);
    props?.setAccount(item);
  };
  const onHideNews = async () => {
    const result = await AdminAPISetting.hideAllNewsAdmin();
    alert(result?.message);
  };
  return (
    <Wrapper style={{ width: "100%" }}>
      <div style={{ width: "95%", marginLeft: "10%" }}>
        <Button variant="success">Xem biểu đồ</Button>{" "}
        <Button variant="warning" onClick={onHideNews}>
          Khóa bản tin
        </Button>{" "}
      </div>
      <Table responsive="lg" style={{ width: "95%" }}>
        <thead>
          <tr>
            <th>Hình ảnh bản tin</th>
            <th>ID bản tin</th>
            <th>Chủ đề</th>
            <th>Người đăng tin</th>
            <th>Đánh giá</th>
            <th>Số lượng đánh giá</th>
          </tr>
        </thead>
        <tbody>
          {rating?.length && check
            ? rating?.map((item, index) => {
                console.log(item);
                return (
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
                      <h6 style={{ marginTop: "13%", fontSize: 18 }}>
                        {" "}
                        {item?.id_news}
                      </h6>
                    </td>
                    <td>
                      <div style={{ marginTop: "13%", fontSize: 18 }}>
                        {item?.header ? `${item?.header}` : "Chưa có thông tin"}
                      </div>
                    </td>
                    <td>
                      <div style={{ marginTop: "20%", fontSize: 18 }}>
                        {item?.displayname
                          ? `${item?.displayname}`
                          : "Chưa có thông tin"}
                      </div>
                    </td>

                    <td>
                      <div style={{ marginTop: "34%", fontSize: 18 }}>
                        {item?.AvgRatting
                          ? `${item?.AvgRatting}`
                          : "Chưa có thông tin"}
                      </div>
                    </td>
                    <td>
                      <div style={{ marginTop: "17%", fontSize: 18 }}>
                        {item?.countRatting
                          ? `${item?.countRatting}`
                          : "Chưa có thông tin"}
                      </div>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </Wrapper>
  );
};
export default React.memo(RattingNews);
