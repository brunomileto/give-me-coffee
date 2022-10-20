import styled from "styled-components";

export const ProductContainer = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 0 20px 20px 20px;
  background-color: ${(props) => props.theme.baseCard};

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  h1 {
    font-family: "Baloo 2";
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  img {
    margin-top: -20px;
  }
`;

export const ProductDescription = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme.baseLabel};
`;

export const ProductFooter = styled.div`
  margin-top: 33px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
`;

export const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 6px;

    padding: 8px;

    background-color: ${(props) => props.theme.baseButton};
    button {
      border: 0px;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;

export const CartContainer = styled.button`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border: 0px;
  border-radius: 6px;
  cursor: pointer;

  background-color: ${(props) => props.theme.purpleDark} !important;
  color: ${(props) => props.theme.white};
`;

export const ProductValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  span {
    font-size: 14px;
  }

  h2 {
    font-family: "Baloo 2";
    font-size: 24px;
  }
`;
