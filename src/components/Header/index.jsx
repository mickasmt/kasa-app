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
  padding: 40px 0;
`;

const Logo = styled.img`
  height: 68px;
`;

const LinksWrapper = styled.div``;

const StyledLink = styled(NavLink)`
  font-size: 24px;
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
        <StyledLink to="/" end>Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </LinksWrapper>
    </Nav>
  );
}

export default Header;
