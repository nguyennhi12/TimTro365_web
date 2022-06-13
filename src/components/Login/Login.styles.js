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
  Form {
    display: block;
    margin: 1% auto 2% auto;
    width: 30%;
    padding: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
    
    h1 {
      color: #ffc938;
      size: 20;
    }

    Button {
      display: block;
      margin: 0% auto 0% auto;
      width: 80%;
      background: #ffc938;
      border: none;
    }
  }
`;
export const FB_GG = styled.div`
  display: row;
  margin-top: 6%;

  .Button-FB {
    display: block;
    margin: 5% auto 2% auto;
    background: #3c5899;
    width: 30%;
  }
  .Button-GG {
    display: block;
    margin: 5% auto 2% auto;
    background: #de4b39;
    border: none;
    width: 30%;
  }
`;
//box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);