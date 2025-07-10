import { WorkflowSteps } from '@/components/Workflow/WorkflowSteps';
import { ContactMap } from '@/components/Contacts/ContactMap';
import { ContactForm } from '@/components/Contacts/ContactForm';
import styles from './page.module.css';

export default function WorkflowPage() {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>Как мы работаем</h1>
        <p className={styles.sectionSubtitle}>Чёткие этапы идеального ремонта</p>
        <WorkflowSteps />
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Наши контакты</h2>
        <div className={styles.contactsGrid} id="contact-form">
          <ContactMap />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
