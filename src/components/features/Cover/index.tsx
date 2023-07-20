import Image from 'next/image';

import imgBg from '../../../../public/assets/images/img-bg.png';
import imgLeaves from '../../../../public/assets/images/img-leaves.png';
import imgPizza from '../../../../public/assets/images/img-pizza.png';
import styles from './styles.module.scss';

export default function Cover() {
  return (
    <section className="container">
      <div className={styles.cover}>
        <div className={styles.coverLeft}>
          <h1 className={styles.coverLeftTitle}>Пицца на заказ</h1>
          <p className={styles.coverLeftText}>
            Бесплатная и быстрая доставка за час в любое удобное для вас время
          </p>
          <button className={styles.coverLeftBtn}>Выбрать пиццу</button>
        </div>
        <div className={styles.coverRight}>
          <Image className={styles.coverRightBg} src={imgBg} alt="img-bg" />
          <Image className={styles.coverRightLeaves} src={imgLeaves} alt="img-leaves" />
          <Image className={styles.coverRightPizza} src={imgPizza} alt="img-pizza" />
        </div>
      </div>
    </section>
  );
}
