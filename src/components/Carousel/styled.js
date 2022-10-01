import styled from "styled-components";
import screens from "../../utils/style/screens";

const CarouselWrapper = styled.div`
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  margin-top: 20px;
  height: 255px;

  @media ${screens.laptop} {
    height: 415px;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselContainer = styled.div`
  inset: 0px;
  display: flex;
  position: absolute;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
  
  @media ${screens.laptop} {
    padding: 25px 23.36px;
  }
`;

const CarouselArrow = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;

  @media ${screens.laptop} {
    width: 46.68px;
    height: 79.2px;
  }
`;

const CarouselText = styled.span`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  align-self: flex-end;
  display: none;

  @media ${screens.laptop} {
    display: block;
  }
`;

export {
  CarouselWrapper,
  CarouselContainer,
  CarouselImage,
  CarouselArrow,
  CarouselText,
};
