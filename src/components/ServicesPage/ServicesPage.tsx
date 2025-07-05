import styles from './ServicesPage.module.css';
import Link from 'next/link';

export const ServicesPages = () => {
  const services = [
    {
      id: 1,
      title: 'Ремонт квартир под ключ',
      description: 'Полный цикл работ от дизайн-проекта до финишной отделки',
      price: 'от 5 000 ₽/м²'
    },
    {
      id: 2,
      title: 'Строительство домов',
      description: 'Возведение частных домов из кирпича, газобетона и других материалов',
      price: 'от 25 000 ₽/м²'
    },
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
      id: 5,
      title: 'Отделка фасадов',
      description: 'Оштукатуривание, облицовка камнем, сайдингом или клинкерной плиткой',
      price: 'от 1 200 ₽/м²'
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
      id: 8,
      title: 'Натяжные потолки',
      description: 'Установка глянцевых, матовых и сатиновых натяжных потолков',
      price: 'от 350 ₽/м²'
    },
    {
      id: 9,
      title: 'Укладка плитки',
      description: 'Облицовка стен и полов керамической плиткой в ванных и кухнях',
      price: 'от 1 000 ₽/м²'
    },
    {
      id: 10,
      title: 'Штукатурные работы',
      description: 'Выравнивание стен и потолков штукатурными смесями',
      price: 'от 400 ₽/м²'
    },
    {
      id: 11,
      title: 'Монтаж теплых полов',
      description: 'Установка электрических и водяных систем подогрева пола',
      price: 'от 1 800 ₽/м²'
    },
    {
      id: 12,
      title: 'Демонтажные работы',
      description: 'Чистый демонтаж перегородок, сантехники, старых покрытий',
      price: 'от 200 ₽/м²'
    },
    {
      id: 13,
      title: 'Утепление домов',
      description: 'Теплоизоляция фасадов, кровли, полов и стен современными материалами',
      price: 'от 600 ₽/м²'
    },
    {
      id: 14,
      title: 'Ландшафтный дизайн',
      description: 'Озеленение участка, мощение дорожек, устройство газонов',
      price: 'от 1 500 ₽/м²'
    },
    {
      id: 15,
      title: 'Ремонт офисов',
      description: 'Комплексный ремонт коммерческих помещений любой сложности',
      price: 'от 3 500 ₽/м²'
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Наши услуги</h1>
      <p className={styles.subtitle}>Качественное выполнение строительных работ любой сложности</p>

      <div className={styles.servicesGrid}>
        {services.map(service => (
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
