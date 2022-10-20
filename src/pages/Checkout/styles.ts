import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const FullFillRequestContainer = styled.div`
  max-width: 640px;
  flex-grow: 1;
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 15px;

  & > div:first-of-type,
  & > div:last-of-type {
  }
  & > h1:first-of-type {
    font-family: "Baloo 2";
    font-size: 18px;
    color: ${(props) => props.theme.baseSubtitle};
    font-weight: bold;
  }

  header {
    display: flex;
    align-items: stretch;
    gap: 8px;
    h1 {
      font-size: 16px;
      font-weight: bold;
      line-height: 130%;
    }
    span {
      font-size: 14px;
      font-weight: normal;
      line-height: 130%;
    }
  }
`;

const FullFillRequestChildBaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  border-radius: 6px;
  padding: 40px;
  background-color: ${(props) => props.theme.baseCard};
`;

export const AddressContainer = styled(FullFillRequestChildBaseContainer)`
  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    div {
      display: flex;
      flex-direction: row;
      gap: 12px;
    }
  }
`;

export const BasicInput = styled.input`
  width: 200px;
  padding: 12px;
  border: 1px;
  border-color: ${(props) => props.theme.baseButton};
  background-color: ${(props) => props.theme.baseInput};
  border-radius: 6px;
  color: ${(props) => props.theme.baseLabel};
`;

export const ShortInput = styled(BasicInput)`
  width: 60px;
`;

export const LongInput = styled(BasicInput)`
  width: 100%;
`;

export const PaymentContainer = styled(FullFillRequestChildBaseContainer)`
  :focus {
    border: 0px;
    border-color: transparent;
    outline: none;
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    border-color: transparent;
    :focus {
      border: 0px;
      border-color: transparent;
      outline: none;
    }
  }

  div > div {
    width: 100%;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    :focus {
      border: 0px;
      border-color: transparent;
      outline: none;
    }

    label {
      :active,
      :checked,
      :focus {
        border: 0px;
        border-color: transparent;
        outline: none;
      }
      border-color: red;
      border-radius: 6px;
      border: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 12px;
      padding-left: 12px;
      background: ${(props) => props.theme.baseButton};
    }
  }
`;

export const RadioButton = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 2px solid transparent;
  :hover {
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.baseHover};
  }
  :checked {
    border: 2px solid ${(props) => props.theme.purple};
  }
`;

export const SelectedCoffeesContainer = styled.div`
  width: fit-content;
  background-color: red;
`;
