import React from "react";
import { useState } from "react";
import  {projetosRealizados} from "../../components/Projetos"
import {ContainerMainProjetos,ContainerDivH3Projetos,TextH3Projetos,Cards, ContainerCardsProjetos, ImgCarrocel,ContianerProjetos, DivNomeProjeto,TextNomeProjeto,DivImgProjeto,DivTextDetalhesProjeto,DivTextGitHubProjeto,TextDetalheProjeto,ImgGitHub} from "./StyledProjetos"
import githubicon from "../img/imgContatos/githubicon.png"
import botaoProximo from "../img/ImgIconsVoltarEProximo/botaoProximo.png"
import botaoVoltar from "../img/ImgIconsVoltarEProximo/botaoVoltar.png"


 const ProjetosTst = () => {


const [iProjeto, setIProjeto] = useState(0)


const voltar = () =>{
  return  iProjeto > 0 && setIProjeto(iProjeto-1)
}

const proximo = () =>{
   return iProjeto < projetosRealizados.length -1 && setIProjeto(iProjeto + 1)
}




     return(
         
        <ContainerMainProjetos>

            <ContainerDivH3Projetos >
                <TextH3Projetos>Projetos.</TextH3Projetos>
            </ContainerDivH3Projetos>
        

            <ContainerCardsProjetos>
                
               
                    {projetosRealizados.map((p)=>{
                        return(
                                <Cards  key={p.id}>
                                   
                                    <DivImgProjeto>
                                        <ImgCarrocel src={p.foto} />
                                     </DivImgProjeto>
                                       

                                     <ContianerProjetos>

                                         <DivNomeProjeto>
                                         <a target="_blank" href={p.linkSite}> <TextNomeProjeto>{p.nome}</TextNomeProjeto> </a>     
                                         </DivNomeProjeto>

                                        <DivTextDetalhesProjeto>

                                             <TextDetalheProjeto>{p.detalhes} </TextDetalheProjeto> 

                                         </DivTextDetalhesProjeto>

                                         <DivTextGitHubProjeto>
                                               <a target="_blank" href={p.gitHub}> <ImgGitHub src={githubicon} alt="icon github" /></a> 
                                             
                                         </DivTextGitHubProjeto>
                                            
                                    </ContianerProjetos>
  
                                </Cards>
                        ) 
                    })}
            
                
                                                   
            </ContainerCardsProjetos>   

        </ContainerMainProjetos>
     )

        
            
       
    

}
export default ProjetosTst;