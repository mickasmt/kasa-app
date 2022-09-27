import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-white.svg";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
  width: 100%;
  height: 209px;
  padding-top: 66px;
  box-sizing: border-box;
  background-color: #000;
`;

const FooterLogo = styled.img`
  height: 40px;
  width: auto;
`;

const FooterText = styled.span`
  color: white;
  padding: 29px 0;
  font-size: 24px;
  line-height: 34px;
  align-self: center;
`;

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
