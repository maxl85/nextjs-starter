import Image from 'next/image';

import styles from './styles.module.scss';

export default function Delivery() {
  return (
    <section className={styles.delivery}>
      <div className="container">
        <h2 className={styles.deliveryTitle}>Доставка и оплата</h2>
        <div className={styles.deliveryGrid}>
          <div className={styles.deliveryGridBlock}>
            <div className={styles.deliveryGridBlockIcon}>
              <Image fill src="/assets/icons/delivery-order.svg" alt="Icon" />
            </div>
            <div>
              <span className={styles.deliveryGridBlockTitle}>Заказ</span>
              <span className={styles.deliveryGridBlockText}>
                После оформления заказа мы&nbsp;свяжемся с&nbsp;вами для уточнения деталей.
              </span>
            </div>
          </div>

          <div className={styles.deliveryGridBlock}>
            <div className={styles.deliveryGridBlockIcon}>
              <Image fill src="/assets/icons/delivery-delivery.svg" alt="Icon" />
            </div>
            <div>
              <span className={styles.deliveryGridBlockTitle}>Доставка курьером</span>
              <span className={styles.deliveryGridBlockText}>
                Мы&nbsp;доставим вашу пиццу горячей. Бесплатная доставка по&nbsp;городу.
              </span>
            </div>
          </div>

          <div className={styles.deliveryGridBlock}>
            <div className={styles.deliveryGridBlockIcon}>
              <Image fill src="/assets/icons/delivery-payment.svg" alt="Icon" />
            </div>
            <div>
              <span className={styles.deliveryGridBlockTitle}>Оплата</span>
              <span className={styles.deliveryGridBlockText}>
                Оплатить можно наличными или картой курьеру. И&nbsp;золотом тоже можно.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
