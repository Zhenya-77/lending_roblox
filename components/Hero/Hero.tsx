import {
  FaCode,
  FaCube,
  FaGamepad,
  FaUsers,
  FaChartLine,
} from 'react-icons/fa6';
import Header from '../Header/Header';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero}>
      <Header />
      <div className={css.heroContent}>
        <h1 className={css.heroTitle}>
          РОЗРОБКА ІГОР В
          <br />
          <span className={css.roblox}>ROBLOX</span>
          <span className={css.studio}> STUDIO</span>
        </h1>
        <h2 className={css.heroSubtitle}>
          Всі ідеї до власної гри в популярному метавсесвіті
        </h2>
        <p className={css.heroDescription}>
          Навчимо створювати власні ігри у Roblox Studio: моделювати 3D-світи,
          програмувати, додавати персонажів та робити захопливі ігрові рівні, в
          які хочеться грати
        </p>
        <div className={css.heroActions}>
          <a href="#contact" className={css.primaryButton}>
            Записатися на курс →
          </a>
          <a href="#about" className={css.secondaryButton}>
            Дізнатись більше ↓
          </a>
        </div>
      </div>
      <div className={css.benefits}>
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
      </div>
    </section>
  );
}
