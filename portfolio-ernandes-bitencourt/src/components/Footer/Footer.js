import React from "react";


import {ContainerFooter,DivText,Divimg,Img,P  } from "./StyledFooter"

export const Footer = () =>{

    return(
        
        <ContainerFooter>
            <DivText>
                <P> © 2022 ernandes.com</P> 
            </DivText>
            {/* <Divimg>
                <Img  src={ImgFooter} alt="Imagem logo"/>
            </Divimg> */}
        </ContainerFooter>
    )
}