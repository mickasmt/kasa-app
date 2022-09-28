import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../../utils/style/colors";

const ProfilContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilFullname = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: right;
  color: ${colors.primary};
  margin-right: 10px;
  word-spacing: 9999999px;
`;

const ProfilPicture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
`;

function HostProfile({ host }) {
  return (
    <div>
      <ProfilContainer>
        <ProfilFullname>{host.name}</ProfilFullname>
        <ProfilPicture src={host.picture} alt={host.name} />
      </ProfilContainer>
    </div>
  );
}

HostProfile.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
};

export default HostProfile;
