import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";

const CardWrapper = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  background-color: ${colors.primary};
  overflow: hidden;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const CardOverlay = styled.div`
  inset: 0px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
`;

const CardTitle = styled.span`
  color: #fff;
  padding: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  display: flex;
  align-items: flex-end;
`;

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`}>
      <CardWrapper>
        <CardImage src={logement.cover} alt={logement.title} />
        <CardOverlay>
          <CardTitle>{logement.title}</CardTitle>
        </CardOverlay>
      </CardWrapper>
    </Link>
  );
}

Card.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default Card;
