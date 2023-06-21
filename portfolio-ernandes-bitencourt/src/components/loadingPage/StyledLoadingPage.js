import styled from "styled-components"

export const ContainerGeralLog = styled.div`
    margin-top: 150px;
    font-family: monospace;
    background-color: rgb(2 44 34);
    width: 1150px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
     
        width: 100%;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
       
        width:  85%;
    };

`
export const Container = styled.div`

    display: flex;
    font-family: monospace;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
    border-radius: 5px;
    white-space: nowrap;
    background-color: rgb(2 44 34);

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        
        width:95%;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        
        width:  55vh;
    };
    

`
export const ContainerSegundarios = styled.div`

    display: flex;
    font-family: monospace;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 95%;
    border-radius: 5px;
    white-space: nowrap;
    background-color: rgb(2 44 34);

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        
        width:95%;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        
        width:  55vh;
    };
    
`

export const ContainerLogo2 = styled.div`
    width: 50%;
    height: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(2 44 34);
    border-radius: 10px;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
        /* celulares */
        display: none;

    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        display: none;
    }       

`

export const ContainerImgLogo = styled.div`

    width: 72%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
`
export const ImgLogo =styled.img`
    width: 100%;
    height: 100%;
    
`

export const ContainerHeader = styled.header`

    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height:45%;

`

export const ContainerButon = styled.main`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    Link{
        background-color: white;
    }

`
export const ButtonEfect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
  

`


export const HoverButton = styled.p`
 
    position: relative;
    width: 40%;
    height: 60%;
    background-color:#380060;
    border:  1px solid #000;
    padding-left: 10px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 1.7em;
    font-weight: bolder;
    color:  #e5e5e5;
    cursor: pointer;

   
    :after{
            content: "";
            position: absolute;
            top: 38%;
            right: 5px;
            border: 6px solid transparent;
            border-right-color:var(--color1);
            animation: link-arrow 1s infinite;
    }

    @keyframes link-arrow {
        0%{
            right: 5px;
        }
        25%{
            right: 15px;
        }
        50% {
            right: 5px;
        }
        75%{
            right: 15px;
        }
        100% {
            right: 5px;
        }
    }

    
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        font-size: 1em;
        height: 45%;
        padding-right: 20px;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 1.5em;
        padding-right: 15px;
    }


`



 export const ContainerName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
     width: 100%;
    height: 15%;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 7vh;
        
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        
        width: 100%;
        height: 7vh;
    }

 `

export const NomeH3 = styled.h3`
    text-align:center;
    font-size: 2.5em;
    font-weight: 7000;
    color:  #e5e5e5;
   

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        font-size: 1.6em;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 2em;
    }

    
`
export const ContainerHello =styled.div`
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
    height: 15%;

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height: 5vh;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
    
        width:  100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  
`

export const NomeHello = styled.h1`
    text-align: center;
    font-size: 2em;
    font-weight: 7000;
    color:  #e5e5e5;
 

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        font-size: 1.5em;
       
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 1.6em;
}


`
export const ContainerIm =styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height: 5vh;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        width:  100%;
}
   
`
export const TextIm = styled.h2`
    font-size: 2em;
    font-weight: 7000;
    color:  #e5e5e5;

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
       font-size: 1.6em;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 1.8em;
    }


`

export const ContainerTextp =styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
    flex-wrap: wrap;
  
   
`

export const Textp = styled.p`

    text-align: center;
    font-size: 1.8em;
    font-weight: 7000;
    color:  #e5e5e5;
    overflow: hidden;
    
    animation: typeTextp 4s steps(40) 1s normal both;

    @keyframes typeTextp {
        from {
            width: 0;
        }
        to {
            width: 24em;
        }
    }
//---------------------//
    
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        font-size: 1.3em;
        
    
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 1.4em;
    }

    
`
export const ContaineFooter= styled.footer`
   
    display: flex;
    
    gap: 20px;
    margin-top: 20px;
    border-bottom: 1px solid #909090 ;
 

`
export const FooterAnimetion = styled.div`

animation: float 5s ease-in-out infinite;
display: flex;
    
    gap: 20px;
    margin-top: 15px;
        
       

@keyframes float  {
0%{
    transform: translateY(0);

}
50% {
    transform: translateY(-15px);

}
100% {
    transform: translateY(0);
}
}



`


 export const ALinkding = styled.a`
    animation-delay: 1s;
 
 `
  export const AGmail= styled.a`
    animation-delay: 2s;
  `

export const SaibaMaisP = styled.p`
    font-size: 35px;
    font-weight: 7000;
    color: white;

`

export const IconGmail = styled.img`
    width:  50px;
    height: 50px;
    border-radius: 50%;
    :hover{
        border: none;
        border-radius: 50%;
        background-color:#e5e5e5;
     }

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    width:  30px;
    height: 30px;
    border-radius: 50%;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        
    }


`
export const IconLinkidin = styled.img`
    width:  50px;
    height: 50px;
    border-radius: 50%;
    :hover{
        border: none;
        border-radius: 50%;
        background-color:#e5e5e5;
     }
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    width:  40px;
    height: 40px;
    border-radius: 50%;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        
    }
`
export const IconGitHub = styled.img`
    width:  50px;
    height: 50px;
    border-radius: 50%;
    :hover{
        border: none;
        border-radius: 50%;
        background-color:#e5e5e5;
     }

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    width:  40px;
    height: 40px;
    border-radius: 50%;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        
    }

`