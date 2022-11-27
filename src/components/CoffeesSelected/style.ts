import styled from 'styled-components';

import { device } from '../../styles/themes/default';

export const SelectedCoffee = styled.div`
  display: flex;
  padding: 24px 0;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.baseButton};

  img {
    width: 44px;
    margin-right: 20px;

    @media only screen and (${device.laptop}) {
      width: 3.5vw;
    }
  }

  div:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 8px;

    span:first-of-type {
      font-size: 16px;
      color: ${(props) => props.theme.baseSubtitle};
    }

    div:first-of-type {
      display: flex;
      flex-direction: row;
      gap: 8px;

      span {
        font-size: 16px;
        color: ${(props) => props.theme.baseTitle};
      }

      button {
        border: none;
        background-color: transparent;
        display: flex;
        color: ${(props) => props.theme.purple};
      }

      div,
      button#btnRemoveItem {
        color: ${(props) => props.theme.purple};
        border: none;
        padding: 8px;
        background-color: ${(props) => props.theme.baseButton};
        display: flex;
        align-items: center;
        gap: 4px;
        border-radius: 6px;
      }

      button#btnRemoveItem {
        span {
          font-size: 12px;
          color: ${(props) => props.theme.baseText};
        }
      }
    }
  }

  div#itemValue {
    height: 100%;
    margin-left: auto;
    span {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
