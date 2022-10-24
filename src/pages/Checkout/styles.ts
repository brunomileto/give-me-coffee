import { IconProps } from 'phosphor-react';
import styled from 'styled-components';

import { device } from '../../styles/themes/default';

export const CheckoutWrapper = styled.main``;

export const FormInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media only screen and (${device.laptop}) {
    width: 58.8%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  h1 {
    font-size: 18px;
    font-family: "Baloo 2";
  }

  @media only screen and (${device.laptop}) {
    flex-direction: row;
  }

  @media only screen and (${device.laptopL}) {
    gap: 32px;
  }
`;

interface FormHeaderProps {
  iconColor: "yellow" | "purple";
}

export const FormHeaderWrapper = styled.div<FormHeaderProps>`
  display: flex;
  align-items: stretch;
  gap: 8px;
  margin-bottom: 16px;

  color: ${(props) =>
    props.iconColor === "yellow" ? props.theme.yellowDark : props.theme.purple};

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    span {
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme.baseText};
    }
    span:first-of-type {
      font-size: 16px;
      color: ${(props) => props.theme.baseSubtitle};
    }
  }
`;
export const FormInputs = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 16px;
  padding: 20px;

  input {
    border-style: solid;
    border-radius: 4px;
    padding: 12px;
    background-color: ${(props) => props.theme.baseInput};
    border-right-color: ${(props) => props.theme.baseButton};
    border-top-color: ${(props) => props.theme.baseButton};
    border-bottom-color: ${(props) => props.theme.baseButton};
    border-left-color: ${(props) => props.theme.baseButton};
    border-width: 1px;
    outline: none;
    outline-color: transparent;
    color: ${(props) => props.theme.baseText};
    text-decoration-color: transparent;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.baseLabel};
    }
  }

  input#cep {
    width: 50%;
  }

  div#numberComplement {
    display: flex;
    gap: 12px;
    input {
      width: 100%;
    }

    input#addressNumber {
      width: 40%;
    }
  }

  div#cityState {
    display: flex;
    gap: 12px;
    justify-content: baseline;
    input {
      width: 100%;
    }

    input#neigborhood {
      width: 58%;
    }

    input#state {
      width: 30%;
    }
  }

  @media only screen and (${device.laptopL}) {
    padding: 40px;
  }
`;

export const FormPaymentTypeWrapper = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;
  padding: 20px;

  div#selectPaymentType {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    div {
      label {
        border-radius: 6px;
        padding: 16px;
        font-size: 12px;
        color: ${(props) => props.theme.purple};
        background-color: ${(props) => props.theme.baseButton};
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        border-width: 2px;
        border-color: transparent;
        border-style: solid;
        color: ${(props) => props.theme.purple};
        span {
          color: ${(props) => props.theme.baseText};
        }
      }
      input {
        display: none;
        :checked + label {
          background-color: ${(props) => props.theme.purpleLight};
          border-color: ${(props) => props.theme.purple};
        }
      }
    }

    @media only screen and (min-width: 1280px) {
      flex-direction: row;
      div {
        width: 100%;
        word-break: keep-all;
        label {
          padding: 16px 8px;
        }
      }
    }

    @media only screen and (${device.laptopL}) {
      div {
        label {
          padding: 16px;
        }
      }
    }
  }

  @media only screen and (${device.laptopL}) {
    padding: 40px;
  }
`;

export const SelectedCoffeeWrapper = styled.div`
  h1 {
    font-size: 18px;
    margin-bottom: 12px;
    font-family: "Baloo 2";
  }

  @media only screen and (${device.laptop}) {
    width: 41.2%;
  }
`;

export const SelectedCoffeeContainer = styled.div`
  border-radius: 6px 44px;
  padding: 0 20px 20px 20px;
  /* border-radius: 6px; */

  background-color: ${(props) => props.theme.baseCard};

  @media only screen and (${device.laptopL}) {
    padding: 0 40px 40px 40px;
  }
`;

export const SelectedCoffeesList = styled.div`
  display: flex;
  flex-direction: column;
`;

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

export const SelectedCoffeesValues = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 16px;
      color: ${(props) => props.theme.baseSubtitle};
    }
  }

  div#total {
    span {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export const SubmitButton = styled.button`
  margin-top: 24px;
  border-width: 0px;
  width: 100%;
  padding: 12px 0;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  color: white;
  font-weight: 700;
  font-size: 14px;
`;
