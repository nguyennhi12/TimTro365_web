import React, { useState } from "react";
import { Wrapper, Links, Content } from "./HeaderAdmin.styles";
import logo from "../../image/logo365.PNG";
import smile from "../../image/simle.png";
import { Label } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";
import { getQueryVariable } from "../../helper";
import { HookGetAdminAllInnkeeper } from "../../hook/AdminHook";
import { FormControl, InputGroup } from "react-bootstrap";
import { SearchAll } from "../../hook/NewsHook";
import NewsAPISetting from "../../config/NewsConfig";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const HeaderAdmin = () => {
  const [key, setkey] = useState("");
  const idtoken = getQueryVariable("token");
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  function handleInputChange(e) {
    setkey(e.target.value);
  }
  const onSearch = async () => {
    const detail = await NewsAPISetting.getSearch(key);
    if (detail.statusCode == 200) {
      setNews(detail.data);
      navigate(`/searchall?key=${key}`);
    } else {
      alert("không có bản tin phù hợp");
    }
  };
  const account = JSON.parse(localStorage.getItem("account"));
  console.log(account);
  return (
    <Wrapper>
      <Links>
        <a className="a-img">
          <img src={logo} alt="Cinque Terre" className="img-logo" />
        </a>

        <Content>
          {/* <InputGroup
            className="mb-3 search"
            style={{ marginRight: "20%", width: "200%", height: "50%" }}
          >
            <FormControl
              placeholder="Tìm kiếm bản tin ...."
              aria-describedby="basic-addon2"
              className="input"
              onChange={handleInputChange}
            />
            <Button
              onClick={onSearch}
              variant="outline-warning"
              className="button-search"
            >
              <FaSistrix icon="FaSistrix" size={30} color="white" />
            </Button>
          </InputGroup> */}
          <label className="label-user">{account?.name_admin}</label>
          <img src={account?.image_admin} className="img-user" />
        </Content>
      </Links>
    </Wrapper>
  );
};

export default HeaderAdmin;
