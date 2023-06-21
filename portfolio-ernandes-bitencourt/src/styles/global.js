import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
 
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar{
     width: 10px;
     background-color: #080713;
     border-radius:50px;
}
    ::-webkit-scrollbar-track{
  background: black;
  border-radius:50px;
  
}
    ::-webkit-scrollbar-thumb{
  background: #380060;
  border-radius:50px;
}
}




`;

