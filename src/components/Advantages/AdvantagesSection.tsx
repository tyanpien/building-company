import styles from './AdvantagesSection.module.css'

const advantages = [
  {
    title: "Качество",
    description: "Используем только проверенные материалы"
  },
  {
    title: "Опыт",
    description: "Более 8 лет на рынке строительных услуг"
  },
  {
    title: "Гарантия",
    description: "Предоставляем гарантию на все работы"
  }
]

export const AdvantagesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши преимущества</h2>
        <div className={styles.grid}>
          {advantages.map((item, index) => (
            <div key={index} className={styles.item}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
