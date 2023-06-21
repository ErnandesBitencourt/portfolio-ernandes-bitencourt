import styled from "styled-components"


export const ContainerNavHeader = styled.nav`
    width: 90%;
    max-width:1150px;
    height:100%;
    display: flex;
    justify-content:space-between;
    align-items: center; 
   
    
`
export const ContainerImgLogoHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 4vw;
    height: 100%;
    cursor: pointer;
    border-bottom: solid 1px #380060;
    margin-top: 7px;
    
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
    justify-content: space-evenly;
    align-items: center;
    width: 67%;
    height:100%;
    border-bottom: solid 1px #380060;
    
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