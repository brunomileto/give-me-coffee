import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Product } from "../../pages/Home";
import {
  AddToCartContainer,
  CartContainer,
  ProductContainer,
  ProductDescription,
  ProductFooter,
  ProductValueContainer,
} from "./styles";

interface ProductProps {
  product: Product;
}

export function ProductComponent({ product }: ProductProps) {
  return (
    <ProductContainer>
      <img src={product.image} />
      <div>
        {product.type.map((productType) => {
          return <span> {productType} </span>;
        })}
      </div>
      <h1 id="product-name"> {product.name}</h1>
      <ProductDescription id="product-description">
        {product.description}
      </ProductDescription>
      <ProductFooter>
        <ProductValueContainer>
          <span>R$</span>
          <h2>{product.value}</h2>
        </ProductValueContainer>
        <AddToCartContainer>
          <div>
            <button>
              <Minus size={14} color="#8047F8" weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} color="#8047F8" weight="bold" />
            </button>
          </div>
          <CartContainer>
            <ShoppingCart weight="fill" size={22} />
          </CartContainer>
        </AddToCartContainer>
      </ProductFooter>
    </ProductContainer>
  );
}
