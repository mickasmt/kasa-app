import PropTypes from "prop-types";
import styled from "styled-components";

import cliffs from "../../assets/images/banners/cliffs.jpg";
import mountains from "../../assets/images/banners/mountains.jpg";

const bannersImg = {
  home: cliffs,
  about: mountains,
};

const BannerWrapper = styled.div`
  height: 223px;
  overflow: hidden;
  position: relative;
  border-radius: 25px;
  margin-top: ${(props) => (props.page === "about" ? "44px" : "63px")};
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerContainer = styled.div`
  position: absolute;
  inset: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

const BannerText = styled.p`
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
`;

function Banner({ name, title }) {
  console.log(name);
  return (
    <BannerWrapper page={name}>
      <BannerImage src={bannersImg[name]} alt={'banner-'+name} />

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
