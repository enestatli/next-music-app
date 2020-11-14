import styled from 'styled-components';

import { device } from '../../../styles/breakpoints';
import { colors } from '../../../styles/colors';

const Navbar = styled.nav`
  background-color: ${colors.green};
  width: 100%;
  height: 64px;
  top: 0;
  left: 0;
  transition: 0.5s;
  border-bottom: 1px solid #52936f;
`;

const Menu = styled.div`
  width: 98%;
  margin: 4px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
`;

const MenuItem = styled.a`
  margin-top: 16px;
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.028rem;
  transition: 0.5s;
  &:hover {
    text-decoration: underline;
  }
`;

export { Navbar, Menu, MenuItem };
