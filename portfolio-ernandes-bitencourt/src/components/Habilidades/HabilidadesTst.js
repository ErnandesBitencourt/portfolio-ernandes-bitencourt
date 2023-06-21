import React from "react";
import {frontende1} from "../../endpoints/Skills"
import {ContainerMainSkill,ContainerDivSkill,TextHSkill,ContainerGeralFrontEnd,ContainerDivH3TextFront,ContainerDivImgHabilidades,ImgHabilidades,ContainerCards,ContainerDivCard,ContainerDivCard2,Cards,TextCardsP } from "./StyledHabilidade"
import habilidade from "../../img/imgFrontend/habilidade.png"


export const HabilidadesTst1 = () => {

    return (
        <ContainerMainSkill  >
           <ContainerDivSkill  >
                 <TextHSkill> Habilidades.</TextHSkill>
            </ContainerDivSkill>


                     
                <ContainerGeralFrontEnd >

                    <ContainerDivImgHabilidades >
                        <ImgHabilidades src={habilidade} alt="habilidades"/>
                    </ContainerDivImgHabilidades>  

                    <ContainerCards>

                        <ContainerDivCard>

                             {frontende1.map((habi)=>{
                               return <Cards  key={habi.id}>
                                         <TextCardsP> {habi.nome}</TextCardsP>
                                        <img src={habi.foto}/>
                                             
                                        </Cards>
                                })}
                        </ContainerDivCard>
                                        
                                        
                                       
                     </ContainerCards>
                                
              </ContainerGeralFrontEnd> 

                         
          </ContainerMainSkill>

    )

}