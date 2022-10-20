import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import {
  AddressContainer,
  BasicInput,
  FormContainer,
  FullFillRequestContainer,
  LongInput,
  PaymentContainer,
  RadioButton,
  SelectedCoffeesContainer,
  ShortInput,
} from "./styles";

export function Checkout() {
  return (
    <div>
      <FormContainer>
        <FullFillRequestContainer id="fullfill-request">
          <h1>Complete seu pedido</h1>
          <AddressContainer id="address">
            <header>
              <MapPin size={22} color={defaultTheme.yellowDark} />
              <div>
                <h1>Endereço de Entrega</h1>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </header>
            <div>
              <div>
                <BasicInput placeholder="CEP" />
              </div>
              <div>
                <LongInput placeholder="Rua" />
              </div>
              <div>
                <BasicInput placeholder="Número" />
                <LongInput placeholder="Complemento" />
              </div>
              <div>
                <BasicInput placeholder="Bairro" />
                <LongInput placeholder="Cidade" />
                <ShortInput placeholder="UF" />
              </div>
            </div>
          </AddressContainer>
          <PaymentContainer id="payment">
            <header>
              <CurrencyDollar size={22} color={defaultTheme.purpleDark} />
              <div>
                <h1>Pagamento</h1>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </header>
            <div id="paymentTypeContainer">
              <div>
                <label htmlFor="credit">
                  <CreditCard size={16} color={defaultTheme.purple} />
                  <span>Cartão de Crédito</span>
                </label>
                <RadioButton id="credit" type="radio" name="paymentType" />
              </div>
              <div>
                <label htmlFor="debit">
                  <Bank size={16} color={defaultTheme.purple} />
                  <span>Cartão de Débito</span>
                </label>
                <RadioButton id="debit" type="radio" name="paymentType" />
              </div>
              <div>
                <label htmlFor="money">
                  <Money size={16} color={defaultTheme.purple} />
                  <span>Dinheiro</span>
                </label>
                <RadioButton id="money" type="radio" name="paymentType" />
              </div>
            </div>
          </PaymentContainer>
        </FullFillRequestContainer>
        <SelectedCoffeesContainer id="selected-coffees">
          <h1>Cafés selecionados</h1>
          <div>
            <div id="selected-coffees-list">
              <div id="selected-coffee1"></div>
              <div id="selected-coffee2"></div>
              <div id="selected-coffee3"></div>
            </div>
            <div id="values">
              <div>
                <div>
                  <span>Total de itens</span>
                  <h2>R$29,70</h2>
                </div>
                <div>
                  <span>Entrega</span>
                  <h2>3,50</h2>
                </div>
              </div>
              <div>
                <span>Total</span>
                <h2>R$32,20</h2>
              </div>
            </div>
            <button type="submit">CONFIRMAR PEDIDO</button>
          </div>
        </SelectedCoffeesContainer>
      </FormContainer>
    </div>
  );
}
