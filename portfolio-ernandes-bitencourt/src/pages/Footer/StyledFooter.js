import styled from "styled-components";

export const ContainerFooter = styled.footer`
    width: 1150px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
     width: 85%;
    
         
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        width: 95%;
        
    };
  
`
export const DivText = styled.div`
    width: 250px;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const P = styled.p`
    font-size: 1em;
    color: #e5e5e5;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    font-size: 0.8em;
    
         
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 0.9em;
        
    };

`

export const Divimg = styled.div`
    width: 250px;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const Img = styled.img`

    width: 70%;
    height: 85%;   
    
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    width: 65%;
    height: 65%; 
    
         
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        width: 56%;
    height: 75%; 
        
    };

`