import { LuBookOpen } from 'react-icons/lu';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <a href="#" className={css.logo}>
        <LuBookOpen className={css.logoIcon} />
        <span className={css.logoText}>
          Навчальний центр
          <br />
          При українській школі «Ерудит» у Відні
        </span>
      </a>
      <ul className={css.nav}>
        <li>
          <a href="#about">Про курс</a>
        </li>
        <li>
          <a href="#program">Програма</a>
        </li>
        <li>
          <a href="#benefits">Результати</a>
        </li>
        <li>
          <a href="">Відгуки</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
      </ul>
      <a href="#contact" className={css.headerButton}>
        Записатися на курс →
      </a>
    </header>
  );
}
