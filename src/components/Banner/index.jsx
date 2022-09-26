import PropTypes from "prop-types";

import cliffs from "../../assets/images/banners/cliffs.jpg";
import mountains from "../../assets/images/banners/mountains.jpg";

const bannersImg = {
  "home": mountains,
  "about": cliffs,
};

function Banner({ name }) {
  return (
    <div>
      <img src={bannersImg[name]} className="banner-img" alt={`${name}`} />
    </div>
  );
}

Banner.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Banner;
