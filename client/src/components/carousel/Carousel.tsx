import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './carousel.css';

// const items: {src: string, altText: string, caption: string, location: string}[] = [
const items = [
  {
    src: 'mood.jpg',
    altText: 'In The Mood For Love',
    caption: 'In The Mood For Love',
    location: 'Picturehouse Liverpool, May 20 2021'
  },
  {
    src: 'br2049.jpeg',
    altText: 'Blade Runner 2049',
    caption: 'Blade Runner 2049',
    location: 'Curzon Bloomsbury London, Dec 5 2020'
  },
  {
    src: 'spinal.jpeg',
    altText: 'Spinal Tap',
    caption: 'Spinal Tap',
    location: 'Genesis Cinema, London, Jan 2 2021'
  },
    {
    src: 'odyssey.jpeg',
    altText: '2001: A Space Odyssey',
    caption: '2001: A Space Odyssey',
    location: 'Picturehouse Bristol, Apr 3 2021'
  }
];

const FilmCarousel: React.FC = (props) => {
 
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="carousel"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img 
        className="img-slide" 

        src={item.src} 
        alt={item.altText} 
        />
        <CarouselCaption 
        className="carousel"
        captionText={item.location} 
        captionHeader={item.caption} />

      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="carousel"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators 
      items={items} 
      activeIndex={activeIndex} 
      onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default FilmCarousel;