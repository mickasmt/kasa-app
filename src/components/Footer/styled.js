import styled from "styled-components";
import screens from "../../utils/style/screens";

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
  height: 39.5px;
`;

const FooterText = styled.span`
  color: white;
  padding: 29px 0;
  align-self: center;

  font-size: 12px;
  line-height: 17px;

  @media ${screens.laptop} {
    font-size: 24px;
    line-height: 34px;
  }
`;

export { FooterWrapper, FooterLogo, FooterText };
