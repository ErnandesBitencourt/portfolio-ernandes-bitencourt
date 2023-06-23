import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
   font-family: 'Open Sans', sans-serif;
  
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar{
     width: 10px;
     background-color: none;
     border-radius:50px;
}
    ::-webkit-scrollbar-track{
  background: black;
  border-radius:50px;
  
}
    ::-webkit-scrollbar-thumb{
  background-color:${props => props.theme.corPrincipal};
  border-radius:50px;
  
}
}




`;

