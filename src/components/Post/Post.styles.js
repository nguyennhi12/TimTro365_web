import styled from 'styled-components'

export const Wrapper = styled.div`
    
    .breadcrum{
        display: block ;
        margin: 1% auto 0% auto ;
        width: 80% ;
        
        
    }
    .breadcrum-item{
        text-decoration:none;
        border: none
    }
    Form{
        display: block ;
        margin: 1% auto 2% auto ;
        width: 30% ;
        padding:2% ;
        
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
       h1{
           color: #FFC938;
           size: 20;
       }
       Label{
           display:flex;
       }
       h4{
            color:red;
       }
        Button{
            display: block ;
            margin: 0% auto 0% auto ;
            width:80% ;
            background: #FFC938 ;
            border: none ;
        }


    }

`
export const FB_GG = styled.div`
    display: flex ;
    margin-top:4% ;
    .Button-FB{
        display: block ;
        margin: 1% auto 2% auto ;
        background:#3C5899 ;
        width: 30%;
    }
    .Button-GG{
        display: block ;
        margin: 1% auto 2% auto ;
        background:#DE4B39 ;
        border: none ;
        width: 30%;
    }
`