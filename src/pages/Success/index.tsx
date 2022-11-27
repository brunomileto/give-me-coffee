import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import illustration from '../../assets/Illustration.png';
import {
    CircleWithImg, SuccessContent, SuccessContentContainer, SuccessContentContainerBorder,
    SuccessWrapper
} from './style';

export function Success() {
  return (
    <SuccessWrapper>
      <div id="title">
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>
      <div id="content">
        <SuccessContentContainerBorder>
          <SuccessContentContainer>
            <SuccessContent>
              <div>
                <CircleWithImg color="purple">
                  <MapPin />
                </CircleWithImg>
                <div>
                  <span>
                    Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                    Alegre, RS
                  </span>
                </div>
              </div>
              <div>
                <CircleWithImg color="yellow">
                  <Timer />
                </CircleWithImg>
                <div>
                  <span>Previsão de entrega</span>
                  <span>20 min - 30 min </span>
                </div>
              </div>
              <div>
                <CircleWithImg color="darkYellow">
                  <CurrencyDollar />
                </CircleWithImg>
                <div>
                  <span>Pagamento na entrega</span>
                  <span>Cartão de Crédito</span>
                </div>
              </div>
            </SuccessContent>
          </SuccessContentContainer>
        </SuccessContentContainerBorder>
        <img alt="" src={illustration} />
      </div>
    </SuccessWrapper>
  );
}
