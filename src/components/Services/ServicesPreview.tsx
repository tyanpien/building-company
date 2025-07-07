'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ServicesPreview.module.css';
import Lottie from 'lottie-react';
import repairAnimation from '@/assets/remont.json';
import domAnimation from '@/assets/dom.json';
import disignAnimation from '@/assets/disign.json';

export const ServicesPreview = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const setCardRef = (ref: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = ref;
  };

  const services = [
    {
      id: 1,
      title: "Ремонт квартир",
      shortDescription: "Полный цикл работ от черновой отделки до дизайнерского ремонта",
      fullDescription: "Мы выполняем все виды ремонтных работ: демонтаж, выравнивание стен и потолков, монтаж инженерных систем, чистовую отделку. Используем только качественные материалы и современные технологии.",
      icon: <Lottie animationData={repairAnimation} loop={true} style={{ width: 60, height: 60 }} />,
      details: [
        "Косметический ремонт",
        "Капитальный ремонт",
        "Дизайнерский ремонт",
        "Евроремонт"
      ]
    },
    {
      id: 2,
      title: "Строительство домов",
      shortDescription: "Возведение частных домов под ключ любой сложности",
      fullDescription: "Строим дома из различных материалов: кирпич, газобетон, дерево. Полный цикл работ от проектирования до сдачи объекта. Гарантия на все виды работ 5 лет.",
      icon: <Lottie animationData={domAnimation} loop={true} style={{ width: 60, height: 60 }} />,
      details: [
        "Каркасные дома",
        "Дома из бруса",
        "Кирпичные дома",
        "Газобетонные дома"
      ]
    },
    {
      id: 3,
      title: "Дизайн интерьеров",
      shortDescription: "Создание стильных и функциональных пространств",
      fullDescription: "Разрабатываем индивидуальные дизайн-проекты с 3D визуализацией. Учитываем все пожелания клиента и особенности помещения. Подбираем материалы, мебель и декор.",
      icon: <Lottie animationData={disignAnimation} loop={true} style={{ width: 60, height: 60 }} />,
      details: [
        "3D-визуализация",
        "Авторский надзор",
        "Подбор материалов",
        "Комплектация мебелью"
      ]
    }
  ];

  const toggleCard = (id: number) => {
    setExpandedCards(prev =>
      prev.includes(id)
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={styles.servicesGrid}>
      {services.map((service, index) => (
        <div
          key={service.id}
          ref={(ref) => setCardRef(ref, index)}
          className={`${styles.serviceCard} ${styles.fadeIn}`}
        >
          <div className={styles.cardContent}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.shortDescription}</p>

            <button
              onClick={() => toggleCard(service.id)}
              className={styles.detailsButton}
              aria-expanded={expandedCards.includes(service.id)}
            >
              {expandedCards.includes(service.id) ? 'Свернуть' : 'Подробнее'}
              <span className={styles.arrowIcon}>
                {expandedCards.includes(service.id) ? '↑' : '↓'}
              </span>
            </button>
          </div>

          <div
            className={`${styles.expandedContent} ${expandedCards.includes(service.id) ? styles.visible : ''}`}
            aria-hidden={!expandedCards.includes(service.id)}
          >
            <p>{service.fullDescription}</p>
            <ul className={styles.detailsList}>
              {service.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
