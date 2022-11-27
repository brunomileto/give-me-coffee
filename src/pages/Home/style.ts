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
  align-items: center;
  h1 {
    font-family: "Baloo 2";
    width: 100%;
    font-size: 32px;
    color: ${(props) => props.theme.baseSubtitle};
  }
`;

export const CoffeesItems = styled.div`
  padding-top: 20px;
  width: fit-content;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  flex-wrap: wrap;
  gap: 40px 32px;

  @media only screen and (${device.laptopL}) {
    justify-content: start;
  }
`;
