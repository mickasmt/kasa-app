import screens from "../../../utils/style/screens";
import styled from "styled-components";
import colors from "../../../utils/style/colors";

const ProfilContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilFullname = styled.h2`
  font-weight: 500;
  text-align: right;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: right;

  color: ${colors.primary};
  margin-right: 10px;
  word-spacing: 9999999px;

  @media ${screens.laptop} {
    font-size: 18px;
    line-height: 26px;
  }
`;

const ProfilPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  object-fit: cover;

  @media ${screens.laptop} {
    width: 64px;
    height: 64px;
  }
`;

export { ProfilContainer, ProfilFullname, ProfilPicture };
