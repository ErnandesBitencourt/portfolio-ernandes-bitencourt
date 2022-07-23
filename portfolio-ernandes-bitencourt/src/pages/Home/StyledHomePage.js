import styled from "styled-components"


export const ContainerGeral = styled.div`
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #080713;
    overflow: hidden;
    


`



//----------------------Container Header -------------------------------//

export const ContainerHeader = styled.header`
    
    width: 100%;
    height:8vh;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #080713;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 4;

        
`


export const ContainerNavHeader = styled.nav`
    width: 90%;
    max-width:1150px;
    height:100%;
    display: flex;
    justify-content:space-between;
    align-items: center; 
    background-color: #080713;
    
`
export const ContainerImgLogoHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 6vw;
    height: 100%;
    cursor: pointer;
    border-bottom: solid 1px #380060;
    margin-top: 7px;
    background-color: #080713;
    padding-bottom: 6px;

    @media screen and (min-device-width : 481px) and (max-device-width : 999px) { 

        height: 100%;
        width: 80px;
        border-bottom: none;

    }


    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
        height: 100%;
        width: 80px;
        border-bottom: none;
        

    }
`
export const ImgLogoHeader = styled.img`
    margin-top: 3px;
    width: 100%;
    height: 90%;
    cursor: pointer;
    background-color: #080713;
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) { 

        height: 100%;
        width: 100%;
        border-bottom: none;

    };


    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
        height: 100%;
        width: 100%;
        
    };
`
export const UlNavHeader = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height:100%;
    border-bottom: solid 1px #380060;
    background-color: #080713;
    span{
        background:none;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 999px) { 

    display: ${({ativadoRes})=> ativadoRes ? 'flex' :'none'};
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    background: #080713;
    transform: ${({ativadoRes }) => (ativadoRes ? "translateX(0)" : "translateX(-100%)")};
     height: 60vh;
     width: 30%;
     text-align: center;
     padding: 1.5rem;
     position: absolute;
     top: 0;
     right: 0;
     transition: transform 0.3s ease-in-out;
     border: solid 1px #380060;

    }

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
            /* celulares */

        display: ${({ativadoRes})=> ativadoRes ? 'flex' :'none'};
        gap: 30px;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        background: #080713;
        height: 100vh;
        width: 100%;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        

        
    }
   
   
`
export const TextIlSobreMim = styled.li`

    list-style-type: none;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    align-items: center;
    font-size: 1.2rem;
    color: #909090;
    cursor: pointer;
    padding-left:30px;
    padding-right: 30px;
    padding-bottom: 10px;
    padding-top: 10px;
    border-radius:10px;
    border-bottom: 4px solid #380060;
    background-image: linear-gradient(#380060,#380060);
    background-repeat: no-repeat;
    background-size: 0 100%;
    background-position-x: right;
    transition: background-size 500ms;
    

    :hover{
        background-size: 100% 100%;
        background-position-x:left;
        
        color:#e5e5e5;
        
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
            /* tablets */
            
            width: 85%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #909090;
            border-bottom: none;
            :hover{
            background-color: #909090;
            color:#e5e5e5;
     }

    }

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
        /* celulares */
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 5vh;
            color: #909090;
            border-bottom: none;
            padding-top: 10px;
            padding-bottom: 0;

            span{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            :hover{
               background :none ;
             color:#e5e5    
             

            }
   }
   
    
`
///------------Hamburger ---------//


export const HamburgeContaine1 = styled.div`
    width: 20px;
    height: 40px;
    border: solid 1px red;
    padding: 10px;
    
    display: none;

    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
            position:fixed;
            top: 4%;
            right: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 2rem;
            height: 2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;

            span{
            
            width: 2rem;
            height: 0.2rem;
            background: ${({ ativadoRes2 }) =>
            ativadoRes2 ? '#e5e5e5' : '#e5e5e5'};
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;

            :first-child {
            transform: ${({ ativadoRes2 }) => ( ativadoRes2? "rotate(45deg)" : "rotate(0)")};
            }

            :nth-child(2) {
            opacity: ${({  ativadoRes2 }) => ( ativadoRes2 ? "0" : "1")};
            transform: ${({  ativadoRes2 }) => ( ativadoRes2 ? "translateX(20px)" : "translateX(0)")};
            }

            :nth-child(3) {
            transform: ${({  ativadoRes2}) => ( ativadoRes2? "rotate(-45deg)" : "rotate(0)")};
            }

            }
        
            }


            @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
                /* celulares */

            position:fixed;
            top: 4%;
            right: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 2rem;
            height: 2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;

            span{
            
            width: 2rem;
            height: 0.2rem;
            background: ${({ ativadoRes2 }) =>
            ativadoRes2 ? '#e5e5e5' : '#e5e5e5'};
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;

            :first-child {
            transform: ${({ ativadoRes2 }) => ( ativadoRes2? "rotate(45deg)" : "rotate(0)")};
            }

            :nth-child(2) {
            opacity: ${({  ativadoRes2 }) => ( ativadoRes2 ? "0" : "1")};
            transform: ${({  ativadoRes2 }) => ( ativadoRes2 ? "translateX(20px)" : "translateX(0)")};
            }

            :nth-child(3) {
            transform: ${({  ativadoRes2}) => ( ativadoRes2? "rotate(-45deg)" : "rotate(0)")};
            }

            }
        
            }
             


`



//----------------------------Container LoadingPage-------------------//

 export const ContainerGeralLoadingPage = styled.div`

    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 100% ;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  #080713;
    padding-top: 10vh;
    padding-bottom: 10vh;
 `


//----------------------Container Sobre mim -------------------------------//


export  const  ContainerGeralMainSobreMim = styled.div`
    padding-top: 15vh;
    padding-bottom: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    margin-top:10vh;
     background-color: #0b0a17;

     @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
     padding: 12vh 0 6vh 0;
        
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        padding: 15vh 0 6vh 0 ;
       
    };
   
 
`


//------------------------Butto voltar ao topo -----------------------//

export const ContianerButtomTop = styled.div`

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
    height: 60vh;
    padding-top: 15vh;
    padding-bottom: 5vh;
    background-color:  #080713;

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
   background-color: #0b0a17;
    width: 100%;
    
    padding-top: 15vh;
    padding-bottom:10vh;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
     padding: 12vh 0 4vh 0;
        
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        padding: 15vh 0 6vh 0 ;
       
    };
   h1{
    color: #909090;
    background: none;
    font-size: 1.5rem;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    font-size: 1rem;
        
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 1.4rem;
    };
    a{
        text-decoration:none;
        
        code{
           background-color:#0b0a17 ;
           font-size: 1.7rem;
           color: #380060;
           @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
            /* celulares */
            font-size: 1.4rem;

            :active{
                border-bottom: solid 1px #909090;
            }
                
            };
        @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
            /* tablets */
            font-size: 1.6rem;
            :active{
                border-bottom: solid 1px #909090;
            }
    };
            
           :hover{
            border-bottom: solid 1px #909090;
           }
        }
    }
   }

`




//----------------------Container Contatos-------------------------------//


export  const  ContainerGeralContatos = styled.div`
    padding-top: 13vh;
    padding-bottom: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65vh;
    background-color:  #080713;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
     padding: 12vh 0 0 0;
        
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        padding: 15vh 0 2vh 0 ;
       
    };
   
    
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
     padding: 5vh 0 0 0;
        
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        padding: 8vh 0 6vh 0 ;
       
    };
   
    
    
`


