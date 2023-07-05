import styled from "styled-components";

export const ContainerFooter = styled.footer`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    min-width: ${props => props.theme.minWidth};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const P = styled.p`
    font-size: 1em;
    color: ${props => props.theme.corTexto};
   
`;

