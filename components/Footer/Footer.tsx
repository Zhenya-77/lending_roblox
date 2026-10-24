'use client';

import { Field, Form, Formik } from 'formik';
import css from './Footer.module.css';
import { FaLightbulb, FaChartLine, FaUsers, FaRocket } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer id="contact" className={css.footer}>
      <div className={css.content}>
        <h2 className={css.title}>
          Створи свою гру у світі, де грають мільйони!
        </h2>

        <p className={css.description}>
          Запишіть дитину на курс і допоможіть їй перетворити захоплення іграми
          на реальні навички майбутнього.
        </p>

        <ul className={css.benefits}>
          <li className={css.benefitItem}>
            <FaLightbulb />
            <span>Креативність</span>
          </li>
          <li className={css.benefitItem}>
            <FaChartLine />
            <span>Логіка</span>
          </li>
          <li className={css.benefitItem}>
            <FaUsers />
            <span>Проєктна робота</span>
          </li>
          <li className={css.benefitItem}>
            <FaRocket />
            <span>Нові можливості</span>
          </li>
        </ul>
      </div>

      <div className={css.formWrapper}>
        <h3 className={css.formTitle}>Запишіть дитину на курс</h3>

        <Formik
          initialValues={{
            name: '',
            contact: '',
            age: '',
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className={css.form}>
            <Field
              className={css.input}
              name="name"
              type="text"
              placeholder="Ваше ім'я"
            />

            <Field
              className={css.input}
              name="contact"
              type="text"
              placeholder="Телефон або email"
            />

            <Field
              className={css.input}
              name="age"
              type="number"
              placeholder="Вік дитини (наприклад, 12 років)"
            />

            <button className={css.submitButton} type="submit">
              Надіслати заявку →
            </button>
          </Form>
        </Formik>

        <p className={css.note}>
          Ми зв’яжемося з вами, щоб розповісти про програму курсу та умови
          участі.
        </p>
      </div>
    </footer>
  );
}
