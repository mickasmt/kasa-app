import PropTypes from "prop-types";
import { CardWrapper, CardImage, CardOverlay, CardTitle } from "./styled";

function Card({ logement }) {
  return (
    // <Link to={`/logement/${logement.id}`}>
      <CardWrapper  to={`/logement/${logement.id}`}>
        <CardImage src={logement.cover} alt={logement.title} />
        <CardOverlay>
          <CardTitle>{logement.title}</CardTitle>
        </CardOverlay>
      </CardWrapper>
    // </Link>
  );
}

Card.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default Card;
