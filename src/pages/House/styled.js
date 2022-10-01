import styled from "styled-components";
import screens from "../../utils/style/screens";

const Container = styled.article`
  padding-top: 15px;
  padding-bottom: 24px;
  
  @media ${screens.laptop} {
    padding-top: 30px;
  }
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
  padding: 16px 0;
  vertical-align: middle;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media ${screens.laptop} {
    padding: 0;
    flex-direction: column;
  }
`;

const CollapseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  > * {
    margin-bottom: 20px;
  }
  
  @media ${screens.laptop} {
    margin-top: 24px;
    gap: 40px;
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