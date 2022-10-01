import styled from "styled-components";
import colors from "../../../utils/style/colors";
import screens from "../../../utils/style/screens";

const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: ${colors.primary};
  
  @media ${screens.laptop} {
    margin-bottom: 20px;
  }
`;

const InfosTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  
  @media ${screens.laptop} {
    font-size: 36px;
    line-height: 51px;
  }
`;

const InfosLocation = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  
  @media ${screens.laptop} {
    font-size: 18px;
    line-height: 26px;
  }
`;

export { InfosWrapper, InfosTitle, InfosLocation };
