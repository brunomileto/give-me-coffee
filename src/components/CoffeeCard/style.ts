import styled from 'styled-components';

import { device } from '../../styles/themes/default';

export const CoffeeItem = styled.div`
  border-radius: 6px 36px 6px 36px;
  width: 256px;
  background-color: ${(props) => props.theme.baseCard};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 20px 20px 20px;
  text-align: center;

  img {
    margin-top: -20px;
    margin-bottom: 12px;
    width: 120px;
    height: 120px;
  }

  h1 {
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 20px;
    font-family: "Baloo 2";
    color: ${(props) => props.theme.baseSubtitle};
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.baseLabel};
  }
`;

export const CoffeeType = styled.div`
  background-color: ${(props) => props.theme.yellowLight};
  padding: 4px 8px;
  border-radius: 100px;
  span {
    font-size: 10px;
    font-weight: 900;
    color: ${(props) => props.theme.yellowDark};
  }
`;
export const BuyCoffeeWrapper = styled.div`
  margin-top: 33px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 4px;
`;

export const CoffeValueWrapper = styled.div`
  span:first-of-type {
    font-size: 14px;
    font-weight: 400;
    font-family: "Roboto";
    color: ${(props) => props.theme.baseText};
  }
  span {
    font-size: 24px;
    font-weight: 800;
    font-family: "Baloo 2";
  }
`;

export const CoffeQuantityWrapper = styled.div`
  margin-left: 23px;
  padding: 8px;
  background-color: ${(props) => props.theme.baseButton};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-size: 16px;
  border-radius: 6px;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 16px;
    height: 100%;
    display: flex;
    color: ${(props) => props.theme.purple};
  }
  span {
    color: ${(props) => props.theme.baseTitle};
  }
`;

export const CoffeBuyButton = styled.button`
  cursor: pointer;
  display: flex;
  margin-left: 8px;
  padding: 8px;
  border-radius: 6px;
  color: ${(props) => props.theme.baseCard};
  background-color: ${(props) => props.theme.purpleDark};
  :disabled {
    cursor: auto;
    opacity: 60%;
  }
`;
