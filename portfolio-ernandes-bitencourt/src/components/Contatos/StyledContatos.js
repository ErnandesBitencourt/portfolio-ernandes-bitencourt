import styled from "styled-components"

export const ContainerMainContatos = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    min-width: ${props => props.theme.minWidth};
    height: 100%;
`;
export const ContainerDivH3Contatos = styled.div`
    width: 100%;
    min-width: ${props => props.theme.minWidth};
    display: flex;
    justify-content: left;
    align-items: center; 
    border: none;
`;
export const TextH2Contatos = styled.h2`
     font-size: ${props => props.theme.titulos};
     color:   ${props => props.theme.corTexto};
    font-weight: 700;
    background-image: linear-gradient(transparent 0%,transparent 90% , ${props => props.theme.corSecundaria}, ${props => props.theme.corSecundaria});
    background-repeat: no-repeat;
    background-size: 20% 100%;
`;
export const ContainerIcons =styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    animation: float 5s ease-in-out infinite;
   

@keyframes float  {
0%{
    transform: translateY(0);

}
50% {
    transform: translateY(-20px);

}
100% {
    transform: translateY(0);
}
};   
        a{
            text-decoration: none;
        };
    img{
        
        width: 40px;
        height: 40px;
        :hover{
            background-color: ${props => props.theme.corTexto} ;
            border: none;
            border-radius: 50%;
        };

   
    };

`










