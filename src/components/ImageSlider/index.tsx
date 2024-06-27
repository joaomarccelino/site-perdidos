import React, { useState } from 'react';
import './style.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Slide {
  image: string;
  description: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="slider-button slider-button-left"><IoIosArrowBack size={24} /></button>
      <div className="slider-content">
        <img src={slides[currentIndex].image} alt={slides[currentIndex].description} className="slider-image" />
        <div className="slider-description">
          {slides[currentIndex].description}
        </div>
      </div>
      <button onClick={nextSlide} className="slider-button slider-button-right"><IoIosArrowForward size={24} /></button>
    </div>
  );
};

export default ImageSlider;