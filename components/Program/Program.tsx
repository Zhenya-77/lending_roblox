import css from './Program.module.css';
import Image from 'next/image';

export default function Program() {
  return (
    <section id="program" className={css.program}>
      <h2 className={css.title}>Програма курсу</h2>

      <div className={css.modules}>
        <div className={css.card}>
          <h3 className={css.cardTitle}>
            Основи Roblox Studio. Створення ігрового світу
          </h3>
          <ul className={css.topics}>
            <li>Інтерфейс і інструменти</li>
            <li>3D-простір, координати</li>
            <li>Властивості об’єктів, фізика</li>
            <li>Перша гра без програмування (паркур)</li>
          </ul>
          <div className={css.imageWrapper}>
            <Image
              src="/images/obby.jpg"
              alt="Паркур у Roblox"
              width={320}
              height={160}
              className={css.image}
            />
            <p className={css.imageLabel}>Паркур (Obby)</p>
          </div>
        </div>

        <div className={css.card}>
          <h3 className={css.cardTitle}>Основи програмування Luau</h3>
          <ul className={css.topics}>
            <li>Скрипти та змінні</li>
            <li>Події і взаємодія</li>
            <li>Умовні оператори та логіка</li>
            <li>Програмування паркуру з балами та бонусами</li>
          </ul>
          <div className={css.imageWrapper}>
            <Image
              src="/images/luau.jpg"
              alt="Паркур у Roblox"
              width={320}
              height={160}
              className={css.image}
            />
            <p className={css.imageLabel}>Скрипти і механіки</p>
          </div>
        </div>

        <div className={css.card}>
          <h3 className={css.cardTitle}>
            Математика, фізика та створення Runner
          </h3>
          <ul className={css.topics}>
            <li>Рух, відстань, швидкість</li>
            <li>Цикли та повторення</li>
            <li>Випадкові події</li>
            <li>Створення гри Runner з перешкодами</li>
          </ul>
          <div className={css.imageWrapper}>
            <Image
              src="/images/runner.jpg"
              alt="Паркур у Roblox"
              width={320}
              height={160}
              className={css.image}
            />
            <p className={css.imageLabel}>Гра Runner</p>
          </div>
        </div>

        <div className={css.card}>
          <h3 className={css.cardTitle}>Моделювання персонажів. Zombie Rush</h3>
          <ul className={css.topics}>
            <li>Створення NPC</li>
            <li>Поведінка ворогів (AI)</li>
            <li>Здоров’я, пошкодження</li>
            <li>Генерація ворогів і хвилі</li>
            <li>Повноцінна гра Zombie Rush</li>
          </ul>
          <div className={css.imageWrapper}>
            <Image
              src="/images/zombie-rush.jpg"
              alt="Паркур у Roblox"
              width={320}
              height={160}
              className={css.image}
            />
            <p className={css.imageLabel}>Zombie Rush</p>
          </div>
        </div>

        <div className={css.card}>
          <h3 className={css.cardTitle}>Ігровий дизайн та власна гра</h3>
          <ul className={css.topics}>
            <li>Ігрове середовище та атмосфера</li>
            <li>Психологія гравця</li>
            <li>Інтерфейс і звук</li>
            <li>Розробка, тестування та презентація власної гри</li>
          </ul>
          <div className={css.imageWrapper}>
            <Image
              src="/images/final-game.jpg"
              alt="Паркур у Roblox"
              width={320}
              height={160}
              className={css.image}
            />
            <p className={css.imageLabel}>Власна гра та презентація</p>
          </div>
        </div>
      </div>
    </section>
  );
}
