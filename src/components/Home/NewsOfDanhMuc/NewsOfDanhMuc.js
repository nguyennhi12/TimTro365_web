import React from "react";
import { Wrapper } from "./NewsOfDanhMuc.styles";
import { Accordion } from "react-bootstrap";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { AiFillInfoCircle } from "react-icons/ai";
import { HookGetNewsOfType } from "../../../hook/NewsHook";
const NewsOfDanhMuc = () => {
  const { news: nhatro, check } = HookGetNewsOfType(1);
  const { news: ktx, checktx } = HookGetNewsOfType(2);
  const { news: chungcu, checkchungcu } = HookGetNewsOfType(3);
  const { news: oghep, checkoghep } = HookGetNewsOfType(4);
  const { news: canho, checkcanho } = HookGetNewsOfType(5);
  console.log(nhatro);
  return (
    <Wrapper>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className="accordion-body">
          <Accordion.Header>Nhà Trọ</Accordion.Header>
          <Accordion.Body className="accordion-body">
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 9, md: 20 }}
              className="grid"
            >
              {nhatro.map((item) => (
                // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
                // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  key={item.img}
                  className="grid-in"
                >
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.image}`}
                      alt={`${item.cost} triệu`}
                      //loading="lazy"
                    />
                    <ImageListItemBar
                      title={`${item.cost} triệu`}
                      subtitle={`${item?.header}`}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.title}`}
                          href={`http://localhost:3000/viewroom?id=${item.id_news}`}
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="accordion-body">
          <Accordion.Header>Kí túc xá</Accordion.Header>
          <Accordion.Body className="accordion-body">
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 9, md: 20 }}
              className="grid"
            >
              {ktx.map((item) => (
                // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
                // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  key={item.img}
                  className="grid-in"
                >
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.image}`}
                      alt={`${item.cost} triệu`}
                      //loading="lazy"
                    />
                    <ImageListItemBar
                      title={`${item.cost} triệu`}
                      subtitle={`${item?.header}`}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.title}`}
                          href={`http://localhost:3000/viewroom?id=${item.id_news}`}
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="accordion-body">
          <Accordion.Header>Chung Cư</Accordion.Header>
          <Accordion.Body className="accordion-body">
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 9, md: 20 }}
              className="grid"
            >
              {chungcu.map((item) => (
                // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
                // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  key={item.img}
                  className="grid-in"
                >
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.image}`}
                      alt={`${item.cost} triệu`}
                      //loading="lazy"
                    />
                    <ImageListItemBar
                      title={`${item.cost} triệu`}
                      subtitle={`${item?.header}`}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.title}`}
                          href={`http://localhost:3000/viewroom?id=${item.id_news}`}
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="accordion-body">
          <Accordion.Header>Ở ghép</Accordion.Header>
          <Accordion.Body className="accordion-body">
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 9, md: 20 }}
              className="grid"
            >
              {oghep.map((item) => (
                // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
                // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  key={item.img}
                  className="grid-in"
                >
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.image}`}
                      alt={`${item.cost} triệu`}
                      //loading="lazy"
                    />
                    <ImageListItemBar
                      title={`${item.cost} triệu`}
                      subtitle={`${item?.header}`}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.title}`}
                          href={`http://localhost:3000/viewroom?id=${item.id_news}`}
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" className="accordion-body">
          <Accordion.Header>Căn hộ</Accordion.Header>
          <Accordion.Body className="accordion-body">
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 9, md: 20 }}
              className="grid"
            >
              {canho.map((item) => (
                // xs: cực nhỏ <576px, sm: nhỏ ≥576px, md: trung bình ≥768px
                // md thì có 16 col, mà ở grid dưới md chiếm 4 col => có 16/4 = 4 hình
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  key={item.img}
                  className="grid-in"
                >
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.image}`}
                      alt={`${item.cost} triệu`}
                      //loading="lazy"
                    />
                    <ImageListItemBar
                      title={`${item.cost} triệu`}
                      subtitle={`${item?.header}`}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.title}`}
                          href={`http://localhost:3000/viewroom?id=${item.id_news}`}
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Wrapper>
  );
};
export default NewsOfDanhMuc;
