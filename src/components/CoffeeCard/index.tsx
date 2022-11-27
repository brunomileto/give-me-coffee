import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';

import { SelectedCoffeesContext } from '../../App';
import {
    BuyCoffeeWrapper, CoffeBuyButton, CoffeeItem, CoffeeType, CoffeQuantityWrapper,
    CoffeValueWrapper
} from './style';

export const CoffeeCard = () => {
  const { coffees, addCoffeeToCart, updateCoffeeQuantity } = useContext(SelectedCoffeesContext);
  return (
    <>
      {coffees.map((coffee) => {
        return (
          <CoffeeItem key={coffee.name}>
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
                <button onClick={() => updateCoffeeQuantity(coffee, -1)}>
                  <Minus />
                </button>
                <span>{coffee.selectedQuantity}</span>
                <button onClick={() => updateCoffeeQuantity(coffee, 1)}>
                  <Plus />
                </button>
              </CoffeQuantityWrapper>
              <CoffeBuyButton
                disabled={coffee.selectedQuantity <= 0}
                onClick={() => addCoffeeToCart(coffee)}
              >
                <ShoppingCart size={22} weight="fill" />
              </CoffeBuyButton>
            </BuyCoffeeWrapper>
          </CoffeeItem>
        );
      })}
    </>
  );
};
