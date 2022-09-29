import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import colors from "../../utils/style/colors";

const Nav = styled.nav`
  z-index: 10;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  /* padding-bottom: 20px; */
`;

const Logo = styled.img`
  height: 68px;
`;

const LinksWrapper = styled.div`
  flex-shrink: 0;
`;

const StyledLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  margin-right: 57px;
  text-decoration: none;
  color: ${colors.primary};

  &.active {
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0px;
  }
`;

function Header() {
  return (
    <Nav>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>

      <LinksWrapper>
        <StyledLink to="/" end>
          Accueil
        </StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </LinksWrapper>
    </Nav>
  );
}

export default Header;
