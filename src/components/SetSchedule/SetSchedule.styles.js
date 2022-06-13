import styled from "styled-components";

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
`
export const Info = styled.div`
    margin: 1% auto 1% auto ;
    width: 80% ;
    .infocus-inn{
        display: flex ;        
        .infoinn{
            display: flex ;
            margin: 1% auto 1% auto ;
            .avatar{
                border: 1px #d4d4d4 solid;
                padding: 2px;
                border-radius:50%;
                -moz-border-radius:50%;
                -webkit-border-radius:50%;
                width: 17% ;
            }
            .info{
                margin: auto 1% auto 2%;
                
                
            }
        }
    }
    
    .infonews{
        display: flex ;
        margin: 1% auto 1% auto ;
        .avatar{
            border: 1px #d4d4d4 solid;
            //padding: 2px;            
            width: 20% ;
        }
        .info{
            margin: auto 1% auto 2%;
            
            
        }
    }
`

export const Schedule = styled.div`
    margin: 1% auto 1% auto ;
    width: 80% ;
`