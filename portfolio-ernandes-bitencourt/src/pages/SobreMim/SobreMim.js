import React from "react";
import {TextSobreMimDiv, ContainerMainSobreMim,ContainerDivSobreMim , TextHSobreMim, ContainerDivTextPSobreMin,TextP,StrongP,ContainerButtonDwCv,ContainerDivImgSobreMin,ImgSobreMin,ButtonDwCvA } from "./StyledSobreMim"
import AvatarSobremim from "../img/imgSobreMim/AvatarSobremim.png"
import { Link } from "react-router-dom";
import CurriculoErnandesBitencourt from "../../curriculo/CurriculoErnandesBitencourt.pdf"
import {linkStyle} from "../loadingPage/LoadingPage"





export const SobreMim = () => {

    return(
        <ContainerMainSobreMim className="headline" >

             <ContainerDivSobreMim >
                 <TextHSobreMim  >Sobre mim.</TextHSobreMim>
             </ContainerDivSobreMim> 

            
         
                <ContainerDivTextPSobreMin >

                    <ContainerDivImgSobreMin  >
                        <ImgSobreMin src= {AvatarSobremim} />
                    </ContainerDivImgSobreMin>

                    <TextSobreMimDiv>
                        <TextP >
                            Olá, me chamo <StrongP>Ernandes Bitencourt.</StrongP><br/>
                            Sou desenvolvedor em formação no bootcamp Labenu web full-stack,onde realizo projetos práticos, individuais e em grupos, já domino o HTML5, CSS3, Javascript, React.JS, React hooks, Typescript, Styled-component, Git ,Node.JS, sou curioso,gosto de novos desafios e de sempre está me atualizando.
                        </TextP>
                    </TextSobreMimDiv>
                       

                </ContainerDivTextPSobreMin>

                <ContainerButtonDwCv  >
                  <ButtonDwCvA> <Link style={linkStyle} to={CurriculoErnandesBitencourt} target="_blank" download>  Currículo  </Link> </ButtonDwCvA>
                        
                </ContainerButtonDwCv>
            
    </ContainerMainSobreMim>
    )

}  