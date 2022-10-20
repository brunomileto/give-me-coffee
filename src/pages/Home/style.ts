import styled from "styled-components";

import backgroundImage from "../../assets/Background.png";

export const HomeContainer = styled.main`
  overflow: visible;
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;

  padding-top: 94px;
  overflow: visible;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-family: "Baloo 2";
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme.baseTitle};
  }
  span {
    font-size: 20px;
    color: ${(props) => props.theme.baseSubtitle};
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
`;

const ITEM_COLOR = {
  orange: "yellowDark",
  yellow: "yellow",
  gray: "baseText",
  blue: "purple",
} as const;

interface ItemContainerProps {
  itemColor: keyof typeof ITEM_COLOR;
}

export const ItemContainer = styled.div<ItemContainerProps>`
  display: flex;
  align-items: center;

  gap: 12px;
  div {
    display: flex;
    border-radius: 9999px;
    padding: 8px;
    background-color: ${(props) => props.theme[ITEM_COLOR[props.itemColor]]};
  }
`;

export const ProductsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
`;
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 40px;
`;
