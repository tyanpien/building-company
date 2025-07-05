'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>О компании</h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.mission}>
              <h3>Наша миссия</h3>
              <p>
                Создавать качественные, современные и функциональные пространства,
                подходящие для жизни и работы.
              </p>
            </div>

            <div className={styles.description}>
              <p>
                ООО «БИЛДИНГ» - профессиональная строительная компания, работающая с 2017 года.
                За это время мы успешно реализовали более 100 проектов разного масштаба и сложности.
              </p>
              <p>
                Мы зарекомендовали себя как надёжный партнёр в строительной отрасли благодаря
                профессиональному подходу и ответственности.
              </p>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>лет опыта</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>проектов</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5</span>
                <span className={styles.statLabel}>наград</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40+</span>
                <span className={styles.statLabel}>клиентов</span>
              </div>
            </div>
          </div>

          {isMobile ? (
            <MobileImageSlider />
          ) : (
            <DesktopImageGallery />
          )}
        </div>
      </div>
    </section>
  );
};

const DesktopImageGallery = () => (
  <div className={styles.imageGallery}>
    <div className={styles.mainImageWrapper}>
      <Image
        src="/about/2.jpg"
        alt="Наши работы"
        fill
        className={styles.image}
        sizes="(max-width: 1024px) 50vw, 33vw"
        priority
      />
    </div>
    <div className={styles.secondaryImages}>
      <div className={styles.secondaryImageWrapper}>
        <Image
          src="/about/1.jpg"
          alt="Наши проекты"
          fill
          className={styles.image}
          sizes="25vw"
        />
      </div>
      <div className={styles.secondaryImageWrapper}>
        <Image
          src="/about/3.jpg"
          alt="Наши проекты"
          fill
          className={styles.image}
          sizes="25vw"
        />
      </div>
    </div>
  </div>
);

const MobileImageSlider = () => {
  const images = [
    { src: '/about/2.jpg', alt: 'Наши работы' },
    { src: '/about/1.jpg', alt: 'Наши проекты' },
    { src: '/about/3.jpg', alt: 'Наши проекты' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.mobileSlider}>
      <div
        className={styles.sliderTrack}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.slideImageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.image}
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className={`${styles.sliderButton} ${styles.prevButton}`}
        onClick={prevSlide}
        aria-label="Предыдущее фото"
      >
        &lt;
      </button>
      <button
        className={`${styles.sliderButton} ${styles.nextButton}`}
        onClick={nextSlide}
        aria-label="Следующее фото"
      >
        &gt;
      </button>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Перейти к фото ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
