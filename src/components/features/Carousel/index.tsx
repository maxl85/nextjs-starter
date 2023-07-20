'use client';

import { clsx } from 'clsx';
import { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import { slides } from '../../../data/promo';
import styles from './styles.module.scss';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
      // eslint-disable-next-line no-magic-numbers
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="container">
      <div className={styles.carousel}>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className={styles.carouselSlides}
        >
          <div className={styles.carouselLeftArrow} role="presentation" onClick={prevSlide}>
            <BsChevronCompactLeft size={30} />
          </div>

          <div className={styles.carouselRightArrow} role="presentation" onClick={nextSlide}>
            <BsChevronCompactRight size={30} />
          </div>
        </div>
        <h3 className={styles.carouselTitle}>{slides[currentIndex].title}</h3>
        <p className={styles.carouselText}>{slides[currentIndex].text}</p>

        <div className={styles.carouselPoints}>
          {slides.map((slide, slideIndex) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={slideIndex}
              role="presentation"
              className={clsx(
                styles.carouselPointsItem,
                slideIndex === currentIndex && styles.selected
              )}
              onClick={() => goToSlide(slideIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
