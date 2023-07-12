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

   @media only screen and (max-device-width: 1000px) {
        
    max-width:${props => props.theme.maxWidthHeaderResposive};     

}; 

@media only screen and (max-device-width: 600px) {
        
        max-width:${props => props.theme.maxWidthHeaderResposiveC};    
        min-width: ${props => props.theme.minWidthResponsiveC};
   
 }; 

`
export const ContainerImgLogoHeader = styled.div`
    display: flex;
    
    justify-content: center;
    width: 15em;
    max-width: 10em;
    min-width: 9em;
     height: auto;
    cursor: pointer;
    margin-top: 7px;
    background-color: ${props => props.theme.corFundo};
    padding-bottom: 6px;
    
@media only screen and (max-device-width: 320px) {
        
        max-width: 9em;
        min-width: 4em;
        
};
@media only screen and (max-device-width: 600px) {
        
        max-width: 9em;
        min-width: 4em;
      
};
@media only screen and (max-device-width: 1000px) {
        
        max-width: 10em;
        min-width: 4em;
      
};   
`;
export const ImgLogoHeader = styled.img`
    margin-top: 3px;
    width: 100%;
    height: 100%;
    
`
export const UlNavHeader = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 70%;
    min-width:300px;
    height:100%;
    box-sizing: border-box;

    @media only screen and (max-device-width: 600px) {
            /* celulares */
        display: ${({ativadores})=> ativadores ? 'flex' :'none'};
        max-width: 100%;
        min-height: 100vh;
        gap: 30px;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        background-color: ${props => props.theme.corFundo};
        align-items:  center;
        box-sizing: border-box;
        
        
    }
    @media only screen and (max-device-width: 1000px) {
            /* celulares */

        display: ${({ativadores})=> ativadores ? 'flex' :'none'};
        gap: 30px;
        flex-direction: column;
        justify-content: center;
        align-items:  flex-end;
        height: 25em;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        padding-top: 3em;
    }
   
    @media only screen and (max-device-width: 600px) {
            /* celulares */

        align-items:  center;
        padding-top: 0;
        box-sizing: border-box;
        height: 100vh;
       
    }
   
`;
export const ButtonCurriculo = styled.button`
    width: 10rem;
    height: 2rem;
    padding: 1.4rem;
    border-radius: 10px;
    box-sizing:border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.corSecundaria};
    cursor: pointer;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    color:  ${props => props.theme.corTexto};
    p{
    background-image: linear-gradient(transparent 0%,transparent 90% , ${props => props.theme.corFundo}, ${props => props.theme.corFundo});
    background-repeat: no-repeat;
    background-size: 15% 100% ;
    background-position-x: left;
    transition: background-size 300ms; 
    }
    img{
        width: 20px;
        height: 20px;
    }

    :hover{
        color: ${props => props.theme.corHoverTextClaro};

        p{
            background-size: 100% 100%;
            background-position-x: left;
            background-image: linear-gradient(transparent 0%,transparent 90% , ${props => props.theme.corFundo}, ${props => props.theme.corFundo});
            transition: 0.5s;
        }
        
        
    };

    @media only screen and (max-device-width: 1000px)  {
            /* tablets */
            
            font-size: 0.8em;
            margin-right: 5em;

    };

    @media only screen and (max-device-width: 600px)  {
        /* celulares */
             font-size: 1em;  
            margin-left: 5em;
            width: 60%;
            max-width: 50%;
            min-width: 20%;
            justify-content: space-around;
   };

`;
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
        
        
    };

    @media only screen and (max-device-width: 1000px)  {
            /* tablets */
            

            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: none;
            font-size: 0.8em;
            margin-right: 5em;

    };

    @media only screen and (max-device-width: 600px)  {
        /* celulares */
            display: flex;
            flex-direction: column;
            height: auto;
            border-bottom: none;
            padding-top: 10px;
            padding-bottom: 0;
            font-size: 1em;  
            margin-left: 5em;
   };
   
    
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
            right: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 6rem;
            height: 2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;

            span{
            
            width: 2rem;
            height: 0.2rem;
            
            background: ${({ ativadores2 }) =>
            ativadores2 ? props => props.theme.corHoverTextClaro : props => props.theme.corHoverTextClaro};
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;

            :first-child {
            transform: ${({ ativadores2 }) => ( ativadores2? "rotate(45deg)" : "rotate(0)")};
            }

            :nth-child(2) {
            opacity: ${({  ativadores2 }) => ( ativadores2 ? "0" : "1")};
            transform: ${({  ativadores2 }) => ( ativadores2 ? "translateX(20px)" : "translateX(0)")};
            }

            :nth-child(3) {
            transform: ${({  ativadores2}) => ( ativadores2 ? "rotate(-45deg)" : "rotate(0)")};
            }

            }
        
            }


            @media screen and (min-device-width : 100px) and (max-device-width : 600px) {
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
            background: ${({ ativadores2 }) =>
            ativadores2 ? '#e5e5e5' : '#e5e5e5'};
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;

            :first-child {
            transform: ${({ ativadores2 }) => ( ativadores2? "rotate(45deg)" : "rotate(0)")};
            }

            :nth-child(2) {
            opacity: ${({  ativadores2 }) => ( ativadores2 ? "0" : "1")};
            transform: ${({  ativadores2 }) => ( ativadores2 ? "translateX(20px)" : "translateX(0)")};
            }

            :nth-child(3) {
            transform: ${({  ativadores2}) => ( ativadores2 ? "rotate(-45deg)" : "rotate(0)")};
            }

            }
        
            }
             


`

