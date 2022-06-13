import React, { useState } from "react";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { Tabs, Tab } from "react-bootstrap";
import { Wrapper } from "./NewsHot.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { useGetHotNews } from "../../../hook/NewsHook";
const NewsHot = () => {
  const [key, setKey] = useState("new");
  const { news: hotnew } = useGetHotNews();
  console.log(hotnew);

  return (
    <Wrapper>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 tabs"
      >
        <Tab eventKey="new" title="Tin Mới" className="tab">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 9, md: 20 }}
            className="grid"
          >
            {hotnew.map((item) => (
              // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
              // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
              <Grid
                item
                xs={2}
                sm={5}
                md={4}
                key={item?.image}
                className="grid-in"
              >
                <ImageListItem key={item?.image}>
                  <img
                    src={`${item?.image}`}
                    srcSet={`${item?.image}`}
                    alt={item?.cost}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={`${item?.cost} triệu`}
                    subtitle={item?.header}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item?.cost}`}
                        href="http://localhost:3000/viewroom?id=NEWS96177E23-E7ED-49B4"
                      >
                        <AiFillInfoCircle />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              </Grid>
            ))}
          </Grid>
        </Tab>
        {/* <Tab eventKey="hot" title="Tin Hot" className="tab">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 9, md: 20 }}
            className="grid"
          >
            {hotnew.map((item) => (
              // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
              // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={item?.image}
                className="grid-in"
              >
                <ImageListItem key={item?.image}>
                  <img
                    src={`${item?.image}?w=248&fit=crop&auto=format`}
                    srcSet={`${item?.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                        href="http://localhost:3000/viewroom?id=NEWS96177E23-E7ED-49B4"
                        target={"_blank"}
                      >
                        <AiFillInfoCircle />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              </Grid>
            ))}
          </Grid>
        </Tab> */}
      </Tabs>
    </Wrapper>
  );
};
export default NewsHot;
