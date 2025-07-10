'use client';

import { useState, useEffect } from 'react';
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    let formattedValue = '';

    if (numbers.length > 0) {
      formattedValue = '+7 (';
      if (numbers.length > 1) {
        formattedValue += numbers.substring(1, 4);
      }
      if (numbers.length > 4) {
        formattedValue += ') ' + numbers.substring(4, 7);
      }
      if (numbers.length > 7) {
        formattedValue += '-' + numbers.substring(7, 9);
      }
      if (numbers.length > 9) {
        formattedValue += '-' + numbers.substring(9, 11);
      }
    }

    return formattedValue;
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      phone: '',
      message: ''
    };

    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s-]{2,50}$/;
    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
      isValid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Имя должно содержать только буквы и дефис (2-50 символов)';
      isValid = false;
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits) {
      newErrors.phone = 'Введите номер телефона';
      isValid = false;
    } else if (phoneDigits.length < 11) {
      newErrors.phone = 'Номер должен содержать 11 цифр';
      isValid = false;
    }

    if (formData.message.length > 500) {
      newErrors.message = 'Сообщение не должно превышать 500 символов';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setErrors(prev => ({ ...prev, name: '' }));

    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s-]*$/;
    if (nameRegex.test(value) && value.length <= 50) {
      setFormData(prev => ({ ...prev, name: value }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setErrors(prev => ({ ...prev, phone: '' }));

    const formattedPhone = formatPhone(value);
    setFormData(prev => ({ ...prev, phone: formattedPhone }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setErrors(prev => ({ ...prev, message: '' }));

    if (value.length <= 500) {
      setFormData(prev => ({ ...prev, message: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_dlb0wlr",
        "template_ei65yyg",
        {
          name: formData.name.trim(),
          phone: formData.phone,
          message: formData.message.trim()
        },
        "aGR1yzX5N27kUUhFS"
      );

      setSubmitSuccess(true);
      setFormData({ name: "", phone: "", message: "" });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Произошла ошибка при отправке. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Оставить заявку</h3>

      {submitSuccess && (
        <div className={styles.successMessage}>
          Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Ваше имя <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleNameChange}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="Иван Иванов"
            required
          />
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Телефон <span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ"
            required
          />
          {errors.phone && (
            <span className={styles.errorMessage}>{errors.phone}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Сообщение</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleMessageChange}
            className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            rows={4}
            placeholder="Опишите вашу задачу (до 500 символов)"
          />
          <div className={styles.messageInfo}>
            {errors.message ? (
              <span className={styles.errorMessage}>{errors.message}</span>
            ) : (
              <span className={styles.charCount}>
                {formData.message.length}/500
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
        </button>
      </form>
    </div>
  );
};
