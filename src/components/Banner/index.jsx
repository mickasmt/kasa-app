import PropTypes from "prop-types";

import cliffs from "../../assets/images/banners/cliffs.jpg";
import mountains from "../../assets/images/banners/mountains.jpg";

const bannersImg = {
  "home": cliffs,
  "about": mountains,
};

function Banner({ name, title }) {
  return (
    <div>
      <img src={bannersImg[name]} className="banner-img" alt={`${name}`} />
      {title && <span>{title}</span>}
    </div>
  );
}

Banner.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Banner.defaultProps = {
  name: bannersImg['home']
};

export default Banner;
