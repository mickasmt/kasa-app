import styled from "styled-components";
import screens from "../../utils/style/screens";

// images
import cliffs from "../../assets/images/banners/cliffs.jpg";
import mountains from "../../assets/images/banners/mountains.jpg";

const bannersImg = {
  home: cliffs,
  about: mountains,
};

const BannerWrapper = styled.div`
  height: ${(props) => (props.page === "home" ? "111px" : "223px")};
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  mix-blend-mode: darken;
  margin-top: ${(props) => (props.page === "about" ? "17px" : "16px")};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => bannersImg[props.page]});
  
  @media ${screens.laptop} {
    height: 223px;
    border-radius: 25px;
    margin-top: ${(props) => (props.page === "about" ? "44px" : "63px")};
  }
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
  white-space: pre-line;
  
  @media ${screens.tablet} {
    white-space: nowrap;
  }
  
  @media ${screens.laptop} {
    font-size: 48px;
    line-height: 68px;
  }
`;

export { BannerWrapper, BannerContainer, BannerText };
