import { Minus, Plus, Trash } from 'phosphor-react';
import { useContext } from 'react';

import { SelectedCoffeesContext } from '../../App';
import { Product } from '../../coffeesData';
import { SelectedCoffee } from './style';

export const CoffeesSelected = () => {
  const { coffees, updateCoffeeQuantity, removeCoffeeFromCart } =
    useContext(SelectedCoffeesContext);
  const selectedCoffees = coffees.filter((coffee) => coffee.isSelected === true);

  return (
    <>
      {selectedCoffees.map((coffee) => {
        if (coffee.isSelected) {
          return (
            <SelectedCoffee>
              <img alt="" src={coffee.image} />
              <div>
                <span>{coffee.name}</span>
                <div>
                  <div>
                    <button onClick={() => updateCoffeeQuantity(coffee, -1)}>
                      <Minus />
                    </button>
                    <span>{coffee.selectedQuantity}</span>
                    <button onClick={() => updateCoffeeQuantity(coffee, +1)}>
                      <Plus />
                    </button>
                  </div>
                  <button id="btnRemoveItem" onClick={() => removeCoffeeFromCart(coffee)}>
                    <Trash />
                    <span>REMOVER</span>
                  </button>
                </div>
              </div>
              <div id="itemValue">
                <span>R$ {coffee.value}</span>
              </div>
            </SelectedCoffee>
          );
        }
      })}
    </>
  );
};
