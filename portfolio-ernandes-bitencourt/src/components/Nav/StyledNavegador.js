import styled from "styled-components"


export const ContainerNavHeader = styled.nav`
    width: 100%;
    max-width:${props => props.theme.maxWidthHeader};
    min-width: ${props => props.theme.minWidth};
    height:100%;
    display: flex;
    justify-content:space-between;
    align-items: center; 
   background-color: ${props => props.theme.corFundo};
   
   

`
export const ContainerImgLogoHeader = styled.div`
    display: flex;
    
    justify-content: center;
    width: 17em;
    max-width: 12em;
    min-width: 9em;
     height: auto;
    cursor: pointer;
    margin-top: 7px;
    background-color: ${props => props.theme.corFundo};
    padding-bottom: 6px;
    

    /* @media screen and (min-device-width : 481px) and (max-device-width : 999px) { 

        height: 100%;
        width: 80px;
        border-bottom: none;

    }


    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
        height: 100%;
        width: 80px;
        border-bottom: none;
        

    } */
`;
export const ImgLogoHeader = styled.img`
    margin-top: 3px;
    width: 100%;
    
    height: 100%;
    cursor: pointer;
    
    
    /* @media screen and (min-device-width : 481px) and (max-device-width : 999px) { 

        height: 100%;
        width: 100%;
        border-bottom: none;

    };


    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
        height: 100%;
        width: 100%;
        
    }; */
`
export const UlNavHeader = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 55%;
    min-width:300px;
    height:100%;

    
    
    
    span{
        background:none;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 999px) { 

    display: ${({ativadoRes})=> ativadoRes ? 'flex' :'none'};
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    background: ${props => props.theme.corFundo};
    transform: ${({ativadoRes }) => (ativadoRes ? "translateX(0)" : "translateX(-100%)")};
     height: 60vh;
     width: 30%;
     text-align: center;
     padding: 1.5rem;
     position: absolute;
     top: 0;
     right: 0;
     transition: transform 0.3s ease-in-out;
     border: solid 1px ${props => props.theme.corPrincipal};

    }

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
            /* celulares */

        display: ${({ativadoRes})=> ativadoRes ? 'flex' :'none'};
        gap: 30px;
        flex-direction: column;
        justify-content: center;
        align-items:center;
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
    text-decoration: none;
    text-align: center;
    align-items: center;
    font-size: 1rem;
    color: ${props => props.theme.corTexto};
    cursor: pointer;
    font-weight: 700;
    background-image: linear-gradient(transparent 0%,transparent 90% , ${props => props.theme.corSecundaria}, ${props => props.theme.corSecundaria});
    background-repeat: no-repeat;
    background-size: 15% 100% ;
    background-position-x: left;
    transition: background-size 300ms;
    :hover{
        
        background-size: 100% 100%;
        background-position-x: left;
        color: ${props => props.theme.corHoverTextClaro};
        background-image: linear-gradient(transparent 0%,transparent 90% , ${props => props.theme.corHoverText}, ${props => props.theme.corHoverText});
        transition: 0.5s;
        
        
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
            /* tablets */
            

            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: none;
            font-size: 0.8em;

    }

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
        /* celulares */
            display: flex;
            flex-direction: column;
            
            height: 5vh;
            border-bottom: none;
            padding-top: 10px;
            padding-bottom: 0;
            font-size: 0.8em;
            span{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                
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