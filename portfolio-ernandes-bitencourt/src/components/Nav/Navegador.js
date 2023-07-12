import React, { useState } from "react";
import logolilas from "../../img/imgLogos/logolilas.png"
import { ButtonCurriculo, ContainerImgLogoHeader, ContainerNavHeader, HamburgeContaine1, ImgLogoHeader, TextIlSobreMim, UlNavHeader } from "./StyledNavegador";


import download from "../../img/imgDownload/download.png"
import { Link } from "react-router-dom";
import Curriculoernandes from "../../curriculo/Curriculoernandes.pdf"
export const Navegador = ({habilidades,projetos,contatos,sobreMim}) => {
    const [ativadoRes, setAtivadoRes] = useState(false)
    const executeScrollSections = (props) => {
        window.scrollTo({ behavior: 'smooth', top: props.current.offsetTop })
    } ; 

    const hamburgeMenu = ()=>{
        setAtivadoRes(!ativadoRes)
      
    };
    
    
    return (
        <ContainerNavHeader >
        <ContainerImgLogoHeader>
             <ImgLogoHeader src={logolilas} alt="Foto do logo" />
        </ContainerImgLogoHeader>
        <UlNavHeader ativadores={ativadoRes} >
            <TextIlSobreMim onClick={()=> executeScrollSections(sobreMim )} ><span onClick={()=>{hamburgeMenu()}} >Quem sou</span></TextIlSobreMim>
            <TextIlSobreMim onClick={()=> executeScrollSections(habilidades)}> <span onClick={()=>{hamburgeMenu()}} > Habilidades</span></TextIlSobreMim>
            <TextIlSobreMim onClick={()=> executeScrollSections(projetos)} > <span onClick={()=>{hamburgeMenu()}} >Projetos</span> </TextIlSobreMim>
            <TextIlSobreMim onClick={()=> executeScrollSections(contatos)} > <span onClick={()=>{hamburgeMenu()}} >Contatos</span> </TextIlSobreMim>
         <Link style={{textDecoration: 'none'}} to={Curriculoernandes} target="_blank" download >   <ButtonCurriculo > <p>Currículo</p><img src={download} alt="imagem download" /></ButtonCurriculo></Link>
           
        </UlNavHeader>

        <HamburgeContaine1 ativadores2={ativadoRes} onClick={()=>{hamburgeMenu()}}>

            <span ativadores2={ativadoRes }></span>
            <span ativadores2={ativadoRes} ></span>
            <span ativadores2={ativadoRes}></span>

         
        </HamburgeContaine1>
    </ContainerNavHeader>

    )


}