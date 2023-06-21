
import styled from "styled-components"


export  const  ContainerMainSobreMim = styled.main`
    
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    width: 1000px;
    height: 100%;
   
    
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        width: 85%;
       
        
        
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        width: 85%;
       
        
    };


`
export const ContainerDivSobreMim = styled.div`
    width: 100%;
    height: 5vh;    
    display: flex;
    justify-content: left;
    align-items: center; 
    border-radius: 10px;
    background: none;
   

`
export const TextHSobreMim = styled.h2`
    font-size: 1.8rem;
    color:  #e5e5e5;
    font-weight: 700;
    background:none; 
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
     font-size: 1.2rem;
        
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 1.5em;
       
    };
`

export const ContainerDivTextPSobreMin = styled.div`

    width:100%;
    height: 32vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background:none; 
    
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        
       justify-content: left;
       
        
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
     
    };

    
`
export const TextSobreMimDiv = styled.div`
        width:60%;
       height: 40vh;
       background: none;
       display: flex;
       justify-content: center;
       align-items: center;
       @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
       width:100%;
       height: 20vh;
       justify-content: left;
 
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      width:100%;
       height: 30vh;
       justify-content: left;
        
    };

`
export const TextP = styled.p`
    font-size: 1.3rem;
    margin-left: 1em;
    color: #909090;
    font-weight: 700;
    background:  none; 
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    font-size: 0.9rem;
        
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 1.2em;
       
    }
  
`
export const StrongP = styled.strong`
   background-color: #380060;
   padding: 3px 2px 3px 2px ;
   border-radius: 10px;
   color:  #ffffff;
   
`

export const ContainerButtonDwCv = styled.div`
    width: 100%;
    height: 7vh;
    background: none;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 50px;
    
   
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        justify-content: center;
        margin-right: 0;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
       
    };
 
    
`
export const ContainerDivImgSobreMin = styled.div`

     width: 25%;
    height: 85%;
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        display: none;
        
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        display: none;
        
    }

`
export const ImgSobreMin = styled.img`
     width: 95%;
    height: 100%;
   
`

export const ButtonDwCvA = styled.a`
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 15px;
    border: none;
    width: 25%;
    height: 100%;
    color: #ffffff;
    text-decoration: none;
    font-size: 1.4rem;
    background-color: #380060;
    box-shadow:
    0.9px 1.5px 1.6px rgba(0, 0, 0, 0.041),
    2px 3.4px 3.4px rgba(0, 0, 0, 0.061),
    3.3px 5.7px 5.8px rgba(0, 0, 0, 0.075),
    5px 8.6px 8.7px rgba(0, 0, 0, 0.087),
    7.3px 12.4px 12.5px rgba(0, 0, 0, 0.098),
    10.3px 17.5px 17.7px rgba(0, 0, 0, 0.109),
    14.6px 24.9px 25.1px rgba(0, 0, 0, 0.121),
    21.2px 36.1px 36.5px rgba(0, 0, 0, 0.136),
    32.6px 55.7px 56.3px rgba(0, 0, 0, 0.156),
    58px 99px 100px rgba(0, 0, 0, 0.19);

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        width: 150px;
        height: 6vh;
        font-size: 1em;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        
        width: 180px;
        height: 7vh;
        font-size: 1.2em;
    }

`

