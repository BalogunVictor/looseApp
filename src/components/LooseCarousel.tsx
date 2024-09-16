import React, { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

interface LooseCarouselProps {
  children: ReactNode;
}

function LooseCarousel({ children }: LooseCarouselProps) {
  return (
    <Carousel
      showDots
      infinite
      autoPlay
      autoPlaySpeed={3000}
      removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      responsive={responsive}
    >
      {children}
    </Carousel>
  );
}

export default LooseCarousel;
