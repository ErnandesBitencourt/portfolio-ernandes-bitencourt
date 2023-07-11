import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.corFundo};


    
	-webkit-animation: fade-out 2s ease-out 1s both;
	        animation: fade-out 2s ease-out 1s both;


@-webkit-keyframes fade-out {
  0% {
    opacity: 5;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-out {
  0% {
    opacity: 5;
  }
  100% {
    opacity: 0;
  }
}

`

export const LogoPretoImg = styled.img`

    width: 50%;
    max-width: 20%;
    height: 35%;

    @media screen and (min-device-width : 100px) and (max-device-width : 600px) {
    /* celulares */
      width: 30vw;
      max-width: 30%;
      height: 20vh;
    };
    @media screen and (min-device-width : 600px) and (max-device-width : 1000px) {
        /* tablets */
       
        width: 25%;
        height: 25%;
    };

`
