import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5EEDF;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  * {
    font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Thin"),
    url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoT.woff) format("woff");
    font-weight: 100;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Ultra Light"),
    url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoUL.woff) format("woff");
    font-weight: 200;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Light"),
    url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoL.woff) format("woff");
    font-weight: 300;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Regular"),
    url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoR.woff) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Medium"),
    url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.woff) format("woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Semi Bold"),
    url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoSB.woff) format("woff");
    font-weight: 600;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Bold"),
    url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoB.woff) format("woff");
    font-weight: 700;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Extra Bold"),
    url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoEB.woff) format("woff");
    font-weight: 800;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Heavy"),
    url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoH.woff) format("woff");
    font-weight: 900;
  }

`;

export default GlobalStyle;
