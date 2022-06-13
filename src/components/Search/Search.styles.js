import styled from "styled-components";
export const Wrapper = styled.div`
    .breadcrum{
        display: block ;
        margin: 1% auto 2% auto ;
        width: 80% ;
        
        
    }
    .breadcrum-item{
        text-decoration:none;
        border: none
    }
    .grid-in{
        display: flex;        
       
        margin-top: 1% ;
        padding-bottom:1%;
        
    }
    .grid{
        margin: 1% auto 0% auto ;
        width: 80% ;
    }
`
export const Links = styled.div `
    display: flex ;
    background: #FFC938;
    padding-left: 4%;
    h4{
        margin:0.5% auto  0.5% auto;
        display: block ;
        margin-left:4%;  
        font-family: Verdana,Arial, sans-serif;          
    }    
    a{     
        display: block ;  
        margin:0.5% 4% 0.5% 0%;
        text-decoration:none;
        color: black;   
        font-family: Verdana,Arial, sans-serif;  
    }
    
`;
export const Content = styled.div`
    display:flex ;
    padding:1.5% 0 1.5% 0 ;
    background: #FFC938;
    margin-top:0.1%;
    .a-img{
        width:9% ;        
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .img-logo{
        width:100% ;
    }
    img{        
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px 5px 5px 5px;
        width: 9%;
    }
    .search{
        /* display:flex ;
        margin-right: auto; */
        width:40% ; 
        height:20% ;  
        margin-top:2% ;
    }
    .input{        
        border: none ;
        
    }
    .button-search{        
        background: white ;
        
        border: none ;
       
    }
    
`