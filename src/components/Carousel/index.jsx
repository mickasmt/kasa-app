import { useState } from "react";
import PropTypes from "prop-types";
import {
  CarouselWrapper,
  CarouselContainer,
  CarouselImage,
  CarouselArrow,
  CarouselText,
} from "./styled";

import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

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
        {images.length > 1 && <CarouselArrow src={arrowLeft} alt="" onClick={() => plusSlides(-1)} />}

        {images.length > 1 && 
          <CarouselText>
            {currentIndex + 1}/{images.length}
          </CarouselText>
        }

        {images.length > 1 && <CarouselArrow src={arrowRight} alt="" onClick={() => plusSlides(1)} />}
      </CarouselContainer>
    </CarouselWrapper>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
