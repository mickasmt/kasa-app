import PropTypes from "prop-types";
import {
  BannerWrapper,
  BannerImage,
  BannerContainer,
  BannerText,
} from "./styled";

// images
import cliffs from "../../assets/images/banners/cliffs.jpg";
import mountains from "../../assets/images/banners/mountains.jpg";

const bannersImg = {
  home: cliffs,
  about: mountains,
};

function Banner({ name, title }) {
  return (
    <BannerWrapper page={name}>
      {/* <BannerImage src={bannersImg[name]} alt={"banner-" + name} /> */}

      <BannerContainer>
        {title && <BannerText>{title}</BannerText>}
      </BannerContainer>
    </BannerWrapper>
  );
}

Banner.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Banner.defaultProps = {
  name: bannersImg["home"],
};

export default Banner;
