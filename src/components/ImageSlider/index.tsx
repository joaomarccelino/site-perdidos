import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Troca de slide a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [currentIndex]);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="slider-button slider-button-left">
        <IoIosArrowBack size={24} />
      </button>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slider-content ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.description} className="slider-image" />
          <div className="slider-description">{slide.description}</div>
        </div>
      ))}
      <button onClick={nextSlide} className="slider-button slider-button-right">
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default ImageSlider;
