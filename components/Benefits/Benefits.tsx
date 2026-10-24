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
            <h4>Навички програмування</h4>
            <p>Luau, скрипти, ігрові механіки</p>
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
            <p>Створення ландшафтів, персонажів та об`єктів</p>
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
            <h4>Розуміння ігрового дизайну</h4>
            <p>Як створювати цікаві рівні, в які хочеться грати</p>
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
            <h4>Реалізація власних ідей</h4>
            <p>Від задуму до готової гри</p>
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
            <h4>Важливі навички майбутнього</h4>
            <p>Логіка, математика, технічна творчість, робота над проектом</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
