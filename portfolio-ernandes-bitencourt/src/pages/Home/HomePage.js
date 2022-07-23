import React from "react";
import { useEffect,useState } from "react";
import { ContainerGeral,ContianerButtomTop,ContainerHeader,ContainerNavHeader,ImgLogoHeader,UlNavHeader,TextIlSobreMim,ContainerGeralProjetos,ContainerGeralMainSobreMim,ContainerGeralSkill,ContainerGeralContatos,ContainerGeralFooter,ContainerImgLogoHeader,SubContainerGeral,ContainerGeralFormacao,ContainerGeralLoadingPage,HamburgeContaine1} from "./StyledHomePage";
import { useRef } from "react";
import {SobreMim} from "../SobreMim/SobreMim"
import {HabilidadesTst1} from "../Habilidades/HabilidadesTst"
import ProjetosTst from "../Projetos/ProjetosTest"
import {Contatos} from "../Contatos/Contatos"
import {Footer} from "../Footer/Footer"
import iconPraCima from "../img/imgLogos/iconPraCima.png"
import {LoadingPage} from "../loadingPage/LoadingPage"
import TelaDecarregamento from "../loadingPage/TelaDecarregamento"
import LogoHeader1 from "../img/imgLogos/LogoHeader1.png"


export  const HomePage = () => {
    const [loading , setLoading] = useState(false)
    const [ativadoRes, setAtivadoRes] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },3000 )
    },[])
    
    const hamburgeMenu = ()=>{
        setAtivadoRes(!ativadoRes)
      
    }

    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"

        })
    }  

    const habilidades = useRef()
    const projetos = useRef()
    const contatos = useRef()
    const formacao= useRef()
    const sobreMim = useRef()
    const executeScrollSections = (props) => {
        window.scrollTo({ behavior: 'smooth', top: props.current.offsetTop })
    }   


   


    return(
        <>
        { loading ? <TelaDecarregamento/> :
        <ContainerGeral >
            <ContainerHeader className="headerContainer">
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
            </ContainerHeader> 
            <ContianerButtomTop onClick={()=>scrollTop()}>
                <img src={iconPraCima} alt="Foto de voltar ao top" />
            </ContianerButtomTop>
             <ContainerGeralLoadingPage>
                <LoadingPage/>
             </ContainerGeralLoadingPage>
            <ContainerGeralMainSobreMim class="headline"  ref={sobreMim } >
                <SobreMim />  
            </ContainerGeralMainSobreMim>

            <ContainerGeralSkill ref={habilidades} >               
                <HabilidadesTst1 />
            </ContainerGeralSkill >             
            <ContainerGeralProjetos ref={projetos} id="projetos" >
                <ProjetosTst />
            </ContainerGeralProjetos>       
            <ContainerGeralContatos  ref={contatos} id="contatos"> 
                <Contatos />
            </ContainerGeralContatos>
                    
            {/* <ContainerGeralFormacao>
            <FormacaoEb/> 
            </ContainerGeralFormacao> */}

             <ContainerGeralFooter>
                <Footer/>
             </ContainerGeralFooter> 
            
           
          </ContainerGeral>
}
         </>
    )
}