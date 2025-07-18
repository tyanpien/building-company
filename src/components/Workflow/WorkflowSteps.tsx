import styles from './WorkflowSteps.module.css';

const steps = [
  {
    id: 1,
    title: "Бесплатная консультация",
    description: [
      "Анализ ваших потребностей и пожеланий",
      "Рекомендации по материалам и планировке",
      "Предварительная оценка сложности работ",
      "Ответы на все ваши вопросы"
    ],
  },
  {
    id: 2,
    title: "Выезд специалиста и расчет",
    description: [
      "Бесплатный выезд инженера-замерщика",
      "Точные замеры помещения",
      "Составление детальной сметы",
      "3D-визуализация будущего ремонта",
      "Окончательное согласование стоимости"
    ],
  },
  {
    id: 3,
    title: "Заключение договора",
    description: [
      "Фиксация всех условий в договоре",
      "Прозрачное ценообразование без скрытых платежей",
      "Гарантия сроков выполнения",
      "Гибкие варианты оплаты",
      "Страхование ответственности"
    ],
  },
  {
    id: 4,
    title: "Подготовка и начало работ",
    description: [
      "Доставка материалов на объект",
      "Защита мебели и поверхностей",
      "Ежедневная уборка рабочей зоны",
      "Фотоотчеты о ходе работ",
      "Контроль качества на каждом этапе"
    ],
  },
  {
    id: 5,
    title: "Основные этапы ремонта",
    description: [
      "Демонтажные работы (при необходимости)",
      "Черновая отделка: стены, полы, потолки",
      "Разводка инженерных коммуникаций",
      "Чистовая отделка",
      "Установка сантехники и электрофурнитуры"
    ],
  },
  {
    id: 6,
    title: "Завершение и сдача объекта",
    description: [
      "Финальная уборка помещения",
      "Проверка всех систем",
      "Составление акта сдачи-приемки",
      "Выдача гарантийных документов",
      "Консультация по эксплуатации"
    ],
  }
];

export const WorkflowSteps = () => {
  return (
    <div className={styles.timeline}>
      {steps.map((step, index) => (
        <div key={step.id} className={styles.step}>
          <div className={styles.number}>{index + 1}</div>
          <div className={styles.content}>
            <h3 className={styles.stepTitle}>{step.title}</h3>
              <ul className={styles.stepList}>
                {step.description.map((item, i) => (
                  <li key={i} className={styles.stepListItem}>{item}</li>
                ))}
              </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
