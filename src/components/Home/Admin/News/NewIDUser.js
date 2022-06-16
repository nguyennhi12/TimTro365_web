import React, { useState } from "react";
import { Wrapper, Content, Headertool } from "./NewIDUser.styles";
import HeaderAdmin from "../../../HeaderAdmin/HeaderAdmin";

import { Form, Table, Tabs, Tab } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Footer from "../../../Footer/Footer";
import {
  HookGetAdminAllInnkeeper,
  HookAdminNewsByInnkeeper,
} from "../../../../hook/AdminHook";
import { HookHideNew } from "../../../../hook/NewsHook";
import { getQueryVariable } from "../../../../helper";

const NewIDUser = () => {
  const idtoken = getQueryVariable("token");
  const iduser = getQueryVariable("iduser");
  const [isDisabled, setDisabled] = useState();
  const [key, setKey] = useState("new");
  const { news } = HookGetAdminAllInnkeeper(idtoken);
  const { news: newsby } = HookAdminNewsByInnkeeper(iduser);
  const { news: newshide } = HookHideNew(iduser);
  console.log(newsby);
  console.log(newshide);
  const data = [
    {
      id: 1,
      title: "Nhà trọ",
    },
    {
      id: 2,
      title: "Kí túc xá",
    },
    {
      id: 3,
      title: "Chung cư",
    },
    {
      id: 4,
      title: "Ở ghép",
    },
    {
      id: 5,
      title: "Căn hộ",
    },
  ];
  const newbyinnkeeper = (item) => {
    console.log(item?.id_user);
  };
  return (
    <Wrapper>
      <HeaderAdmin />
      <Headertool>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          className="button"
          disabled
        >
          Account
        </Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          // href="http://localhost:3000/category?danhmuc=2"
          className="button"
        >
          News
        </Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          disabled
          className="button"
        >
          Ratting
        </Button>
      </Headertool>
      <Content>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Ngày đăng</th>
              <th>Địa chỉ</th>
              <th>Danh mục</th>
              <th>Hình ảnh</th>
            </tr>
          </thead>
          <tbody>
            {newsby.map((item, index) => (
              <tr onClick={() => newbyinnkeeper(item)}>
                <td>{index + 1}</td>

                <td>{item?.header}</td>
                <td>{item?.time_create}</td>
                <td>{item?.address}</td>
                <td>{data[item?.type - 1]?.title}</td>
                <td>
                  <img
                    style={{ height: 80, width: 80 }}
                    src={item?.image}
                  ></img>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      <Footer />
    </Wrapper>
  );
};
export default NewIDUser;
