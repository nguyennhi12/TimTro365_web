import styled from "styled-components";
export const Wrapper = styled.div`
  .tabs {
    justify-content: "center";
    alignItems: "center";
    background: #FFFCCC;
    margin-right: auto;
    margin-left: auto;
  }
  .tab {
    border: none;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    
  }
`;

export const Content = styled.div`
  display: flex;
  Form {
    display: block;
    margin: 5% auto 10% 10%;
    width: 15%;
    padding: 2%;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    h1 {
      color: #ffc938;
      size: 20;
    }

    ${'' /* Button {
      display: block;
      margin: 10% auto 10% auto;
      width: 70%;
      background: blue;
      border: none;
    } */}
  }
  Table {
    width: 60%;
    margin: 5% auto 0% 10%;
    margin-bottom: 10%;
  }
`;
export const Headertool = styled.div`
   background: #FFFCCC;
   padding-left: 9.5%;
   .button{
        margin-right: 3%;
     
       
    }
    .button:hover{
        color:#FF6600;
        background:yellow
    }
`;
