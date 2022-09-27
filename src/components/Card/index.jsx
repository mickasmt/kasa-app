import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";

const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`;

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`}>
      <CardWrapper>
        <CardImage src={logement.cover} alt={logement.title} />
        <CardTitle>{logement.title}</CardTitle>
      </CardWrapper>
    </Link>
  );
}

Card.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default Card;
