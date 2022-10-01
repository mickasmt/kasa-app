import PropTypes from "prop-types";
import { BannerWrapper, BannerContainer, BannerText } from "./styled";
import useWindowSize from "../../utils/useWindowSize";

function Banner({ name, title }) {
  let sentence;
  const screenWidth = useWindowSize().innerWidth;

  if (title && screenWidth <= 640) {
    //tablet size = 640px
    sentence = title.replace(",", ",\n");
  } else {
    sentence = title;
  }

  return (
    <BannerWrapper page={name}>
      <BannerContainer>
        {title && <BannerText>{sentence}</BannerText>}
      </BannerContainer>
    </BannerWrapper>
  );
}

Banner.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Banner.defaultProps = {
  name: "home",
};

export default Banner;
