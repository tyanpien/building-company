'use client';

import { useState } from 'react';
import styles from './ServicesPage.module.css';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
}

interface ServicesByCategory {
  [key: string]: Service[];
}
export const ServicesPages = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Ремонт');

  const servicesByCategory: ServicesByCategory = {
    "Ремонт": [
      {
        id: 1,
        title: 'Ремонт квартир под ключ',
        description: 'Полный цикл работ от дизайн-проекта до финишной отделки',
        price: 'от 5 000 ₽/м²'
      },
      {
        id: 15,
        title: 'Ремонт офисов',
        description: 'Комплексный ремонт коммерческих помещений любой сложности',
        price: 'от 3 500 ₽/м²'
      },
      {
        id: 16,
        title: 'Ремонт ванных комнат',
        description: 'Комплексный ремонт с заменой сантехники, гидроизоляцией и отделкой',
        price: 'от 35 000 ₽'
      },
      {
        id: 17,
        title: 'Ремонт кухонь',
        description: 'Перепланировка, замена коммуникаций, установка кухонного гарнитура',
        price: 'от 45 000 ₽'
      },
      {
        id: 18,
        title: 'Черновая отделка',
        description: 'Подготовка помещений к финишной отделке: стяжка, штукатурка, шпаклевка',
        price: 'от 2 500 ₽/м²'
      },
      {
        id: 19,
        title: 'Ремонт балконов и лоджий',
        description: 'Утепление, остекление, отделка балконов и лоджий',
        price: 'от 20 000 ₽'
      },
      {
        id: 20,
        title: 'Ремонт коридоров и прихожих',
        description: 'Оптимизация пространства, качественная отделка входных зон',
        price: 'от 25 000 ₽'
      },
      {
        id: 12,
        title: 'Демонтажные работы',
        description: 'Чистый демонтаж перегородок, сантехники, старых покрытий',
        price: 'от 200 ₽/м²'
      },
    ],
    "Отделка": [
      {
        id: 5,
        title: 'Отделка фасадов',
        description: 'Оштукатуривание, облицовка камнем, сайдингом или клинкерной плиткой',
        price: 'от 1 200 ₽/м²'
      },
      {
        id: 8,
        title: 'Натяжные потолки',
        description: 'Установка глянцевых, матовых и сатиновых натяжных потолков',
        price: 'от 500 ₽/м²'
      },
      {
        id: 9,
        title: 'Укладка плитки',
        description: 'Облицовка стен и полов керамической плиткой в ванных и кухнях',
        price: 'от 2 500 ₽/м²'
      },
      {
        id: 10,
        title: 'Штукатурные работы',
        description: 'Выравнивание стен и потолков штукатурными смесями',
        price: 'от 400 ₽/м²'
      },
      {
        id: 14,
        title: 'Ландшафтный дизайн',
        description: 'Озеленение участка, мощение дорожек, устройство газонов',
        price: 'от 1 500 ₽/м²'
      },
      {
        id: 21,
        title: 'Поклейка обоев',
        description: 'Качественная поклейка всех видов обоев с подготовкой поверхности',
        price: 'от 250 ₽/м²'
      },
      {
        id: 22,
        title: 'Окраска стен и потолков',
        description: 'Покраска поверхностей современными составами с гарантией качества',
        price: 'от 300 ₽/м²'
      },
      {
        id: 23,
        title: 'Укладка ламината и паркета',
        description: 'Монтаж напольных покрытий с подложкой и плинтусами',
        price: 'от 500 ₽/м²'
      },
      {
        id: 24,
        title: 'Монтаж декоративных панелей',
        description: 'Установка 3D-панелей, МДФ, пластиковых и деревянных панелей',
        price: 'от 800 ₽/м²'
      },
      {
        id: 25,
        title: 'Установка межкомнатных дверей',
        description: 'Монтаж дверей с коробками, наличниками и доборами',
        price: 'от 3 500 ₽/шт'
      }
    ],
    "Проектирование": [
      {
        id: 26,
        title: 'Разработка дизайн-проектов',
        description: 'Создание полного дизайн-проекта с 3D-визуализацией',
        price: 'от 1 500 ₽/м²'
      },
      {
        id: 27,
        title: 'Архитектурное проектирование',
        description: 'Разработка архитектурных решений для частных домов и коммерческих помещений',
        price: 'от 50 000 ₽'
      },
      {
        id: 28,
        title: 'Инженерные коммуникации',
        description: 'Проектирование систем отопления, водоснабжения и канализации',
        price: 'от 30 000 ₽'
      },
      {
        id: 29,
        title: 'Электропроект',
        description: 'Разработка схем электроснабжения с расчетом нагрузок',
        price: 'от 25 000 ₽'
      },
      {
        id: 30,
        title: 'Авторский надзор',
        description: 'Контроль выполнения строительных работ согласно проектной документации',
        price: 'от 2 000 ₽/визит'
      }
    ],
    "Спец. работы": [
      {
        id: 3,
        title: 'Электромонтажные работы',
        description: 'Полная разводка электрики, установка щитков, розеток и выключателей',
        price: 'от 1 500 ₽/точка'
      },
      {
        id: 4,
        title: 'Сантехнические работы',
        description: 'Установка сантехники, разводка труб, монтаж систем водоснабжения',
        price: 'от 3 000 ₽'
      },
      {
        id: 6,
        title: 'Кровельные работы',
        description: 'Монтаж кровли из металлочерепицы, мягкой кровли, профнастила',
        price: 'от 800 ₽/м²'
      },
      {
        id: 7,
        title: 'Установка окон',
        description: 'Монтаж пластиковых, деревянных и алюминиевых оконных конструкций',
        price: 'от 8 000 ₽'
      },
      {
        id: 11,
        title: 'Монтаж теплых полов',
        description: 'Установка электрических и водяных систем подогрева пола',
        price: 'от 1 800 ₽/м²'
      },
      {
        id: 13,
        title: 'Утепление домов',
        description: 'Теплоизоляция фасадов, кровли, полов и стен современными материалами',
        price: 'от 600 ₽/м²'
      },
    ]
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Наши услуги</h1>
      <p className={styles.subtitle}>Качественное выполнение строительных работ любой сложности</p>

      <div className={styles.categoryLinks}>
        {Object.keys(servicesByCategory).map((category: string) => (
          <span
            key={category}
            className={`${styles.categoryLink} ${activeCategory === category ? styles.activeCategory : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className={styles.servicesGrid}>
        {servicesByCategory[activeCategory].map((service: Service) => (
          <div key={service.id} className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <div className={styles.serviceFooter}>
              <span className={styles.servicePrice}>{service.price}</span>
              <Link
                href="/workflow#contact-form"
                className={styles.orderButton}
              >
                Заказать
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
