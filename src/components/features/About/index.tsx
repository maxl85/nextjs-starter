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
              Изготавливаем пиццу по&nbsp;своим рецептам в&nbsp;лучших традициях
            </span>
            <span className={styles.aboutBlockText}>
              Наша пицца получается сочной, вкусной и&nbsp;главное хрустящей с&nbsp;нежной
              и&nbsp;аппетитной начинкой, готовим по&nbsp;своим итальянским рецептам
            </span>
          </div>
        </div>

        <div className={clsx(styles.aboutBlock)}>
          <Image className={styles.aboutBlockImage} src={imgAbout02} alt="about02" />
          <div>
            <span className={styles.aboutBlockTitle}>Используем только свежие ингридиенты</span>
            <span className={styles.aboutBlockText}>
              Ежедневно заготавливаем продукты и&nbsp;овощи для наших пицц, соблюдаем все сроки
              хранения
            </span>
          </div>
        </div>

        <div className={styles.aboutBlock}>
          <Image className={styles.aboutBlockImage} src={imgAbout03} alt="about03" />
          <div>
            <span className={styles.aboutBlockTitle}>
              Доставка в&nbsp;течение 60&nbsp;минут или заказ за&nbsp;нас счёт
            </span>
            <span className={styles.aboutBlockText}>
              Все наши курьеры&nbsp;&mdash; фанаты серии Need for Speed и&nbsp;призеры гонок World
              Rally Championship и&nbsp;World Superbike во&nbsp;всех категориях
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
