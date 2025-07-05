'use client';

import { useState } from 'react';
import styles from './ServicesPreview.module.css';

export const ServicesPreview = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const services = [
    {
      id: 1,
      title: "Ремонт квартир",
      shortDescription: "Полный цикл работ от черновой отделки до дизайнерского ремонта",
      fullDescription: "Мы выполняем все виды ремонтных работ: демонтаж, выравнивание стен и потолков, монтаж инженерных систем, чистовую отделку. Используем только качественные материалы и современные технологии.",
      icon: "🛠️",
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
      icon: "🏠",
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
      icon: "🎨",
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
      {services.map(service => (
        <div
          key={service.id}
          className={styles.serviceCard}
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
