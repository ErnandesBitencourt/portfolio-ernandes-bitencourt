import React from "react";
import {ContainerSegundarios,ContainerGeralLog ,ImgLogo,ContainerImgLogo, Container,ContainerName,NomeH3,NomeHello,ContainerHello,Textp, IconGmail,IconLinkidin,IconGitHub,ContainerHeader,ContaineFooter,ContainerButon,HoverButton,ALinkding ,AGmail,FooterAnimetion,ContainerIm,TextIm,ContainerTextp,ButtonEfect,ContainerLogo2} from "./StyledLoadingPage"
import { Link } from "react-router-dom";
import linkedininicon from "../../img/imgContatos/linkedininicon.png"
import githubicon from "../../img/imgContatos/githubicon.png"
import logoscreen from "../../img/imgLogos/logoscreen.gif"
// import curriculoErnandesBitencourt from "../../curriculo/curriculoErnandesBitencourt.pdf"

export const linkStyle = {
        
    textDecoration: "none",
    background:"#380060",
    color: '#e5e5e5'
  };

export const LoadingPage = () => {
    

    
    return (
        <ContainerGeralLog >

 
            <Container> 
                <ContainerSegundarios>
                    <ContainerHeader >
                    
                        <ContainerHello>
                            <NomeHello> Olá!</NomeHello>
                        </ContainerHello>
                        <ContainerIm>
                            <TextIm> eu sou  </TextIm>
                        </ContainerIm>
                        <ContainerName>
                            <NomeH3>Ernandes Bitencourt</NomeH3> 
                        </ContainerName>
                    
                    </ContainerHeader>


                     <ContainerTextp>
                          <Textp>  Desenvolvedor Front-End.</Textp>
                     </ContainerTextp>


                     {/* <ContainerButon>
                        <ButtonEfect>   */}
                      

                        {/* <HoverButton> <Link style={linkStyle} to={curriculoErnandesBitencourt} target="_blank" download>  Currículo  </Link></HoverButton> */}
                        {/* </ButtonEfect>
                    </ContainerButon> */}

                    
                    <ContaineFooter>
                        <FooterAnimetion>
                            
                            <ALinkding target="_blank" href="https://github.com/ErnandesBitencourt" >
                                <IconGitHub alt="Github" src={githubicon}/>
                             </ALinkding>
                            
                                
                             <AGmail target="_blank" href="https://www.linkedin.com/in/ernandes-bitencourt" > 
                                 <IconLinkidin alt="LinkedIn" src={linkedininicon} />
                             </AGmail>
         
                                {/* <a target="_blank" href="mailto:ernandes.f.bitencourt@gmail.com" >  <IconGmail  alt="Email" src={gmailLogo} />
                                    </a> */}
                            
                        </FooterAnimetion>   
                        
                    </ContaineFooter>
                 </ContainerSegundarios>
            </Container>
                
                
             <ContainerLogo2>
                 <ContainerImgLogo>
                    <ImgLogo src={logoscreen} alt="Logo"/>
                 </ContainerImgLogo>
             </ContainerLogo2>
                    
                
                
            
           
        </ContainerGeralLog>
    )
}