import styled from "styled-components";
export const Wrapper = styled.div``;
export const Links = styled.div`
  display: flex;
  background: #ffc938;
  .a {
    display: block;
    margin: 0.5% 4% 0.5% 0%;
    text-decoration: none;
    color: black;
    font-family: Verdana, Arial, sans-serif;
  }
  .a-img {
    display: block;
    width: 15%;
    height: 15%;
    margin-left: 10%;
    margin-right: auto;
    margin-top: 2%;
    margin-bottom: 1%;
  }
  .img-logo {
    width: 60%;
    height: 50%;
  }
`;
export const Content = styled.div`
  display: flex;
  margin-top: 2%;
  margin-right: 10%;
  .img-user {
    width: 10%;
    height: 55%;
    margin-right: 2%;
    border-radius: 50%;
  }
  .label-user {
    font-family: Verdana, Arial, sans-serif;
    font-size: 25px;
    margin-right: 2%;
  }
`;
