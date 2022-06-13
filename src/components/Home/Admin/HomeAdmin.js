import React,{useState} from "react";
import { Wrapper, Content , Headertool} from "./HomeAdmin.styles";
import HeaderAdmin from "../../HeaderAdmin/HeaderAdmin";
import OffCanvas from "../../OffCanvas/OffCanvas";
import { Form, Table ,Tabs,Tab} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import {
  HookGetAdminAllInnkeeper,
  HookAdminNewsByInnkeeper,
  HookGetAdminRattingNews,
} from "../../../hook/AdminHook";
import { getQueryVariable } from "../../../helper";
const HomeAdmin = () => {
  const idtoken = getQueryVariable("token");
  const [check,setcheck] = useState([]);
  const [key, setKey] = useState("new");
  const { news } = HookGetAdminAllInnkeeper(idtoken);
  const { news: newsby } = HookAdminNewsByInnkeeper(idtoken);
  const { news: newsrating } = HookGetAdminRattingNews(idtoken);
  const navigate = useNavigate();
  console.log(newsrating);
  const newbyinnkeeper = (item) => {
    console.log(item?.id_user);
    window.open(`/newiduser?iduser=${item?.id_user}`)
  };
  
  return (
    <Wrapper>
      <HeaderAdmin />
      <Headertool >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        className="button"
        onClick={()=>setcheck(true)}
      >
        Account
      </Button>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        className="button"
        disabled
      >
        News
      </Button>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={()=>setcheck(false)}
        className="button"
      >
        Rating
      </Button>
      </Headertool>
      {check?(<Content>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item, index) => (
              <tr onClick={() => newbyinnkeeper(item)} >
                <td>{index + 1}</td>

                <td >
                  {item?.displayname}
                </td>
                <td>{item?.email}</td>
                <td>{item?.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>):(<Content>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ tên</th>
              <th>IDNew</th>
              <th>Tiêu đề</th>
              <th>Xếp hạng</th>
              <th>Bình luận</th>
            </tr>
          </thead>
          <tbody>
            {newsrating.map((item, index) => (
              <tr  >
                <td>{index + 1}</td>

                <td >
                  {item?.displayname}
                </td>
                <td>{item?.id_news}</td>
                <td>{item?.header}</td>
                <td>{item?.ratting}</td>
                <td>{item?.review}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>)}
      <Footer />
    </Wrapper>
  );
};
export default HomeAdmin;
