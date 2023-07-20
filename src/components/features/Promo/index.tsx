import Image from 'next/image';

import { slides } from '../../../data/promo';
import styles from './styles.module.scss';

export default function Promo() {
  return (
    <section className="container">
      <div className={styles.promo}>
        {slides.map(slide => (
          <div key={slide.id}>
            <div className={styles.promoImage}>
              <Image
                fill
                src={slide.url}
                style={{ objectFit: 'contain' }}
                alt={`event-${slide.id}`}
              />
            </div>
            <p className={styles.promoTitle}>{slide.title}</p>
            <p className={styles.promoText}>{slide.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
