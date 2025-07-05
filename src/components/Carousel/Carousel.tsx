'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

export const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer}>
        {images.map((image, index) => (
          <div
            key={image}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <Image
              src={image}
              alt={`Наш проект ${index + 1}`}
              fill
              className={styles.image}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Кнопки навигации */}
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevSlide}
        aria-label="Предыдущий слайд"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextSlide}
        aria-label="Следующий слайд"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Индикаторы слайдов */}
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
