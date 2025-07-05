import styles from './ServicesList.module.css'

const services = [
  {
    id: 1,
    title: "Ремонт квартир",
    description: "Полный комплекс ремонтных работ любой сложности"
  },
  {
    id: 2,
    title: "Строительство домов",
    description: "Возведение частных домов под ключ"
  },
  {
    id: 3,
    title: "Отделочные работы",
    description: "Качественная отделка помещений"
  }
]

export const ServicesList = () => {
  return (
    <div className={styles.list}>
      {services.map(service => (
        <div key={service.id} className={styles.card}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  )
}
