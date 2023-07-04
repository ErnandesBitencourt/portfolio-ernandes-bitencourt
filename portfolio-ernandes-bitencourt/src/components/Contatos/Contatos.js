import React from "react";
import {ContainerMainContatos, ContainerDivH3Contatos,TextH2Contatos,ContainerIcons} from "./StyledContatos"

import linkedininicon from "../../img/imgContatos/linkedininicon.png"
import githubicon from "../../img/imgContatos/githubicon.png"





export const Contatos = () => {

    return(
        <ContainerMainContatos >
            <ContainerDivH3Contatos>
                <TextH2Contatos>Contatos.</TextH2Contatos>
            </ContainerDivH3Contatos>

           
              

                

                        <ContainerIcons>
                                <a target="_blank" href="https://www.linkedin.com/in/ernandes-bitencourt"  > <img  src={linkedininicon} alt="imagem linkedin"/></a> 
                                
                                
                                <a target="_blank" href="https://github.com/ErnandesBitencourt" ><img src={githubicon} alt=" imagem github"/></a>

                        </ContainerIcons>
               

                    
            
          </ContainerMainContatos> 

            )
}