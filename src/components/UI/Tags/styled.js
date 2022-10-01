import styled from "styled-components";
import colors from "../../../utils/style/colors";
import screens from "../../../utils/style/screens";

const TagsContainer = styled.div`
  gap: 10px;
  flex-wrap: wrap;
  display: inline-flex;
  align-items: center;
`;

const Tag = styled.span`
  height: 18px;
  min-width: 84px;
  padding: 3px 22px;
  box-sizing: border-box;

  color: #fff;
  border-radius: 5px;
  background-color: ${colors.primary};

  font-size: 10px;
  font-weight: 500;

  @media ${screens.laptop} {
    height: 25px;
    font-size: 14px;
    min-width: 115px;
    padding: 3px 30px;
    border-radius: 10px;
  }
`;

export { TagsContainer, Tag };
