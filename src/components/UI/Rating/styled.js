import styled from "styled-components";
import screens from "../../../utils/style/screens";

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Star = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 5px;

  @media ${screens.laptop} {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
`;

export { RatingContainer, Star };
