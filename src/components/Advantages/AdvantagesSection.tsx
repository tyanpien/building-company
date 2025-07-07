'use client'; // Добавляем директиву для использования хуков

import { useEffect, useRef } from 'react';
import styles from './AdvantagesSection.module.css';

const advantages = [
  {
    title: "Гарантия",
    description: "Бесплатное устранение любых выявленных недостатков в течение 2 лет с момента сдачи объекта"
  },
  {
    title: "Полный цикл работ",
    description: "От проектирования до мебельного оснащения – все услуги в одной компании"
  },
  {
    title: "Собственное производство",
    description: "Используем только проверенные материалы. Мебельные решения по индивидуальным размерам и дизайн-проектам"
  }
]

export const AdvantagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const setItemRef = (ref: HTMLDivElement | null, index: number) => {
    itemRefs.current[index] = ref;
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши преимущества</h2>
        <div className={styles.grid}>
          {advantages.map((item, index) => (
            <div
              key={index}
              ref={(ref) => setItemRef(ref, index)}
              className={`${styles.item} ${styles.fadeIn}`}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
