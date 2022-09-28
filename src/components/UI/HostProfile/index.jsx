import PropTypes from "prop-types";
import styled from "styled-components";
// import colors from "../../../utils/style/colors";

const ProfilContainer = styled.div`
  display: flex;
`;

function HostProfile({ host }) {
  return (
    <div>
      <ProfilContainer>
        {host.name}
        <img src={host.picture} alt={host.name} />
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
