'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    contentRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      observer.disconnect();
    };
  }, []);

  const setContentRef = (ref: HTMLDivElement | null, index: number) => {
    contentRefs.current[index] = ref;
  };

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.fadeIn}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>О компании</h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <div
              ref={(ref) => setContentRef(ref, 0)}
              className={`${styles.mission} ${styles.fadeIn}`}
            >
              <h3>Наша миссия</h3>
              <p>
                Превращать строительные объекты в функциональные экосистемы, где каждая деталь продумана для комфорта людей и эффективности бизнес-процессов.
              </p>
            </div>

            <div
              ref={(ref) => setContentRef(ref, 1)}
              className={`${styles.description} ${styles.fadeIn}`}
            >
              <p>
                ООО "БИЛДИНГ" – многопрофильная строительная компания, создающая современные пространства для бизнеса и жизни с 2017 года.
                Специализируемся на комплексных решениях: от капитального строительства до финишной отделки и оснащения мебелью собственного производства.
              </p>
              <p>
                Мы зарекомендовали себя как надёжный партнёр в строительной отрасли благодаря
                профессиональному подходу и ответственности.
              </p>
            </div>

            <div
              ref={(ref) => setContentRef(ref, 2)}
              className={`${styles.statsRow} ${styles.fadeIn}`}
            >
              <div className={styles.statItem}>
                <span className={styles.statNumber}>7+</span>
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

const DesktopImageGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const setImageRef = (ref: HTMLDivElement | null, index: number) => {
    imageRefs.current[index] = ref;
  };

  return (
    <div ref={galleryRef} className={styles.imageGallery}>
      <div
        ref={(ref) => setImageRef(ref, 0)}
        className={`${styles.mainImageWrapper} ${styles.fadeIn}`}
      >
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
        <div
          ref={(ref) => setImageRef(ref, 1)}
          className={`${styles.secondaryImageWrapper} ${styles.fadeIn}`}
        >
          <Image
            src="/about/4.png"
            alt="Наши проекты"
            fill
            className={styles.image}
            sizes="25vw"
          />
        </div>
        <div
          ref={(ref) => setImageRef(ref, 2)}
          className={`${styles.secondaryImageWrapper} ${styles.fadeIn}`}
        >
          <Image
            src="/about/3.png"
            alt="Наши проекты"
            fill
            className={styles.image}
            sizes="25vw"
          />
        </div>
      </div>
    </div>
  );
};

const MobileImageSlider = () => {
  const images = [
    { src: '/about/2.jpg', alt: 'Наши работы' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    slideRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const setSlideRef = (ref: HTMLDivElement | null, index: number) => {
    slideRefs.current[index] = ref;
  };

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
          <div
            key={index}
            ref={(ref) => setSlideRef(ref, index)}
            className={`${styles.slide} ${styles.fadeIn}`}
          >
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
