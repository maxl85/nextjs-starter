import Link from 'next/link';

import Logo from '../../../../public/assets/icons/logo-invert.svg';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <Link href="/" className={styles.logo}>
          <Logo />
        </Link>
        <div className={styles.phone}>
          <a href="tel:+79184326587">+7 (918) 432-65-87</a>
          <span>Ежедневно с 9:00 до 23:00</span>
        </div>
        <Link href="/" className={styles.confidencial}>
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
}
