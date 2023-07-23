'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import styles from './HeaderMenu.module.scss';

interface Props {
  menuToggle: boolean;
}

export default function HeaderMenu({ menuToggle }: Props) {
  return (
    <nav className={clsx(styles.nav, menuToggle && styles.menuToggle)}>
      <Image
        className={styles.navLogo}
        src="/assets/icons/logo-invert.svg"
        width={85}
        height={39}
        alt="logo"
      />

      <div className={styles.navList}>
        <div className={styles.navListItem}>
          <Link href="#">меню</Link>
        </div>
        <div className={styles.navListItem}>
          <Link href="#">о&nbsp;нас</Link>
        </div>
        <div className={styles.navListItem}>
          <Link href="#">контакты</Link>
        </div>
      </div>

      <div className={styles.navInfo}>
        <div className={styles.navInfoTitle}>заказать по&nbsp;телефону</div>
        <a className={styles.navInfoPhone} href="tel:+79184326587">
          +7 (918) 432-65-87
        </a>
        <div className={styles.navInfoTime}>Ежедневно с&nbsp;9:00 до&nbsp;23:00</div>
      </div>

      <Link href="#" className={styles.navLanguage}>
        English
      </Link>
    </nav>
  );
}
