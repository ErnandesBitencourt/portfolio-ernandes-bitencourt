import React from "react";
import { HomePage } from "../home/HomePage";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import GlobalStyle from "../styles/global";


export const Router = () =>{

    return (

        
            <BrowserRouter>
                 <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="*" element={"ERRO!"} />
                </Routes>
                <GlobalStyle/>  
            </BrowserRouter>
      
       
    )
}