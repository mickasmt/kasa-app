import PropTypes from "prop-types";
import styled from "styled-components";
// import colors from "../../../utils/style/colors";

const RatingContainer = styled.div`
  display: flex;
`;

function Rating({ rating }) {
  return (
    <div>
      <RatingContainer>
        { rating }
      </RatingContainer>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
