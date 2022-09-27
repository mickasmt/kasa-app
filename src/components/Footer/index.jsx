import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

const FooterText = styled.p`
  color: white;
  font-size: 22px;
`

const FooterLogo = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: #000;
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`


function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
