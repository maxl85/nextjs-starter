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
              <h4 className={styles.deliveryGridBlockTitle}>Заказ</h4>
              <p className={styles.deliveryGridBlockText}>
                После оформления заказа мы свяжемся с вами для уточнения деталей.
              </p>
            </div>
          </div>

          <div className={styles.deliveryGridBlock}>
            <div className={styles.deliveryGridBlockIcon}>
              <Image fill src="/assets/icons/delivery-delivery.svg" alt="Icon" />
            </div>
            <div>
              <h4 className={styles.deliveryGridBlockTitle}>Доставка курьером</h4>
              <p className={styles.deliveryGridBlockText}>
                Мы доставим вашу пиццу горячей. Бесплатная доставка по городу.
              </p>
            </div>
          </div>

          <div className={styles.deliveryGridBlock}>
            <div className={styles.deliveryGridBlockIcon}>
              <Image fill src="/assets/icons/delivery-payment.svg" alt="Icon" />
            </div>
            <div>
              <h4 className={styles.deliveryGridBlockTitle}>Оплата</h4>
              <p className={styles.deliveryGridBlockText}>
                Оплатить можно наличными или картой курьеру. И золотом тоже можно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
