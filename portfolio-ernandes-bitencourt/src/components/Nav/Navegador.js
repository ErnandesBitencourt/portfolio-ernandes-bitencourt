import React, { useRef, useState } from "react";
import LogoHeader1 from "../../img/imgLogos/LogoHeader1.png"
import { ContainerImgLogoHeader, ContainerNavHeader, HamburgeContaine1, ImgLogoHeader, TextIlSobreMim, UlNavHeader } from "./StyledNavegador";
export const Navegador = () => {
    const [ativadoRes, setAtivadoRes] = useState(false)

    const habilidades = useRef()
    const projetos = useRef()
    const contatos = useRef()
    // const formacao= useRef()
    const sobreMim = useRef()

    const executeScrollSections = (props) => {
        window.scrollTo({ behavior: 'smooth', top: props.current.offsetTop })
    }   

    const hamburgeMenu = ()=>{
        setAtivadoRes(!ativadoRes)
      
    }
    return (
        <ContainerNavHeader >
        <ContainerImgLogoHeader>
             <ImgLogoHeader src={LogoHeader1} alt="Foto do logo" />
        </ContainerImgLogoHeader>

        

        <UlNavHeader ativadoRes={ativadoRes} >
            <TextIlSobreMim onClick={()=> executeScrollSections(sobreMim )} ><span onClick={()=>{hamburgeMenu()}} >Quem sou</span></TextIlSobreMim>
            <TextIlSobreMim onClick={()=> executeScrollSections(habilidades)}> <span onClick={()=>{hamburgeMenu()}} > Habilidades</span></TextIlSobreMim>
            <TextIlSobreMim onClick={()=> executeScrollSections(projetos)} > <span onClick={()=>{hamburgeMenu()}} >Projetos</span> </TextIlSobreMim>
            <TextIlSobreMim onClick={()=> executeScrollSections(contatos)} > <span onClick={()=>{hamburgeMenu()}} >Contatos</span> </TextIlSobreMim>
            {/* <TextIlSobreMim onClick={()=> executeScrollFormacao()} >Formação</TextIlSobreMim> */}
        </UlNavHeader>

        <HamburgeContaine1 ativadoRes2={ativadoRes} onClick={()=>{hamburgeMenu()}}>

            <span ativadoRes2={ativadoRes}></span>
            <span ativadoRes2={ativadoRes} ></span>
            <span ativadoRes2={ativadoRes}></span>

            {/* <img  src={Hamburgermenu} alt="Img Menu"/> */}
        </HamburgeContaine1>
    </ContainerNavHeader>

    )


}