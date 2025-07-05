import { AboutSection } from '@/components/AboutSection/AboutSection';
import { ServicesPreview } from '@/components/Services/ServicesPreview';
import { AdvantagesSection } from '@/components/Advantages/AdvantagesSection';
import { GallerySection } from '@/components/Gallery/GallerySection';
import { ContactMap } from '@/components/Contacts/ContactMap';
import { ContactForm } from '@/components/Contacts/ContactForm';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* главная */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Профессиональные строительные услуги в Омске</h1>
          <p>Качество, надёжность и соблюдение сроков</p>
        </div>
      </section>

      {/* Основные секции */}
      <AboutSection />
      <AdvantagesSection />

      {/* Секция услуг (превью) */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наши услуги</h2>
          <ServicesPreview />
          <div className={styles.moreServices}>
            <Link href="/services" className={styles.moreButton}>
              Все услуги →
            </Link>
          </div>
        </div>
      </section>

      <GallerySection />

      {/* Секция контактов */}
      <section className={styles.contactsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Контакты</h2>
          <div className={styles.contactsGrid}>
            <div className={styles.mapContainer}>
              <ContactMap />
            </div>
            <div className={styles.formContainer} id="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
