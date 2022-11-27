import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
  width: 100%;
  padding: 32px 0 32px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: fit-content;
  width: fit-content;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 12px;
`;

export const MapPimColor = styled.div`
  color: ${(props) => props.theme.purple};
`;

const NavItem = styled.div`
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border-radius: 6px;
`;

export const NavItemLocation = styled(NavItem)`
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purpleDark};
`;

export const NavItemCart = styled(NavItem)`
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
`;
