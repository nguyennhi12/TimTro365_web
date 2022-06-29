import React, { useState } from "react";
import { Wrapper, Content } from "./HomeAdmin.styles";

import { Nav } from "react-bootstrap";

import { HookGetAdminRattingNews } from "../../../hook/AdminHook";
import { getQueryVariable } from "../../../helper";
import Account from "./Account/Account";
import NewsInnKeeper from "./NewsInnKeeper/NewsInnKeeper";
import RattingNews from "./RattingNews/RattingNews";
const HomeAdmin = () => {
  const idtoken = getQueryVariable("token");
  // const [check, setcheck] = useState(1);
  const [idUser, setIdUser] = useState();
  const [account, setAccount] = useState();
  const accountAdmin = JSON.parse(localStorage.getItem("account"));
  const { news: newsrating } = HookGetAdminRattingNews(idtoken);
  const [positionOption, setPositionOption] = useState("account");
  return (
    <Wrapper>
      <Nav
        defaultActiveKey={positionOption}
        className="flex-column"
        variant="pills"
        style={{
          width: "18%",
          height: "901px",
          paddingLeft: "2%",
          paddingRight: "2%",
          paddingTop: "1%",
          backgroundColor: "#FEF9E8",
        }}
      >
        <Nav.Item style={{ marginBottom: "30%" }}>
          <h3>Tìm trọ 365</h3>
        </Nav.Item>
        <Nav.Item>
          <div style={{ marginBottom: "30%" }}>
            <tr>
              <td>
                <img
                  src={accountAdmin?.image_admin}
                  style={{
                    width: "80%",
                    height: "85%",
                    marginRight: " 2%",
                    borderRadius: "50%",
                  }}
                  alt={accountAdmin?.name_admin}
                />
              </td>
              <td>
                <div style={{ fontWeight: "bold" }}>
                  {accountAdmin?.name_admin}
                </div>
                <text>{accountAdmin?.email_admin}</text>
              </td>
            </tr>
          </div>
        </Nav.Item>
        <Nav.Link
          eventKey="account"
          onClick={() => setPositionOption("account")}
        >
          Quản lý người dùng
        </Nav.Link>
        <Nav.Item>
          <Nav.Link eventKey="news" disabled>
            Quản lý bản tin
          </Nav.Link>
        </Nav.Item>
        <Nav.Link
          eventKey="ratting"
          onClick={() => setPositionOption("ratting")}
        >
          Quản lý đánh giá
        </Nav.Link>
      </Nav>
      <div
        style={{
          position: "absolute",
          top: "1%",
          left: "15%",
          width: "75%",
        }}
      >
        {positionOption == "account" ? (
          <Content>
            <Account
              idtoken={idtoken}
              setPositionOption={setPositionOption}
              position={positionOption}
              setIdUser={setIdUser}
              setAccount={setAccount}
            />
          </Content>
        ) : positionOption == "news" ? (
          <NewsInnKeeper id_user={idUser} account={account} />
        ) : (
          <Content>
            <RattingNews
              idtoken={idtoken}
              setPositionOption={setPositionOption}
              position={positionOption}
              setIdUser={setIdUser}
              setAccount={setAccount}
            />
          </Content>
        )}
      </div>
      {/* <Footer /> */}
    </Wrapper>
  );
};
export default HomeAdmin;
