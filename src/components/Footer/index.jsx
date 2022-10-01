import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-white.svg";
import { FooterWrapper, FooterLogo, FooterText } from "./styled";

function Footer() {
  return (
    <FooterWrapper>
      <Link to="/">
        <FooterLogo src={logo} alt="kasa-logo" />
      </Link>

      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterWrapper>
  );
}

export default Footer;
