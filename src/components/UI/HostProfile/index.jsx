import PropTypes from "prop-types";
import { ProfilContainer, ProfilFullname, ProfilPicture } from "./styled";

function HostProfile({ host }) {
  return (
    <ProfilContainer>
      <ProfilFullname>{host.name}</ProfilFullname>
      <ProfilPicture src={host.picture} alt={host.name} />
    </ProfilContainer>
  );
}

HostProfile.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
};

export default HostProfile;
