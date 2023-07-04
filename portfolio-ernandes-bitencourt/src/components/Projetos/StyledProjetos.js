import styled from "styled-components"


export const ContainerMainProjetos = styled.main`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    width:100%;
    max-width: ${props => props.theme.maxWidth};
    min-width: ${props => props.theme.minWidth};
    
    


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
    min-width: ${props => props.theme.minWidth};
    height: auto;
    display: flex;
    justify-content:left;
    align-items: center; 
   
`;
export const TextH3Projetos = styled.h2`
    font-size:${props => props.theme.titulos};
    color:  ${props => props.theme.corTexto};
    font-weight: 700;
    background-image: linear-gradient(transparent 0%,transparent 90% , ${props => props.theme.corSecundaria}, ${props => props.theme.corSecundaria});
    background-repeat: no-repeat;
    background-size: 15% 100% ;
`;

export const ContainerCardsProjetos = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width:100%; 
 
`;




export const ImgCarrocel = styled.img`
    width: 95%;
   height: 90%;
    border: none;

`;

export const ContianerProjetos = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`;



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
    
     margin-left: 4px;
     border: none;
    
   
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
margin-top: 3em;
  height: 18em;
    width:100%;
    max-width: 18em;
    min-width: 15em;
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 3px ${props => props.theme.corPrincipal};
  border-radius: 10px;
  padding: 0.5rem;
  box-sizing: border-box;
  text-align: center;
  gap: 2em;
    p{
        font-size: 1em;
        color: ${props => props.theme.corTexto};
        font-weight: 700;
        background-image: linear-gradient(transparent 0%,transparent 90% , ${props => props.theme.corSecundaria}, ${props => props.theme.corSecundaria});
        background-repeat: no-repeat;
        background-size: 15% 100% ;
        background-position-x: left;
        transition: background-size 300ms;
    
    }

    a{
        width: 2.2em;
        height: auto;
        border-bottom: solid 2px ${props => props.theme. corSecundaria};
    }
    :hover{
      p{
        background-size: 100% 100%;
        background-position-x: left;
        color: ${props => props.theme.corHoverTextClaro};
        background-image: linear-gradient(transparent 0%,transparent 90% , ${props => props.theme.corHoverText}, ${props => props.theme.corHoverText});
        transition: 0.5s;
        }
      
    }

`;
export const Img = styled.img`
    width: 100%;
    height: auto;
`;
