/* eslint-disable no-magic-numbers */

'use client';

import { clsx } from 'clsx';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useCartQuery } from '@/hooks/queries/cart';
import { useStore } from '@/hooks/useStore';

import HeaderBurger from '../HeaderBurger';
import HeaderMenu from '../HeaderMenu';
import styles from './Header.module.scss';

function Header() {
  const { ref, inView } = useInView({ threshold: 1 });
  const [menuToggle, setMenuToggle] = useState(false);
  const { data: cartItems } = useCartQuery();
  const store = useStore();

  function countPizzaz() {
    let total = 0;
    cartItems?.forEach(item => {
      total += item.quantity;
    });
    return total;
  }

  return (
    <header ref={ref} className={clsx(styles.header, !inView && styles.isScroll)}>
      <div className={`container ${styles.wrapper}`}>
        <Link href="/" className={clsx(styles.logo)}>
          <Image fill src="/assets/icons/logo.svg" alt="logo" />
        </Link>

        <HeaderMenu menuToggle={menuToggle} />

        <a href="tel:+79184326587" className={styles.phone}>
          <div className={styles.phoneWrapImage}>
            <Image fill src="/assets/icons/telephone.svg" alt="logo" />
          </div>
          <div className={styles.phoneWrap}>
            <div className={styles.phoneText}>+7 (918) 432-65-87</div>
            <div className={styles.phoneTime}>Ежедневно с 9:00 до 23:00</div>
          </div>
        </a>

        <div
          className={styles.cart}
          role="presentation"
          onClick={() => store.showCart(!store.cartVisible && countPizzaz() !== 0)}
        >
          <div className={styles.cartIcon}>
            <div className={styles.cartWrapImage}>
              <Image fill src="/assets/icons/cart.svg" alt="logo" />
            </div>
            <div className={styles.cartIconBadge}>{countPizzaz()}</div>
          </div>
          <div className={styles.cartText}>
            <div className={styles.cartTextTitle}>ваш заказ</div>
            <div className={styles.cartTextCount}>
              {cartItems && cartItems.length > 0 && countPizzaz() < 2 && cartItems[0].product.name}
              {cartItems &&
                cartItems.length >= 1 &&
                countPizzaz() === 2 &&
                `${cartItems[0].product.name} и еще ${countPizzaz() - 1} пицца`}
              {cartItems &&
                cartItems.length >= 1 &&
                countPizzaz() > 2 &&
                countPizzaz() < 6 &&
                `${cartItems[0].product.name} и еще ${countPizzaz() - 1} пиццы`}
              {cartItems &&
                cartItems.length >= 1 &&
                countPizzaz() >= 6 &&
                `${cartItems[0].product.name} и еще ${countPizzaz() - 1} пицц`}
            </div>
          </div>
        </div>

        <Link href="#" className={styles.language}>
          <span>EN</span>
        </Link>

        <HeaderBurger menuToggle={menuToggle} onClick={() => setMenuToggle(!menuToggle)} />
      </div>
    </header>
  );
}

export default observer(Header);
