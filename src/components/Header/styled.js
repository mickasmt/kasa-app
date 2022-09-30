import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import screens from "../../utils/style/screens";

export const Nav = styled.nav`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  @media ${screens.laptop} {
    padding-top: 40px;
  }
`;

export const Logo = styled.img`
  width: 145px;
  height: 47px;

  @media ${screens.laptop} {
    height: 68px;
  }
`;

export const LinksWrapper = styled.div`
  flex-shrink: 0;
`;

export const StyledLink = styled(NavLink)`
  font-size: 12px;
  line-height: 17px;
  font-weight: 500;
  margin-right: 10px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${colors.primary};
  
  &.active {
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0px;
  }
  
  @media ${screens.laptop} {
    text-transform: none;
    font-size: 24px;
    line-height: 34px;
    margin-right: 57px;
  }
`;
