import styled from 'styled-components';

import { device } from '../../styles/themes/default';

export const SuccessWrapper = styled.main`
  width: 100%;
  margin-top: 40px;
  div#title {
    margin-bottom: 40px;

    h1 {
      font-family: "Baloo 2";
      font-size: 28px;
      font-weight: 800;
      color: ${(props) => props.theme.yellowDark};
      line-height: 100%;
      margin-bottom: 4px;
    }
    span {
      color: ${(props) => props.theme.baseSubtitle};
      font-size: 18px;
    }
    @media only screen and (${device.laptop}) {
      h1 {
        font-size: 32px;
      }
      span {
        font-size: 20px;
      }
    }
  }

  div#content {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`;

export const SuccessContentContainerBorder = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
  padding: 1px;
  border-radius: 6px 44px;
`;

export const SuccessContentContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 6px 44px;
  padding: 20px;

  @media only screen and (${device.laptop}) {
    padding: 40px;
  }
`;

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  div {
    display: flex;
    align-items: start;
    gap: 12px;
    div {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }
  }
`;

interface CircleWithImgProps {
  color: "darkYellow" | "yellow" | "gray" | "purple";
}

export const CircleWithImg = styled.div<CircleWithImgProps>`
  display: flex;
  flex-grow: 0;
  height: fit-content;
  width: fit-content;
  align-items: center;
  justify-content: center;
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
