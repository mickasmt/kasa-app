import PropTypes from "prop-types";
import styled from "styled-components";

import starIcon from "../../../assets/icons/star.svg";
import starActiveIcon from "../../../assets/icons/star-active.svg";

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
`;

const Star = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background-image: ${starIcon};
`;

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
