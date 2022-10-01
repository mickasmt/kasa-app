import PropTypes from "prop-types";
import { InfosWrapper, InfosTitle, InfosLocation } from "./styled";

function HouseInfos({ title, location }) {
  return (
    <InfosWrapper>
      <InfosTitle>{title}</InfosTitle>
      <InfosLocation>{location}</InfosLocation>
    </InfosWrapper>
  );
}

HouseInfos.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default HouseInfos;
