import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 0;
  //align-items: center;

  height: 100%;
  width: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  gap: 12px;

  /* height: 100%; */
`;

const NavItemContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;

  border-radius: 6px;
`;

export const LocationContainer = styled(NavItemContainer)`
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purple};

  display: flex;
  gap: 3px;
`;

export const CartContainer = styled(NavItemContainer)`
  background-color: ${(props) => props.theme.yellowLight};
`;
