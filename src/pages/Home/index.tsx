import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';

import HeroMainImg from '../../assets/Imagem.png';
import { CoffeeCard } from '../../components/CoffeeCard';
import {
    CircleWithImg, CoffeesItems, CoffeesWrapper, HeroContentItem, HeroContentItems,
    HeroContentWrapper, HeroImg, HeroTitleWrapper, HeroWrapper
} from './style';

export const Home = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContentWrapper>
          <HeroTitleWrapper>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
          </HeroTitleWrapper>
          <HeroContentItems>
            <HeroContentItem>
              <CircleWithImg color="darkYellow">
                <ShoppingCartSimple weight="fill" />
              </CircleWithImg>
              <span>Compra simples e segura</span>
            </HeroContentItem>
            <HeroContentItem>
              <CircleWithImg color="gray">
                <Timer weight="fill" />
              </CircleWithImg>
              <span>Embalagem mantém o café intacto</span>
            </HeroContentItem>
            <HeroContentItem>
              <CircleWithImg color="yellow">
                <Package weight="fill" />
              </CircleWithImg>
              <span>Entrega rápida e rastreada</span>
            </HeroContentItem>
            <HeroContentItem>
              <CircleWithImg color="purple">
                <Coffee weight="fill" />
              </CircleWithImg>
              <span>O café chega fresquinho até você</span>
            </HeroContentItem>
          </HeroContentItems>
        </HeroContentWrapper>
        <HeroImg id="bg-img" alt="" src={HeroMainImg} />
      </HeroWrapper>
      <CoffeesWrapper>
        <h1>Nossos cafés</h1>
        <CoffeesItems>
          <CoffeeCard />
        </CoffeesItems>
      </CoffeesWrapper>
    </>
  );
};
