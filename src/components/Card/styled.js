import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import screens from "../../utils/style/screens";

const CardWrapper = styled(Link)`
display: flex;
  width: 100%;
  height: 255px;
  border-radius: 10px;
  background-color: ${colors.primary};
  overflow: hidden;
  position: relative;

  @media ${screens.laptop} {
    width: 100%;
    height: 340px;
  }

  @media ${screens.desktop} {
    width: 340px;
    height: 340px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const CardOverlay = styled.div`
  inset: 0px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

const CardTitle = styled.span`
  color: #fff;
  padding: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  display: flex;
  align-items: flex-end;
`;

export { CardWrapper, CardImage, CardOverlay, CardTitle };
