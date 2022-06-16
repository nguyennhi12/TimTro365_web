import styled from "styled-components";

export const Wrapper = styled.div`
  .breadcrum {
    display: block;
    margin: 1% auto 0% auto;
    width: 80%;
  }
  .breadcrum-item {
    text-decoration: none;
    border: none;
  }
  .ListGroup {
    overflow-x: auto;
    white-space: nowrap;
  }
  .Image {
    display: block;
    margin: 0% auto 0% auto;
    width: 100%;
    height: 100%;
  }
  .ListItem {
    width: 10%;
    border: none;
  }
`;
export const ListImageRoom = styled.div`
  display: block;
  margin: 1% auto 1% auto;
  width: 80%;
  padding-bottom: 1%;
  border-bottom: 1px solid #8e8f94;
`;
export const ImageRoom_Cost = styled.div`
  display: flex;
  margin: 1% auto 1% auto;
  width: 80%;
  .ImageRoom {
    width: 55%;
  }
`;
export const Info = styled.div`
  margin-left: 2%;
  .header {
    border-bottom: 2px solid black;
  }
  .cost {
    display: block;
    margin: 1% auto 1% auto;
    color: red;
    width: 60%;
  }
`;
export const InfoInn = styled.div`
  display: flex;
  margin: 1% auto 1% auto;
  width: 80%;
  padding-bottom: 1%;
  border-bottom: 1px solid #8e8f94;
  .avatar {
    border: 1px #d4d4d4 solid;
    padding: 7px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 10%;
  }
  .info {
    margin: auto 1% auto 2%;
  }
`;
export const InfoRating = styled.div`
  display: flex;
  margin: 2% auto 2% auto;
  width: 80%;
  padding-bottom: 1%;
  /* border-bottom: 1px solid #8e8f94; */
  .avatar {
    border: 1px #d4d4d4 solid;
    padding: 7px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 10%;
  }
  .info {
    margin: auto 1% auto 2%;
  }
`;
export const InfoNews = styled.div`
  display: flex;
  margin: 1% auto 1% auto;
  width: 80%;
  .info {
    width: 180%;
    padding: 0.5%;
    padding-right: 1.5%;
    border-radius: 5px;
    border: 1px solid #8e8f94;
  }
`;
export const News_GoiY = styled.div`
  margin: 1% auto 1% auto;
  width: 80%;
  .Image {
    margin: 0% auto 0% auto;
    width: 100%;
    height: 100%;
  }
`;
