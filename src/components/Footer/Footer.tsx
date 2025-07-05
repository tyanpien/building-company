import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>ООО «БИЛДИНГ»</h3>
            <p>г. Омск, улица Волховстроя, 94</p>
            <p>ИНН: 5507255990</p>
          </div>
          <div className={styles.contacts}>
            <h3>Контакты</h3>
            <p>Телефон: +7 (999) 123-45-67</p>
            <p>Email: building0msk@gmail.com</p>
          </div>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} ООО «БИЛДИНГ». Все права защищены.
        </div>
      </div>
    </footer>
  );
};
