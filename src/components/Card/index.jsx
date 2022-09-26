import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ id, title }) {
  return (
    <Link to={`/logement/${id}`}>
      <div>{title}</div>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
