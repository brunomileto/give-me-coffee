import styled from 'styled-components';

import { device } from '../../styles/themes/default';

export const HeroWrapper = styled.main`
  padding: 46px 0 46px 0;
  display: flex;
  align-items: top;
  gap: 25px;
  @media only screen and (${device.laptopL}) {
    gap: 30px;
  }
`;

export const HeroImg = styled.img`
  display: none;
  @media only screen and (${device.laptop}) {
    margin-top: 30px;
    display: block;
    width: 300px;
    height: 200px;
  }
  @media only screen and (${device.laptopL}) {
    margin-top: 0px;
    width: 476px;
    height: 360px;
  }
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media only screen and (${device.tablet}) {
    gap: 66px;
  }
`;

export const HeroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  h1 {
    font-family: "Baloo 2";
    font-size: 42px;
    line-height: 130%;
    color: ${(props) => props.theme.baseTitle};
    @media only screen and (${device.laptopL}) {
      font-size: 48px;
    }
  }

  h3 {
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme.baseSubtitle};
  }
`;

export const HeroContentItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (${device.laptop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
  } ;
`;

interface CircleWithImgProps {
  color: "darkYellow" | "yellow" | "gray" | "purple";
}

export const CircleWithImg = styled.div<CircleWithImgProps>`
  display: flex;
  padding: 8px;
  color: white;
  background-color: ${(props) =>
    props.color === "darkYellow"
      ? props.theme.yellowDark
      : props.color === "yellow"
      ? props.theme.yellow
      : props.color === "gray"
      ? props.theme.baseText
      : props.theme.purple};
  border-radius: 999px;
`;

export const HeroContentItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  color: ${(props) => props.theme.baseText};
`;

export const CoffeesWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 40px;
  flex-direction: column;
  h1 {
    font-family: "Baloo 2";
    font-size: 32px;
    color: ${(props) => props.theme.baseSubtitle};
  }
`;

export const CoffeesItems = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: start;
  overflow-x: hidden;
  flex-wrap: wrap;
  gap: 40px 32px;
`;

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

  div {
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

export const CoffeBuyButton = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: 8px;
  padding: 8px;
  border-radius: 6px;
  color: ${(props) => props.theme.baseCard};
  background-color: ${(props) => props.theme.purpleDark};
`;
