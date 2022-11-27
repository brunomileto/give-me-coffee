import asd from '';

import americano from './assets/coffeeTypes/americano.svg';
import arabe from './assets/coffeeTypes/arabe.svg';
import cafeComLeite from './assets/coffeeTypes/cafeComLeite.svg';
import cafeGelado from './assets/coffeeTypes/cafeGelado.svg';
import capuccino from './assets/coffeeTypes/capuccino.svg';
import chocolateQuente from './assets/coffeeTypes/chocolateQuente.svg';
import cubano from './assets/coffeeTypes/cubano.svg';
import expresso from './assets/coffeeTypes/expresso.svg';
import expressoCremoso from './assets/coffeeTypes/expressoCremoso.svg';
import havaiano from './assets/coffeeTypes/havaiano.svg';
import irlandes from './assets/coffeeTypes/irlandes.svg';
import latte from './assets/coffeeTypes/latte.svg';
import macchiato from './assets/coffeeTypes/macchiato.svg';
import mochaccino from './assets/coffeeTypes/mochaccino.svg';

enum coffeeTypes {
  ESPECIAL = "ESPECIAL",
  ALCOOLICO = "ALCOÓLICO",
  COM_LEITE = "COM LEITE",
  TRADICIONAL = "TRADICIONAL",
  GELADO = "GELADO",
}

export type Product = {
  name: string;
  description: string;
  type: coffeeTypes[];
  value: number;
  image: string;
  selectedQuantity: number;
  isSelected: boolean;
};

export const products: Product[] = [
  {
    description: "O tradicional café feito com água quente e grãos moídos",
    name: "Expresso Tradicional",
    image: expresso,
    type: [coffeeTypes.TRADICIONAL],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description: "Expresso diluído, menos intenso que o tradicional",
    name: "Expresso Americano",
    image: americano,
    type: [coffeeTypes.TRADICIONAL],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description: "Café expresso tradicional com espuma cremosa",
    name: "Expresso Cremoso",
    image: expressoCremoso,
    type: [coffeeTypes.TRADICIONAL],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description: "Bebida preparada com café expresso e cubos de gelo",
    name: "Expresso Gelado",
    image: cafeGelado,
    type: [coffeeTypes.TRADICIONAL, coffeeTypes.GELADO],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    name: "Café com Leite",
    image: cafeComLeite,
    type: [coffeeTypes.TRADICIONAL, coffeeTypes.COM_LEITE],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    name: "Latte",
    image: latte,
    type: [coffeeTypes.TRADICIONAL, coffeeTypes.COM_LEITE],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    name: "Capuccino",
    image: capuccino,
    type: [coffeeTypes.TRADICIONAL, coffeeTypes.COM_LEITE],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    name: "Macchiato",
    image: macchiato,
    type: [coffeeTypes.TRADICIONAL, coffeeTypes.COM_LEITE],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    name: "Mocaccino",
    image: mochaccino,
    type: [coffeeTypes.TRADICIONAL, coffeeTypes.COM_LEITE],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    name: "Chocolate Quente",
    image: chocolateQuente,
    type: [coffeeTypes.ESPECIAL, coffeeTypes.COM_LEITE],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    name: "Cubano",
    image: cubano,
    type: [coffeeTypes.ESPECIAL, coffeeTypes.ALCOOLICO, coffeeTypes.GELADO],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description: "Bebida adocicada preparada com café e leite de coco",
    name: "Havaiano",
    image: havaiano,
    type: [coffeeTypes.ESPECIAL],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description: "Bebida preparada com grãos de café árabe e especiarias",
    name: "Árabe",
    image: arabe,
    type: [coffeeTypes.ESPECIAL],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
  {
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    name: "Irlandês",
    image: irlandes,
    type: [coffeeTypes.ALCOOLICO, coffeeTypes.ESPECIAL],
    value: 9.9,
    selectedQuantity: 0,
    isSelected: false,
  },
];
