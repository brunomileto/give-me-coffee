import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import LogoImg from '../../assets/Logo.svg';
import {
    HeaderWrapper, LogoImage, MapPimColor, NavItemCart, NavItemLocation, NavItems
} from './styles';

export const Header = () => {
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
        <NavLink to="/">
          <NavItemCart>
            <ShoppingCart size={22} weight="fill" />
          </NavItemCart>
        </NavLink>
      </NavItems>
    </HeaderWrapper>
  );
};
