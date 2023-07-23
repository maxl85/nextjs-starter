import Image from 'next/image';
import Link from 'next/link';

import { imgLink } from '../../../data/instagram';
import styles from './styles.module.scss';

export default function Instagram() {
  return (
    <section className="inst">
      <h2 className={styles.instTitle}>Следите за&nbsp;нами в&nbsp;Instagram</h2>
      <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.instUser}>
        @pizzamenu
      </Link>

      <div className={styles.instGrid}>
        {imgLink.map(item => (
          <div key={item} className={styles.instGridImage}>
            <Image
              fill
              src={item}
              sizes="(max-width: 768px) 100vw"
              style={{ objectFit: 'contain' }}
              alt="instagram"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
