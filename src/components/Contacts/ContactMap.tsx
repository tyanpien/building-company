import styles from './ContactMap.module.css';

export const ContactMap = () => {
  return (
    <div className={styles.mapContainer}>
      <h3 className={styles.mapTitle}>Мы находимся</h3>
      <div className={styles.mapWrapper}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a87aecd89a63d249b98925e04432b2acee5d8efb08c278f44689ab0fca6c4c7&amp;source=constructor"
          width="100%"
          height="400"
          frameBorder="0"
          className={styles.map}
        ></iframe>
      </div>
      <div className={styles.address}>
        <p>г. Омск, улица Волховстроя, 94</p>
        <p>Телефон: +7 (999) 123-45-67</p>
        <p>Email: building0msk@gmail.com</p>
        <p>Часы работы: с 9:00 до 18:00</p>
      </div>
    </div>
  );
};
