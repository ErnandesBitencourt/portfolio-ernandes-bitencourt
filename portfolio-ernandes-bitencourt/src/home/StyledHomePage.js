import styled from "styled-components"



export const ContainerGeral = styled.div`
    width:100%;
    min-width: ${props => props.theme.minWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x:none;
    background-color: ${props => props.theme.corFundo};

`;

//----------------------Container Header -------------------------------//

export const ContainerHeader = styled.header`
    
    width: 100%;
    max-width: 100%;
    min-width: ${props => props.theme.minWidth};
    height:9.5%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 4;
    background-color: ${props => props.theme.corFundo};      
`;


//----------------------------Container LoadingPage-------------------//

 export const ContainerGeralLoadingPage = styled.div`

    width: 100%;
    max-width: 100%;
    min-width: 320px;
    height: 100vh;
    max-height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    padding-top: 10vh;
    padding-bottom: 10vh;
    box-sizing: border-box;
    @media only screen and (max-device-width: 600px) {
        /* celulares */
        box-sizing: content-box;
        padding-bottom: 1em;
        padding-top: 2em;
    }
 `;


//----------------------Container Sobre mim -------------------------------//


export  const  ContainerGeralMainSobreMim = styled.div`
    padding-top: 14vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    min-width: ${props => props.theme.minWidth};
    height: 45em;
    max-height: 25em;
    min-height: 15em;

 
`;


//------------------------Butto voltar ao topo -----------------------//

export const ContianerButtomTop = styled.div`
    display: ${props => props.butoonTopOf ? 'block' : 'none' };
    position: fixed;
    bottom: 50px;
    right:20px;
    background: none;
    cursor: pointer;
    width: 3vw;
    height: 6vh;
    
    img {
        width: 3vw;
        height: 6vh;
        background: none;

        :hover{
           zoom: 1.1;
        }
    }
 
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        position: fixed;
        bottom: 50px;
        right:10px;
        background: none;
   
        cursor: pointer;
        width: 5vw;
        height: 5vh;
        img {
            width:100%;
            height: 100%;
            background: none;
        }
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        position: fixed;
        bottom: 50px;
        right:20px;
        background: none;
   
        cursor: pointer;
        width: 4vw;
        height: 6vh;
        img {
            width:100%;
            height: 100%;
            background: none;
        }
    };
`


//----------------------Container Habilidades -------------------------------//


export  const  ContainerGeralSkill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: ${props => props.theme.minWidth};
    height: 45em;
    max-height: 30em;
    padding-top: 13vh;
  
  
   

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
     padding: 12vh 0 4vh 0;
        height: auto;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        padding: 15vh 0 6vh 0 ;
        height: auto;
    };
   
`





//----------------------Container Projetos -------------------------------//

export  const  ContainerGeralProjetos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 10em;
    padding-bottom: 5em;
`;





//----------------------Container Contatos-------------------------------//


export  const  ContainerGeralContatos = styled.div`
    padding-top: 10vh;
    padding-bottom: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8em;
    
`



//---------------------------Formação---------------------------------//



export  const  ContainerGeralFormacao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 60vh;
    padding-top: 10vh;
    padding-bottom: 5vh;

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
     padding: 10vh 0 0 0;
        
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        padding: 15vh 0 0 0 ;
       
    };
   
   
`

//----------------------Container Footer -------------------------------//


export  const  ContainerGeralFooter = styled.footer`
    
    width: 100%;
    min-width: ${props => props.theme.minWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;

   
    
    
`


