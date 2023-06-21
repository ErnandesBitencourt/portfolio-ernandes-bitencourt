import React from "react";
import { useEffect,useState } from "react";
import { ContainerGeral,Img,ContianerButtomTop,ContainerHeader,ContainerGeralProjetos,ContainerGeralMainSobreMim,ContainerGeralSkill,ContainerGeralContatos,ContainerGeralFooter,ContainerGeralLoadingPage} from "./StyledHomePage";
import { useRef } from "react";
import {SobreMim} from "../components/SobreMim/SobreMim"
import {HabilidadesTst1} from "../components/Habilidades/HabilidadesTst"
import ProjetosTst from "../components/Projetos/ProjetosTest"
import {Contatos} from "../components/Contatos/Contatos"
import {Footer} from "../components/Footer/Footer"
import iconPraCima from "../img/imgLogos/iconPraCima.png"
import {LoadingPage} from "../components/loadingPage/LoadingPage"
import TelaDecarregamento from "../components/loadingPage/TelaDecarregamento"
import githubicon from "../img/imgContatos/githubicon.png"
import { Navegador } from "../components/Nav/Navegador";


export  const HomePage = () => {
    const [loading , setLoading] = useState(false)
   
    const [butoonTopOf,setButoonTopOf ]= useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },3000 )
       
    },[])

    useEffect(()=>{
        
        const butoonTopOf1 = () =>{
            window.scrollY > 70 ? setButoonTopOf(true) : setButoonTopOf(false)
        }
        window.addEventListener("scroll",butoonTopOf1);

        // return () =>{
        //     window.removeEventListener("scroll",butoonTopOf1)
        // }
    },[])

    const habilidades = useRef()
    const projetos = useRef()
    const contatos = useRef()
    // const formacao= useRef()
    const sobreMim = useRef()
 

    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"

        })
    }  
    const executeScrollSections = (props) => {
        window.scrollTo({ behavior: 'smooth', top: props.current.offsetTop })
    }   
  
   const url="https://github.com/ErnandesBitencourt"
   


    return(
        <>
        { loading ? <TelaDecarregamento/> :
        <ContainerGeral >
            <ContainerHeader className="headerContainer"> 
                <Navegador/>
            </ContainerHeader> 
            
            <ContianerButtomTop  butoonTopOf={butoonTopOf} onClick={()=>scrollTop()}>
                <img src={iconPraCima} alt="Foto de voltar ao top" />
            </ContianerButtomTop>
             <ContainerGeralLoadingPage>
                <LoadingPage/>
             </ContainerGeralLoadingPage>


            <ContainerGeralMainSobreMim class="headline"  ref={sobreMim } >
                <SobreMim/>  
            </ContainerGeralMainSobreMim>

            <ContainerGeralSkill ref={habilidades} >               
                <HabilidadesTst1 />
            </ContainerGeralSkill >             
            <ContainerGeralProjetos ref={projetos} id="projetos" >
                <ProjetosTst />
                <a target="_blank" href="https://github.com/ErnandesBitencourt">  <Img src={githubicon}/></a>
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