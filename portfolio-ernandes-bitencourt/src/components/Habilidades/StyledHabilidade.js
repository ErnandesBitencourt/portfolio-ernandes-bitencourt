import styled from "styled-components"


export  const  ContainerMainSkill = styled.main`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 1000px;
    height: 100%;
    row-gap: 20px;
   
    
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        
        width: 85%;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        padding-bottom: 20px;
        row-gap: 50px;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      
        width: 85%;
        display: flex;
        flex-direction: column;
    };



`

export const ContainerDivSkill = styled.div`
    width: 100%;
    height: 5vh;
    border: none;
    border-radius: 13px;
    background: none;
    display: flex;
    justify-content: left;
    align-items: center;
   
    
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        
    height: 3vh;
        
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        
        height: 4vh;
        
    };
    
   

`

export const TextHSkill = styled.h2`
    font-size: 1.8rem;
    color:  #e5e5e5;
    font-weight: 700;

    @media screen and (min-device-width :100px) and (max-device-width : 480px) {
    /* celulares */
       font-size: 1.2em;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      font-size: 1.5em;
    };

`
export const ContainerGeralFrontEnd = styled.div`
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 820px;
    height: 100%;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
       width: 100%;
       height: none;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      width: 100%;
      
    };
    
`

export const ContainerDivImgHabilidades = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     width: 300px;
    height: 250px; 
    position: relative;
    right: 50px;
    @media screen and (min-device-width :100px) and (max-device-width : 480px) {
    /* celulares */
       display: none;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      display: none;
    };
`
export const ImgHabilidades = styled.img`
     width:100%;
    height: 100%; 
`

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    height: 100%;
    gap: 10px;
    
   

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
       width:100%;
       
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      width: 100%;
    };    
    
`
export const ContainerDivCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 5px;
    flex-wrap: wrap;
    
    

    @media screen and (min-device-width :100px) and (max-device-width : 480px) {
    /* celulares */
       width: 80%;
       
       flex-wrap: wrap;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
         width: 90%;
        flex-wrap: wrap;
        
    }; 
    
`


export const Cards = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    height: 22vh;
    padding-top: 5px ;
    padding-bottom: 5px;
    align-items: center;
    box-shadow:
    0.9px 1.5px 1.6px rgba(0, 0, 0, 0.041),
    2px 3.4px 3.4px rgba(0, 0, 0, 0.061),
    3.3px 5.7px 5.8px #380060,
    5px 8.6px 8.7px rgba(0, 0, 0, 0.087),
    7.3px 12.4px 12.5px rgba(0, 0, 0, 0.098),
    10.3px 17.5px 17.7px rgba(0, 0, 0, 0.109),
    14.6px 24.9px 25.1px rgba(0, 0, 0, 0.121),
    21.2px 36.1px 36.5px rgba(0, 0, 0, 0.136),
    32.6px 55.7px 56.3px rgba(0, 0, 0, 0.156),
    58px 99px 100px rgba(0, 0, 0, 0.19);
    flex: 1 1 170px;
    img{
        width: 65%;
        height: 65%;
    }

    :hover{
        border: solid 3px #380060;
        border-radius:10px;
        box-shadow: none;
        p{
            color: #e5e5e5;
        }
    }
    @media screen and (min-device-width :100px) and (max-device-width : 480px) {
    /* celulares */
       
         flex: 1 1 120px;
         height: 16vh;
         box-shadow:none;
         border: solid 1px #380060;
         gap: 1px;
         img{
            width: 75px;
            height:70px;
         }

    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        flex: 1 1 150px;
        height: 18vh;
        border: solid 1px #380060;
        img{
            width: 90px;
            height: 90px;
         }
         box-shadow:none;
    }

    


`
export const TextCardsP = styled.p`

    color: #909090;
    font-size: 1.2rem;

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
       
    font-size: 0.9rem;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 1rem;
        
    }; 
   
`