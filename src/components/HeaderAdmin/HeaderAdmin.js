import React, { useState } from "react";
import { Wrapper, Links, Content } from "./HeaderAdmin.styles";
import logo from "../../image/logo365.PNG";
import smile from "../../image/simle.png";
import { Label } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";
import { getQueryVariable } from "../../helper";
import { HookGetAdminAllInnkeeper } from "../../hook/AdminHook";
const HeaderAdmin = () => {
  const [key, setkey] = useState("");
  const idtoken = getQueryVariable("token");
  const token = localStorage.getItem("accessToken");
  const { news } = HookGetAdminAllInnkeeper(idtoken);
  console.log(news);
  const account = JSON.parse(localStorage.getItem("account"));
  console.log(account);
  return (
    <Wrapper>
      <Links>
        <a className="a-img">
          <img src={logo} alt="Cinque Terre" className="img-logo" />
        </a>
        <Content>
          <label className="label-user">{account?.name_admin}</label>
          <img src={account?.image_admin} className="img-user" />
        </Content>
      </Links>
    </Wrapper>
  );
};

export default HeaderAdmin;
