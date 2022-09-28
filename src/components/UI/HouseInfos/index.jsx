import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../../utils/style/colors";

const InfosWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  color: ${colors.primary};
`;

const InfosTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  line-height: 51px;
  display: flex;
  align-items: flex-end;
`;

const InfosLocation = styled.p`
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
`;

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
