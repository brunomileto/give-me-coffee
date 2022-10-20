import { createGlobalStyle } from "styled-components";

import backgroundImage from "../assets/Background.png";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.baseHover};
  }

  body{
    background: ${(props) => props.theme.background};
      
    /* background-image: url(${backgroundImage});
    background-repeat:no-repeat;
    background-size: contain; */
    -webkit-font-smoothing: antiliased;
  }

  body, input, textarea, button{
    color: ${(props) => props.theme.baseText};
    font-family:'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
