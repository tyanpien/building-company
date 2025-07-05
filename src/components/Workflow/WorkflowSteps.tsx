import styles from './WorkflowSteps.module.css';

const steps = [
  {
    id: 1,
    title: "Консультация",
    description: "Обсуждение ваших потребностей и составление плана работ"
  },
  {
    id: 2,
    title: "Замеры и расчет",
    description: "Выезд специалиста, точные замеры и расчет стоимости"
  },
  {
    id: 3,
    title: "Договор",
    description: "Заключение договора с фиксированной стоимостью и сроками"
  },
  {
    id: 4,
    title: "Выполнение работ",
    description: "Качественное выполнение всех этапов строительства"
  },
  {
    id: 5,
    title: "Сдача объекта",
    description: "Приемка работ и гарантийные обязательства"
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
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
