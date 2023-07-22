import clsx from 'clsx';
import Image from 'next/image';

import imgAbout01 from '../../../../public/assets/images/about01.png';
import imgAbout02 from '../../../../public/assets/images/about02.png';
import imgAbout03 from '../../../../public/assets/images/about03.png';
import styles from './styles.module.scss';

export default function About() {
  return (
    <section className="container">
      <div className={styles.about}>
        <div className={styles.aboutBlock}>
          <Image className={styles.aboutBlockImage} src={imgAbout01} alt="about01" />
          <div>
            <span className={styles.aboutBlockTitle}>
              Изготавливаем пиццу по своим рецептам в лучших традициях
            </span>
            <span className={styles.aboutBlockText}>
              Наша пицца получается сочной, вкусной и главное хрустящей с нежной и аппетитной
              начинкой, готовим по своим итальянским рецептам
            </span>
          </div>
        </div>

        <div className={clsx(styles.aboutBlock)}>
          <Image className={styles.aboutBlockImage} src={imgAbout02} alt="about02" />
          <div>
            <span className={styles.aboutBlockTitle}>Используем только свежие ингридиенты</span>
            <span className={styles.aboutBlockText}>
              Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем все сроки хранения
            </span>
          </div>
        </div>

        <div className={styles.aboutBlock}>
          <Image className={styles.aboutBlockImage} src={imgAbout03} alt="about03" />
          <div>
            <span className={styles.aboutBlockTitle}>
              Доставка в течение 60 минут или заказ за нас счёт
            </span>
            <span className={styles.aboutBlockText}>
              Все наши курьеры – фанаты серии Need for Speed и призеры гонок World Rally
              Championship и World Superbike во всех категориях
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
