import React from "react";
import {ContainerMainContatos,LabelText, ContainerDivH3Contatos,TextH2Contatos,ContainerForm,Forms,FormNomeEmailDiv,InputNome, DivAssunto,ContainerInputMensagem,Textarea,ContainerButton,Button,DivInputNome,ContainerMenssagemTexArea,DivAssunto2,ContainerIcons} from "./StyledContatos"

import linkedininicon from "../../img/imgContatos/linkedininicon.png"
import githubicon from "../../img/imgContatos/githubicon.png"





export const Contatos = () => {

    return(
        <ContainerMainContatos >
            <ContainerDivH3Contatos>
                <TextH2Contatos>Contatos.</TextH2Contatos>
            </ContainerDivH3Contatos>

           
              

                <ContainerForm> 
                    
                    <Forms action="https://formsubmit.co/ernandes.f.bitencourt@gmail.com" method="POST">
                    
                    
                            
                                <FormNomeEmailDiv>

                                    <DivAssunto>
                                        <LabelText>Nome</LabelText>
                                    </DivAssunto>

                                    <DivInputNome>
                                     <InputNome type="text" name="Nome" required/>  
                                    </DivInputNome>
                                             
                                </FormNomeEmailDiv>

                                <FormNomeEmailDiv>
                                <DivAssunto>
                                    <LabelText>Email</LabelText>
                                </DivAssunto>
                                <DivInputNome>
                                <InputNome type="email" name="Email" required/> 
                                </DivInputNome>
      
                                </FormNomeEmailDiv>

                                <FormNomeEmailDiv>
                                    <DivAssunto>
                                        <LabelText>Assunto</LabelText>
                                    </DivAssunto>

                                    <DivInputNome>
                                        <InputNome  type="text" name="Assunto" required/>  
                                    </DivInputNome>

                                </FormNomeEmailDiv>

                                <ContainerMenssagemTexArea>
                                    <DivAssunto2 >
                                        <LabelText>Mensagem</LabelText>
                                    </DivAssunto2>
                                
                                    <ContainerInputMensagem>
                                        <Textarea  name="Mensagem"  required/> 
                                    </ContainerInputMensagem>
                                </ContainerMenssagemTexArea>

                                    <ContainerButton >
                                        <Button type="submit">Enviar</Button>
                                    </ContainerButton> 

                        {/* alto resposta, voltar a pagina */}
                    
                        <input type="hidden" name="_next" value="http://localhost:3000/HomePage"/>
                        
                        </Forms>

                        <ContainerIcons>
                                <a target="_blank" href="https://www.linkedin.com/in/ernandes-bitencourt"  > <img  src={linkedininicon} alt="imagem linkedin"/></a> 
                                
                                
                                <a target="_blank" href="https://github.com/ErnandesBitencourt" ><img src={githubicon} alt=" imagem github"/></a>

                        </ContainerIcons>
                </ContainerForm>

                    
            
          </ContainerMainContatos> 

            )
}