import styled from "styled-components";
import screens from "../../utils/style/screens";

const BannerWrapper = styled.div`
  height: ${(props) => (props.page === "home" ? "111px" : "223px")};
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  margin-top: ${(props) => (props.page === "about" ? "17px" : "16px")};
  
  @media ${screens.laptop} {
    height: 223px;
    border-radius: 25px;
    margin-top: ${(props) => (props.page === "about" ? "44px" : "63px")};
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerContainer = styled.div`
  position: absolute;
  inset: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 16px;
  background: rgba(0, 0, 0, 0.3);
  
  @media ${screens.laptop} {
    padding: 0;
    justify-content: center;
  }
`;

const BannerText = styled.p`
  color: #fff;
  font-size: 24px;
  line-height: 24px;

  letter-spacing: 0em;
  font-style: normal;
  font-weight: 500;
  
  @media ${screens.laptop} {
    font-size: 48px;
    line-height: 68px;
  }
`;

export { BannerWrapper, BannerImage, BannerContainer, BannerText };
