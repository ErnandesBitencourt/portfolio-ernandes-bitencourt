import styled from "styled-components"


export  const  ContainerMainSkill = styled.main`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    min-width: ${props => props.theme.minWidth};
    height: 100%;
    row-gap: 10px;
    
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



`;

export const ContainerDivSkill = styled.div`
    width: 100%;
    min-width: ${props => props.theme.minWidth};
    height: auto;
    display: flex;
    justify-content: left;
    align-items: center;

`;

export const TextHSkill = styled.h2`
    font-size: 1.4rem;
    color: ${props => props.theme.corTexto };
    font-weight: 700;
    background-image: linear-gradient(transparent 0%,transparent 90% , ${props => props.theme.corSecundaria}, ${props => props.theme.corSecundaria});
    background-repeat: no-repeat;
    background-size: 15% 100% ;

    @media screen and (min-device-width :100px) and (max-device-width : 480px) {
    /* celulares */
       font-size: 1.2em;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
      font-size: 1.3em;
    };

`
export const ContainerGeralFrontEnd = styled.div`
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    min-width: ${props => props.theme.minWidth};
    height: 100%;
     
`;

export const ContainerDivImgHabilidades = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    max-width: 35%;
    min-width:30%;
    height: 100%;
    
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
     max-width: 55%;
    height: 100%;
    max-height :50% ;
`;

export const ContainerCards = styled.div`
    display: flex;
   
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    min-width: 350px;
    height: 100%;
    max-height: 100%;
    gap: 0.1em;
    flex-wrap: wrap;
    box-sizing: border-box;
    
    
`;



export const Cards = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 2em;
    max-width: 25%;
    height: 22vh;
    max-height: 22vh;
    min-height: 20vh;
    padding-top: 5px ;
    padding-bottom: 5px;
    align-items: center;
    box-sizing: border-box;
    flex: 1 1 25%;
    border: solid 3px ${props => props.theme.corPrincipal};
    border-radius:10px;
    img{
        width: 50%;
        max-width: 50%;
        height: 50%;
        filter: drop-shadow(-5px 5px 6px ${props => props.theme.corSecundaria});
    }

  

        :hover{        
            p{
                background-size: 100% 100%;
            background-position-x: left;
            color: ${props => props.theme.corHoverTextClaro};
            background-image: linear-gradient(transparent 0%,transparent 90% , ${props => props.theme.corHoverText}, ${props => props.theme.corHoverText});
            transition: 0.5s;  
            }
        };
        


`;
export const TextCardsP = styled.p`

    color:  ${props => props.theme.corTexto};
    font-size: 0.9rem;
    font-weight: 700;
   text-transform: uppercase;
   background-image: linear-gradient(transparent 0%,transparent 90% , ${props => props.theme.corSecundaria}, ${props => props.theme.corSecundaria});
    background-repeat: no-repeat;
    background-size: 15% 100% ;
    background-position-x: left;
    transition: background-size 300ms;
   
`;