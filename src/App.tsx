import { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Product, products } from './coffeesData';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

interface SelectedCoffeesContextProps {
  coffees: Product[];
  addCoffeeToCart: (selectedProduct: Product) => void;
  updateCoffeeQuantity: (selectedProduct: Product, quantity: number) => void;
  removeCoffeeFromCart: (selectedProduct: Product) => void;
}

export const SelectedCoffeesContext = createContext({} as SelectedCoffeesContextProps);

function App() {
  const [coffees, setCoffees] = useState<Product[]>(products);

  function addCoffeeToCart(selectedProduct: Product) {
    const newCoffeesList = [
      ...coffees.map((coffee) => {
        if (coffee.name === selectedProduct.name) {
          coffee.isSelected = true;
        }
        return coffee;
      }),
    ];
    setCoffees(newCoffeesList);
  }

  function removeCoffeeFromCart(selectedProduct: Product) {
    const newCoffeesList = [
      ...coffees.map((coffee) => {
        if (coffee.name === selectedProduct.name) {
          coffee.isSelected = false;
        }
        return coffee;
      }),
    ];
    setCoffees(newCoffeesList);
  }

  function updateCoffeeQuantity(selectedProduct: Product, quantity: number) {
    const newCoffeesList = [
      ...coffees.map((coffee) => {
        if (coffee.name === selectedProduct.name) {
          coffee.selectedQuantity += quantity;
          if (coffee.selectedQuantity <= 0) {
            coffee.selectedQuantity = 0;
            coffee.isSelected = false;
          }
        }
        return coffee;
      }),
    ];
    setCoffees(newCoffeesList);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <SelectedCoffeesContext.Provider
          value={{
            coffees,
            addCoffeeToCart,
            updateCoffeeQuantity,
            removeCoffeeFromCart,
          }}
        >
          <Router />
        </SelectedCoffeesContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
