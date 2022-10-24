import { createGlobalStyle } from 'styled-components';

import backgroundImage from '../assets/Background.png';
import { device } from './themes/default';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.baseHover};
  }

  html{
    width: 100vw;
    overflow-x: hidden;
  }

  body{
    /* background-image: url(${backgroundImage});
    background-repeat:no-repeat;
    background-size: contain; */
    background: ${(props) => props.theme.background};
    padding: 0 30px 30px 30px;
    -webkit-font-smoothing: antiliased;
    width: 100%;
    
    @media only screen and (${device.tablet}) {
      padding: 0 80px 80px 80px;
    }
    @media only screen and (${device.laptop}) {
      padding: 0 160px 80px 160px;
    }
  }

  body, input, textarea, button{
    color: ${(props) => props.theme.baseText};
    font-family:'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
