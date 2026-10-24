import {
  FaCode,
  FaCube,
  FaGamepad,
  FaUsers,
  FaChartLine,
} from 'react-icons/fa6';

import css from './Benefits.module.css';

export default function Benefits() {
  return (
    <section id="benefits" className={css.benefits}>
      <h2>Що отримає учасник курсу</h2>
      <ul>
        <li>
          <span
            className={css.benefitIcon}
            style={{ backgroundColor: '#00cfff' }}
          >
            <FaCode />
          </span>
          <div className={css.benefitText}>
            <h4>Програмування на Luau</h4>
            <p>Скрипти, події, логіка, ігрові механіки</p>
          </div>
        </li>
        <li>
          <span
            className={css.benefitIcon}
            style={{ backgroundColor: '#ff4f87' }}
          >
            <FaCube />
          </span>
          <div className={css.benefitText}>
            <h4>3D-моделювання</h4>
            <p>Ландшафти, персонажі, об`єкти</p>
          </div>
        </li>
        <li>
          <span
            className={css.benefitIcon}
            style={{ backgroundColor: '#39d98a' }}
          >
            <FaGamepad />
          </span>
          <div className={css.benefitText}>
            <h4>Ігровий дизайн</h4>
            <p>Рівні, завдання, баланс, цікавість</p>
          </div>
        </li>
        <li>
          <span
            className={css.benefitIcon}
            style={{ backgroundColor: '#ffc247' }}
          >
            <FaUsers />
          </span>
          <div className={css.benefitText}>
            <h4>Власні проєкти</h4>
            <p>Повноцінна гра і презентація</p>
          </div>
        </li>
        <li>
          <span
            className={css.benefitIcon}
            style={{ backgroundColor: '#a78bfa' }}
          >
            <FaChartLine />
          </span>
          <div className={css.benefitText}>
            <h4>Розвиток навичок</h4>
            <p>Математика, фізика, креативність, логіка</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
