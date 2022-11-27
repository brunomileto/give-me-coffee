import {
    Bank, CreditCard, CurrencyDollar, IconProps, MapPinLine, Minus, Money, Plus, Trash
} from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';

import { SelectedCoffeesContext } from '../../App';
import { Product } from '../../coffeesData';
import { CoffeesSelected } from '../../components/CoffeesSelected';
import {
    CheckoutWrapper, Form, FormHeaderWrapper, FormInputs, FormInputsWrapper, FormPaymentTypeWrapper,
    SelectedCoffeeContainer, SelectedCoffeesList, SelectedCoffeesValues, SelectedCoffeeWrapper,
    SubmitButton
} from './styles';

interface FormHeaderProps {
  title: string;
  subTitle: string;
  imgColor: "yellow" | "purple";
  ImgComponent: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}

const FormHeader = ({ title, subTitle, ImgComponent, imgColor }: FormHeaderProps) => {
  return (
    <FormHeaderWrapper id={`formHeader${title.replace(" ", "")}`} iconColor={imgColor}>
      <ImgComponent size={22} />
      <div>
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
    </FormHeaderWrapper>
  );
};

export const Checkout = () => {
  const { coffees } = useContext(SelectedCoffeesContext);
  const [totalItemsValue, setTotalItemsValue] = useState<number>(0);

  const cartIsEmpty = coffees.filter((coffee) => coffee.isSelected === true).length === 0;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  useEffect(() => {
    console.log("here");
    const selectedCoffees = [
      ...coffees.map((coffee) => {
        if (coffee.isSelected) return coffee;
      }),
    ];

    let total = 0;
    console.log(selectedCoffees);
    if (selectedCoffees !== undefined && selectedCoffees.length > 0) {
      selectedCoffees!.forEach((selectedCoffee) => {
        if (selectedCoffee !== undefined) {
          total += selectedCoffee.value;
        } else {
        }
      });
    }
    console.log("TOTAL", total);
    setTotalItemsValue(total);
  }, [coffees]);

  return (
    <CheckoutWrapper>
      <Form onSubmit={handleSubmit}>
        <FormInputsWrapper>
          <h1>Complete seu pedido</h1>
          <FormInputs id="formInputs">
            <FormHeader
              title="Endereço de Entrega"
              subTitle="Informe o endereço onde deseja receber seu pedido"
              ImgComponent={MapPinLine}
              imgColor="yellow"
            />
            <input id="cep" name="cep" placeholder="CEP" />
            <input id="address" name="address" placeholder="Rua" />
            <div id="numberComplement">
              <input id="addressNumber" name="addressNumber" placeholder="Número" />
              <input id="addressComplement" name="addressComplement" placeholder="Complemento" />
            </div>
            <div id="cityState">
              <input id="neigborhood" name="neigborhood" placeholder="Bairro" />
              <input id="city" name="city" placeholder="Cidade" />
              <input id="state" name="state" placeholder="UF" />
            </div>
          </FormInputs>
          <FormPaymentTypeWrapper id="formPaymentType">
            <FormHeader
              title="Pagamento"
              subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              ImgComponent={CurrencyDollar}
              imgColor="purple"
            />
            <div id="selectPaymentType">
              <div>
                <input type="radio" id="credit" name="paymentType" />
                <label htmlFor="credit">
                  <CreditCard /> <span>CARTÃO DE CRÉDITO</span>
                </label>
              </div>
              <div>
                <input type="radio" id="debit" name="paymentType" />
                <label htmlFor="debit">
                  <Bank /> <span>CARTÃO DE DÉBITO</span>
                </label>
              </div>
              <div>
                <input type="radio" id="money" name="paymentType" />
                <label htmlFor="money">
                  <Money /> <span>DINHEIRO</span>
                </label>
              </div>
            </div>
          </FormPaymentTypeWrapper>
        </FormInputsWrapper>
        <SelectedCoffeeWrapper>
          <h1>Cafés selecionados</h1>
          <SelectedCoffeeContainer>
            <SelectedCoffeesList>
              <CoffeesSelected />
            </SelectedCoffeesList>
            <SelectedCoffeesValues>
              <div id="totalItens">
                <span>Total dos itens</span>
                <span>{`R$ ${totalItemsValue}`}</span>
              </div>
              <div id="deliverTax">
                <span>Entrega</span>
                <span>{cartIsEmpty ? "R$ 0,00" : "R$ 3,50"}</span>
              </div>
              <div id="total">
                <span>Total</span>
                <span>{cartIsEmpty ? "R$ 0,00" : `R$ ${totalItemsValue + 3.5}`}</span>
              </div>
            </SelectedCoffeesValues>
            <SubmitButton disabled={cartIsEmpty} type="submit">
              CONFIRMAR PEDIDO
            </SubmitButton>
          </SelectedCoffeeContainer>
        </SelectedCoffeeWrapper>
      </Form>
    </CheckoutWrapper>
  );
};
