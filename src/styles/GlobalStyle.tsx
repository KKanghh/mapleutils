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

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo Regular"),
    url(/fonts/AppleSDGothicNeo/AppleSDGothicNeoR.woff) format("woff");
    font-weight: 400;
  }

  * {
    font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  }
`;

export default GlobalStyle;
