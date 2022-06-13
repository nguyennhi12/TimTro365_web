import React, { useState } from "react";
import { Wrapper, Links, Content } from "./Header.styles";
import logo from "../../image/logo365.PNG";
import smile from "../../image/simle.png";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";
import { SearchAll } from "../../hook/NewsHook";
import NewsAPISetting from "../../config/NewsConfig";
import { Link,useNavigate } from "react-router-dom";
const Header = () => {
  const [key, setkey] = useState("");
  const [news, setNews] = useState([]);
  function handleInputChange(e) {
    setkey(e.target.value);
  }
  const navigate = useNavigate();
  const onSearch = async () => {
    const detail = await NewsAPISetting.getSearch(key);
    if (detail.statusCode == 200) {
      setNews(detail.data);
      navigate(`/searchall?key=${key}`);
     }
    else{
      alert("không có bản tin phù hợp")
    }
  };
  console.log(news);

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
    </Wrapper>
  );
};

export default Header;
