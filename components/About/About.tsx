import Image from 'next/image';
import css from './About.module.css';

export default function About() {
  return (
    <section id="about" className={css.about}>
      <div className={css.content}>
        <h2 className={css.title}>Що таке Roblox Studio?</h2>

        <p className={css.description}>
          Roblox — це популярний метавсесвіт із мільйонами ігор, у які із
          задоволенням грають підлітки. Roblox Studio — це потужна платформа для
          створення власних ігор, яка дозволяє будувати світи, додавати
          персонажів та програмувати всі елементи гри.
        </p>
      </div>

      <div className={css.imageWrapper}>
        <Image
          src="/images/roblox-studio.jpg"
          alt="Інтерфейс Roblox Studio зі створеним 3D-світом"
          width={640}
          height={360}
          className={css.image}
        />
      </div>
    </section>
  );
}
