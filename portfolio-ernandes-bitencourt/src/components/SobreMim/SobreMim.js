import React from "react";
import {TextSobreMimDiv, ContainerMainSobreMim,ContainerDivSobreMim , TextHSobreMim, ContainerDivTextPSobreMin,ContainerButtonDwCv,ContainerDivImgSobreMin,ImgSobreMin,ButtonDwCvA } from "./StyledSobreMim"
import sobreminScreen from "../../img/imgSobreMim/sobreminScreen.png"
import { TextoSobreMin } from "../../endpoints/TextoSobreMin";
// import { Link } from "react-router-dom";
// import {curriculoErnandesBitencourt} from "../../curriculo/curriculoErnandesBitencourt.pdf"
// import {linkStyle} from "../loadingPage/LoadingPage"
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
                  {/* <ButtonDwCvA> <Link style={linkStyle} to={curriculoErnandesBitencourt} target="_blank" download>  Currículo  </Link> </ButtonDwCvA> */}
                        
                </ContainerButtonDwCv>
            
    </ContainerMainSobreMim>
    )

}  