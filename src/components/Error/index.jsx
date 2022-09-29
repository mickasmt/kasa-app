import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${colors.primary};
`;

const ErrorTitle = styled.h1`
  font-size: 288px;
  font-weight: 700;
  line-height: 411px;
  margin-bottom: 66px;
`;

const ErrorContent = styled.h3`
  font-size: 36px;
  font-weight: 500;
  line-height: 51px;
  margin-bottom: 182px;
`;

const HomeLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  margin-bottom: 159px;
`;

function Error() {
  return (
    <ErrorContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorContent>Oups! La page que vous demandez n'existe pas.</ErrorContent>

      <HomeLink to="/">Retourner sur la page d’accueil</HomeLink>
    </ErrorContainer>
  );
}

export default Error;
