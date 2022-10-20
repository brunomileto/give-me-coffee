import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/Logo.svg";
import {
  CartContainer,
  HeaderContainer,
  LocationContainer,
  NavContainer,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer id="header-container">
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <NavContainer id="nav-container">
        <LocationContainer>
          <MapPin weight="fill" size={22} color={"#8047F8"} />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <CartContainer>
          <NavLink to="/checkout">
            <ShoppingCart weight="fill" size={22} color={"#DBAC2C"} />
          </NavLink>
        </CartContainer>
      </NavContainer>
    </HeaderContainer>
  );
}
