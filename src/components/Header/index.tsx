import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { SelectedCoffeesContext } from '../../App';
import LogoImg from '../../assets/Logo.svg';
import {
    HeaderWrapper, LogoImage, MapPimColor, NavItemCart, NavItemLocation, NavItems
} from './styles';

export const Header = () => {
  const { coffees } = useContext(SelectedCoffeesContext);
  const cartHasItems =
    coffees.filter((coffee) => coffee.isSelected === true).length > 0;
  return (
    <HeaderWrapper>
      <NavLink to="/">
        <LogoImage alt="" src={LogoImg} />
      </NavLink>
      <NavItems>
        <NavLink to="/">
          <NavItemLocation>
            <MapPimColor>
              <MapPin size={22} weight="fill" />
            </MapPimColor>
            <span>Porto Alegre, RS</span>
          </NavItemLocation>
        </NavLink>
        {cartHasItems ? (
          <NavLink to="/checkout">
            <NavItemCart>
              <ShoppingCart size={22} weight="fill" />
            </NavItemCart>
          </NavLink>
        ) : (
          <NavItemCart>
            <ShoppingCart size={22} weight="fill" />
          </NavItemCart>
        )}
      </NavItems>
    </HeaderWrapper>
  );
};
