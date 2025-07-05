'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      phone: '',
      message: ''
    };

    // Проверка имени (только буквы и пробелы)
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
      isValid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Имя должно содержать только буквы';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
      isValid = false;
    }

    // Проверка телефона
    const phoneRegex = /^[+]?[\d\s-]+$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
      isValid = false;
    }

    // Проверка сообщения
    if (formData.message.length > 100) {
      newErrors.message = 'Сообщение не должно превышать 100 символов';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      // Очищаем ошибку при изменении
      if (errors.name) {
          setErrors(prev => ({ ...prev, name: '' }));
      }

      // Разрешаем ввод только букв и пробелов
      const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]*$/;
      if (nameRegex.test(value)) {
          setFormData(prev => ({ ...prev, name: value }));
      }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Для имени используем специальный обработчик
    if (name === 'name') {
      handleNameChange(e as React.ChangeEvent<HTMLInputElement>);
      return;
    }

    // Очищаем ошибку при изменении поля
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    await emailjs.send(
      "service_dlb0wlr",
      "template_ei65yyg",
      {
        name: formData.name,
        phone: formData.phone,
        message: formData.message
      },
      "aGR1yzX5N27kUUhFS"
    );

    alert("Заявка отправлена!");
    setFormData({ name: "", phone: "", message: "" });
  } catch (error) {
    alert("Ошибка при отправке.");
    console.error(error);
  }
};

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Оставить заявку</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Ваше имя</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="Введите Ваше имя"
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            placeholder="+7 (XXX) XXX-XX-XX"
          />
          {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Сообщение</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            rows={4}
            placeholder="Максимум 100 символов"
          />
          <div className={styles.messageInfo}>
            {errors.message ? (
              <span className={styles.errorMessage}>{errors.message}</span>
            ) : (
              <span className={styles.charCount}>{formData.message.length}/100</span>
            )}
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>Отправить</button>
      </form>
    </div>
  );
};
