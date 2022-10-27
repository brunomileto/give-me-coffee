import {
    Coffee, Minus, Package, Plus, ShoppingCart, ShoppingCartSimple, Timer
} from 'phosphor-react';

import HeroMainImg from '../../assets/Imagem.png';
import { products } from '../../coffeesData';
import {
    BuyCoffeeWrapper, CircleWithImg, CoffeBuyButton, CoffeeItem, CoffeesItems, CoffeesWrapper,
    CoffeeType, CoffeQuantityWrapper, CoffeValueWrapper, HeroContentItem, HeroContentItems,
    HeroContentWrapper, HeroImg, HeroTitleWrapper, HeroWrapper
} from './style';

export const Home = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContentWrapper>
          <HeroTitleWrapper>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
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
          {products.map((coffee) => {
            return (
              <CoffeeItem>
                <img alt="" src={coffee.image} />
                <CoffeeType>
                  <span>{coffee.type}</span>
                </CoffeeType>
                <h1>{coffee.name}</h1>
                <p>{coffee.description}</p>
                <BuyCoffeeWrapper>
                  <CoffeValueWrapper>
                    <span>R$ </span>
                    <span>{coffee.value}</span>
                  </CoffeValueWrapper>
                  <CoffeQuantityWrapper>
                    <div>
                      <Minus />
                    </div>
                    <span>1</span>
                    <div>
                      <Plus />
                    </div>
                  </CoffeQuantityWrapper>
                  <CoffeBuyButton>
                    <ShoppingCart size={22} weight="fill" />
                  </CoffeBuyButton>
                </BuyCoffeeWrapper>
              </CoffeeItem>
            );
          })}
        </CoffeesItems>
      </CoffeesWrapper>
    </>
  );
};
