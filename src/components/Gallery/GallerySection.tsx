'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './GallerySection.module.css';

const images = [
  { id: 1, src: '/gallery/1.jpg', alt: 'Наш проект 1' },
  { id: 2, src: '/gallery/2.jpg', alt: 'Наш проект 2' },
  { id: 3, src: '/gallery/3.jpg', alt: 'Наш проект 3' },
  { id: 4, src: '/gallery/4.jpg', alt: 'Наш проект 4' },
  { id: 5, src: '/gallery/5.jpg', alt: 'Наш проект 5' },
  { id: 6, src: '/gallery/6.jpg', alt: 'Наш проект 6' },
];

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev >= images.length - visibleItems ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev <= 0 ? images.length - visibleItems : prev - 1
    );
  };

  if (!isMounted) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши работы</h2>
        <div className={styles.galleryContainer}>
          <button
            onClick={prevSlide}
            className={`${styles.navButton} ${styles.prevButton}`}
            aria-label="Предыдущие работы"
          >
            &lt;
          </button>

          <div className={styles.galleryTrack}>
            {images.slice(currentIndex, currentIndex + visibleItems).map((image) => (
              <div key={image.id} className={styles.galleryItem}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}  // базовые размеры
                  height={400}
                  className={styles.image}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                  }}
                  quality={85}
                  priority={currentIndex === 0}
                />
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className={`${styles.navButton} ${styles.nextButton}`}
            aria-label="Следующие работы"
          >
            &gt;
          </button>
        </div>

        <div className={styles.dots}>
          {Array.from({ length: images.length - visibleItems + 1 }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Перейти к работе ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
