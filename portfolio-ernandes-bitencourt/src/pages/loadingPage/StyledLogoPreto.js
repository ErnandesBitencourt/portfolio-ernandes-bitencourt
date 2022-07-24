import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  
    background-color: #080713;

    
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

    width: 20vw;
    height: 25vh;

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
      width: 30vw;
      height: 20vh;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
       
        width: 18vw;
        height: 23vh;
    };

`