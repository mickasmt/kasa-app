import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import {Nav, Logo, LinksWrapper, StyledLink} from "./styled";

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
