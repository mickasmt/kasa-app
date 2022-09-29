import PropTypes from "prop-types";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  height: 415px;
  margin-top: 20px;
`;

const CarouselImage = styled.img`
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

function Carousel({ images }) {
  return (
    <CarouselWrapper>
      {images.map((image, index) => {
        return <CarouselImage src={image} alt={image} key={index} />;
      })}

      {/* <BannerContainer>
      {title && <BannerText>{title}</BannerText>}
      </BannerContainer> */}
    </CarouselWrapper>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
