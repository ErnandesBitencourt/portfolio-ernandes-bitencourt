import React from "react";
import {TextSobreMimDiv, ContainerMainSobreMim,ContainerDivSobreMim , TextHSobreMim, ContainerDivTextPSobreMin,ContainerButtonDwCv,ContainerDivImgSobreMin,ImgSobreMin } from "./StyledSobreMim"
import sobreminScreen from "../../img/imgSobreMim/sobreminScreen.png"
import { TextoSobreMin } from "../../endpoints/TextoSobreMin";

export const SobreMim = () => {

    return(
        <ContainerMainSobreMim >

             <ContainerDivSobreMim >
                 <TextHSobreMim  >Sobre mim.</TextHSobreMim>
             </ContainerDivSobreMim> 

            
         
                <ContainerDivTextPSobreMin >

                    <ContainerDivImgSobreMin  >
                        <ImgSobreMin src= {sobreminScreen} />
                    </ContainerDivImgSobreMin>

                    <TextSobreMimDiv>

                        <TextoSobreMin/> 
                    
                    </TextSobreMimDiv>
                       

                </ContainerDivTextPSobreMin>

                <ContainerButtonDwCv  >
                 
                        
                </ContainerButtonDwCv>
            
    </ContainerMainSobreMim>
    )

}  