import { createGlobalStyle, keyframes } from 'styled-components'

const colourFade = keyframes`
  0% {
    border-color: #ec6060;
  }
  50% {
    border-color: #5e4585;
  }
  100% {
    border-color: #80cfd6;
  }
`

export default createGlobalStyle`
  body {
    position: relative;
  }
  
  body::before {
    position: fixed;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: 5;
    border-right: 12px solid #ec6060;
    animation: ${colourFade} 12s linear infinite alternate; 

    @media screen and (max-width: 650px) {
      border-right: 8px solid #ec6060;
    }
  }
`
