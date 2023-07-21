/* eslint-disable no-magic-numbers */

'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';

import { showCart } from '@/redux/cart/cartSlice';
import { selectCart, selectCartVisible } from '@/redux/cart/selectors';

import HeaderBurger from '../HeaderBurger';
import HeaderMenu from '../HeaderMenu';
import styles from './styles.module.scss';

export default function Header() {
  const { ref, inView } = useInView({ threshold: 1 });
  const [menuToggle, setMenuToggle] = useState(false);

  const cartVisible = useSelector(selectCartVisible);
  const { items: cartItem } = useSelector(selectCart);
  const dispatch = useDispatch();

  function countPizzaz() {
    let total = 0;
    cartItem.forEach(item => {
      total += item.count;
    });
    return total;
  }

  return (
    <header ref={ref} className={clsx(styles.header, !inView && styles.isScroll)}>
      <div className={`container ${styles.wrapper}`}>
        {/* <Link href="/" className={clsx(styles.logo, menuToggle && styles.logoHide)}> */}
        <Link href="/" className={clsx(styles.logo)}>
          <Image fill src="/assets/icons/logo.svg" alt="logo" />
        </Link>

        <HeaderMenu menuToggle={menuToggle} />

        <a href="tel:+79184326587" className={styles.phone}>
          <div className={styles.phoneWrapImage}>
            <Image fill src="/assets/icons/telephone.svg" alt="logo" />
          </div>
          <div className={styles.phoneText}>
            <h4>+7 (918) 432-65-87</h4>
            <span>Ежедневно с 9:00 до 23:00</span>
          </div>
        </a>

        <div
          className={styles.cart}
          role="presentation"
          onClick={() => dispatch(showCart(!cartVisible && countPizzaz() !== 0))}
        >
          <div className={styles.cartIcon}>
            <div className={styles.cartWrapImage}>
              <Image fill src="/assets/icons/cart.svg" alt="logo" />
            </div>
            <span>{countPizzaz()}</span>
          </div>
          <div className={styles.cartText}>
            <h4 className={styles.cartTextTitle}>ваш заказ</h4>
            <span>
              {cartItem.length > 0 && countPizzaz() < 2 && cartItem[0].name}
              {cartItem.length >= 1 &&
                countPizzaz() === 2 &&
                `${cartItem[0].name} и еще ${countPizzaz() - 1} пицца`}
              {cartItem.length >= 1 &&
                countPizzaz() > 2 &&
                countPizzaz() < 6 &&
                `${cartItem[0].name} и еще ${countPizzaz() - 1} пиццы`}
              {cartItem.length >= 1 &&
                countPizzaz() >= 6 &&
                `${cartItem[0].name} и еще ${countPizzaz() - 1} пицц`}
            </span>
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
