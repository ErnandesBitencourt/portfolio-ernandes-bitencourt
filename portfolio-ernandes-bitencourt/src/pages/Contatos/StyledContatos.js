import styled from "styled-components"

export const ContainerMainContatos = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    width: 1000px;
    height: 100%;
    background-color:  #080713;
    
    

   
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    width: 85%;
    padding-bottom: 20px;
         
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        width: 85%;   
        
    };
    

`
export const ContainerDivH3Contatos = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: left;
    align-items: center; 
    border: none;
    border-radius: 13px;

    
`
export const TextH2Contatos = styled.h2`
     font-size: 1.8rem;
     color:   #e5e5e5;
    font-weight: 700;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    font-size: 1.2rem
    
         
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 1.5rem;
        
    };

`
export const ContainerIcons =styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        a{
            text-decoration: none;
        }
    img{
        
        width: 50px;
        height: 50px;
        :hover{
            background-color:#e5e5e5 ;
            border: none;
            border-radius: 50%;
        }

        @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
        width: 30px;
        height: 30px;
    
         
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        
        width: 45px;
        height: 45px;
    };
    }

`



export const ContainerForm = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content:space-around ;
    align-items: center;
    width: 400px;
    height: 90%;
    margin-top: 30px;
   
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
     width: 95%;
     padding-bottom: 20px;
    
         
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        
        
    };
 

`

export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 85%;
    gap: 5px;

   
 
    
`
export const FormNomeEmailDiv = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: left;
    width: 100%;
    height: 9vh;

   
    
`
export const DivAssunto = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 25%;
    height: 10%;
    background-color: #080713;
    position: relative;
    top: 3px;
    left: 5px;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    position: relative;
    left: 17px;
    
         
    };
    
`
export const DivAssunto2 = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 27%;
    height: 10%;
    background-color: #080713;
    border-radius: 20px;
    position: relative;
    top: 5px;
    left: 10px;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    position: relative;
    left: 20px;
    top: 5px;
    
         
    };
    
`

export const LabelText = styled.label`  
    font-size: 1rem;
    color: #909090;
    background: none;
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
    font-size: 0.8rem;
    
         
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
        font-size: 0.9rem;   
        
    };
     
`


export const DivInputNome = styled.div`

    width: 100%;
    height: 70%;
    

`

export const InputNome = styled.input`
       
    font-size: 0.9rem;
   
    background:none;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    color: #909090;
    font-weight: 700;
    border: solid 2px #380060; 
    
   
    
   
    :focus {
       outline: none;
    }

    
`



export const ContaineFormMensagemButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 38%;
    height: 100%;
    

`
export const ContainerMenssagemTexArea = styled.div`

    width: 100%;
    height: 15vh;
   

`

export const ContainerInputMensagem = styled.div`
    width: 100%;
    height: 70%;
    
    
`
export const Textarea = styled.textarea`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    font-size: 1rem;
    color: #909090;
    font-weight: 700;
    text-align: left;
    border: solid 2px #380060;
    padding-top: 5px;
    background: none;
    :focus{
        outline: none;
    }
`
export const ContainerButton = styled.div`
     width: 100%;
     height: 11vh;
     display: flex;
     justify-content: center;
     align-items: center;
     
`

export const Button = styled.button`
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: none;
    cursor: pointer;
    border: solid 3px #380060;
    border-radius: 20px;
    color: #909090;

    :hover{ 
        background-color: #380060;
        color: white;
        border: none;
    }

`




