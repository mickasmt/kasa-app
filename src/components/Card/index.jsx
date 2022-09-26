import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`}>
      <div>
        <img src={logement.cover} alt={logement.title} />
        <h2>{logement.title}</h2>
      </div>
    </Link>
  );
}

Card.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default Card;
