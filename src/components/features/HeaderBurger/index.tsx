'use client';

import clsx from 'clsx';

import styles from './HeaderBurger.module.scss';

interface Props {
  onClick?: React.MouseEventHandler;
  menuToggle: boolean;
}

export default function HeaderBurger({ onClick, menuToggle }: Props) {
  return (
    <button
      className={clsx(styles.burger, menuToggle && styles.menuToggle)}
      type="button"
      onClick={onClick}
    >
      <div className={styles.burgerIcon}>
        <div className={styles.burgerLine} />
        <div className={styles.burgerLine} />
        <div className={styles.burgerLine} />
      </div>
    </button>
  );
}
