import { ErrorContainer, ErrorTitle, ErrorContent, HomeLink } from "./styled";

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
