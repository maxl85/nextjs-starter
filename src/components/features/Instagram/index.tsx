import Image from 'next/image';
import Link from 'next/link';

import { imgLink } from '../../../data/instagram';
import styles from './styles.module.scss';

export default function Instagram() {
  return (
    <section className="inst">
      <h2 className={styles.instTitle}>Следите за нами в Instagram</h2>
      <Link href="#">
        <h4 className={styles.instUser}>@pizzamenu</h4>
      </Link>

      <div className={styles.instGrid}>
        {imgLink.map(item => (
          <Link key={item} href="#" className={styles.instGridImage}>
            <Image
              fill
              src={item}
              sizes="(max-width: 768px) 100vw"
              style={{ objectFit: 'contain' }}
              alt="instagram"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
