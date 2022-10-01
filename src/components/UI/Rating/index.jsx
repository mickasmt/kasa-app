import PropTypes from "prop-types";
import { RatingContainer, Star } from "./styled";

import starIcon from "../../../assets/icons/star.svg";
import starActiveIcon from "../../../assets/icons/star-active.svg";

function Rating({ rating }) {
  const array = Array(5).fill(0);
  const stars = array.fill(1, 0, rating);

  return (
    <RatingContainer>
      {stars.map((star, index) => (
        <Star key={index} src={star ? starActiveIcon : starIcon} alt="star" />
      ))}
    </RatingContainer>
  );
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
