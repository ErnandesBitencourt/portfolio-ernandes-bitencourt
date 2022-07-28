import styled from "styled-components"


export const ContainerMainProjetos = styled.main`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    gap: 5vh;
    align-items: center;
    width: 1000px;
    padding-bottom: 5vh;
    background-color:  #0b0a17;
   

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    width: 85%;
         
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        width: 85%;   
    };

`

export const ContainerDivH3Projetos = styled.div`
    width: 100%;
    height: 4vh;
    display: flex;
    justify-content:left;
    align-items: center; 
    border-radius: 10px;
    background: none;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */

        width: 100%;

        justify-content: left;

    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      
       width:100% ;
      justify-content: left;
      
    };
`
export const TextH3Projetos = styled.h2`
    font-size: 1.8rem;
    color:  #e5e5e5;
    font-weight: 700;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        font-size: 1.2em;
       
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      font-size: 1.5em;
        
    };
`

export const ContainerCardsProjetos = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius:20px;
     width:100%; 
     gap: 10px;
    
    /* overflow-y: auto;
    overflow-x :hidden; */
    background: none;

   
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        position: static;
        width:90%; 
        height: 75% ;
       
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      position: static;
      width:75%; 
      height: 85% ;
      align-items: center;
      justify-content: center;
    };


`




export const ImgCarrocel = styled.img`
    width: 95%;
   height: 90%;
    border: none;
    border-radius: 10px;
    background: none;


    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    width: 95%;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      
        width: 90%;
    };
  


`

export const ContianerProjetos = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #0b0a17;
   
    
    
    
`



export const DivNomeProjeto = styled.div`
    width: 100%;
    height: 4vh;
    display: flex;
    justify-content:left;
    align-items: center;
    background: none;
    a{
        text-decoration:none;
        width: auto;
        text-align: left;
       
        
    }
    
    
   
`
export const TextNomeProjeto = styled.h1`
     font-size: 1.3rem;
     color:  #e5e5e5;
     font-weight: 700;
     background-color:#0b0a17;
     margin-left: 4px;
     border: none;
    
     :hover{
        border-bottom: solid 1px #e5e5e5;
     }
     @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        font-size: 1rem;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      
        font-size: 1.2rem;
    };

`

export const DivImgProjeto = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0b0a17;

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    width: 100%;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      
        width: 100%;
    };

    
`

export const DivTextDetalhesProjeto = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none; 
     
`

export const ImgGitHub = styled.img`
 
            width: 35px;
            height: 35px;
            background-color: #0b0a17;
            :hover{
                border-radius: 50%;
                background-color:#e5e5e5 ;
               
            }
      

`
export const TextDetalheProjeto = styled.p`
        font-size:0.9rem;
        color: #e5e5e5;
        display: flex;
        justify-content: left;
        align-items: center;
        flex-wrap: wrap;
        text-align: left;
        margin-left: 4px;
        background: none;
        @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        font-size: 0.7rem;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      
        font-size: 0.85rem;
    };
`

export const DivTextGitHubProjeto = styled.div`
    width:100%;
    height: auto;
    display: flex;
    justify-content:space-around ;
    align-items: center;  
    background-color: #0b0a17;
   

    p{
        background-color: #ffff;
    }
`


export const Cards = styled.div`
  height: 350px;
    width: 230px;
  display : flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 230px;
  background-color:#0b0a17  ;
  border: solid 3px #380060;
  border-radius: 10px;
  padding: 3px;
    

   
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        height: 300px;
        /* width: 150px; */
    
        flex: 1 1 170px;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        height: 350px;  
        /* width: 100px; */
        flex: 1 1 200px;
     
    };

`

