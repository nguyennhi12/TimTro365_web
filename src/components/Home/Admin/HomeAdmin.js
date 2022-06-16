import React, { useState } from "react";
import { Wrapper, Content, Headertool } from "./HomeAdmin.styles";
import HeaderAdmin from "../../HeaderAdmin/HeaderAdmin";
import OffCanvas from "../../OffCanvas/OffCanvas";
import { Form, Table, Tabs, Tab } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import {
  HookGetAdminAllInnkeeper,
  HookAdminNewsByInnkeeper,
  HookGetAdminRattingNews,
} from "../../../hook/AdminHook";
import { getQueryVariable } from "../../../helper";
import Account from "./Account/Account";
import NewsInnKeeper from "./NewsInnKeeper/NewsInnKeeper";
const HomeAdmin = () => {
  const idtoken = getQueryVariable("token");
  const [check, setcheck] = useState(1);
  const [idUser, setIdUser] = useState();
  const [account, setAccount] = useState();
  // const [key, setKey] = useState("new");
  // const { account } = HookGetAdminAllInnkeeper(idtoken);
  // // const { news: newsby } = HookAdminNewsByInnkeeper(idtoken);
  const { news: newsrating } = HookGetAdminRattingNews(idtoken);
  // const navigate = useNavigate();
  // console.log(newsrating);
  // const newbyinnkeeper = (item) => {
  //   console.log(item?.id_user);
  //   window.open(`/newiduser?iduser=${item?.id_user}`);
  // };

  return (
    <Wrapper>
      <HeaderAdmin />
      <Headertool>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          className="button"
          onClick={() => setcheck(1)}
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
      </Headertool>

      {check == 1 ? (
        <Content>
          <Account
            idtoken={idtoken}
            check={check}
            setCheck={setcheck}
            setIdUser={setIdUser}
            setAccount={setAccount}
          />
        </Content>
      ) : (
        <Content>
          <NewsInnKeeper id_user={idUser} account={account} />
        </Content>
      )}

      {/* <Footer /> */}
    </Wrapper>
  );
};
export default HomeAdmin;
