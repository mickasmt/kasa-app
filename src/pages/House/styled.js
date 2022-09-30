import styled from "styled-components";
import screens from "../../utils/style/screens";

const Container = styled.article`
  padding: 30px 0 24px;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > * {
    flex: 1;
  }

  @media ${screens.laptop} {
    flex-direction: row;
  }
`;

const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfilWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  @media ${screens.laptop} {
    flex-direction: column;
  }
`;

const CollapseWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${screens.laptop} {
    flex-direction: row;
  }
`;

export {
  Container,
  Columns,
  CollapseWrapper,
  InfosWrapper,
  ProfilWrapper
}