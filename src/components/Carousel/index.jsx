import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

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

const CarouselContainer = styled.div`
  position: absolute;
  inset: 0px;
  display: flex;
  padding: 25px 23.36px;
  align-items: center;
  justify-content: space-between;
`;

const CarouselArrow = styled.img`
  width: 46.68px;
  height: 79.2px;
`;

const CarouselText = styled.span`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  align-self: flex-end;
`;

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const plusSlides = (n) => {
    let index;

    if (n === 1 || n === -1) {
      index = currentIndex + n;
    }

    // check up loop
    if (index >= images.length) {
      index = 0;
    }

    if (index < 0) {
      index = images.length - 1;
    }

    setCurrentIndex(index);
  };

  return (
    <CarouselWrapper>
      <CarouselImage src={images[currentIndex]} alt={"silde-" + currentIndex} />

      <CarouselContainer>
        <CarouselArrow src={arrowLeft} alt="" onClick={() => plusSlides(-1)} />

        <CarouselText>
          {currentIndex + 1}/{images.length}
        </CarouselText>

        <CarouselArrow src={arrowRight} alt="" onClick={() => plusSlides(1)} />
      </CarouselContainer>
    </CarouselWrapper>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
