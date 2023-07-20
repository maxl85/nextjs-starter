/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiSolidMinusCircle, BiSolidPlusCircle } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import { decCount, incCount, removeItem, showCart } from '@/redux/cart/cartSlice';
import { selectCart, selectCartVisible } from '@/redux/cart/selectors';

import SizeIcon from '../../../../public/assets/icons/size.svg';
import styles from './styles.module.scss';

interface CartForm {
  name: string;
  phone: string;
  address: string;
}

export default function Cart() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<CartForm>({
    mode: 'onBlur',
  });

  const cartVisible = useSelector(selectCartVisible);
  const { items, totalPrice } = useSelector(selectCart);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<CartForm> = data => console.log(data);

  return (
    <div className={clsx(styles.cart, cartVisible && styles.visible)}>
      <div
        className={styles.cartBg}
        role="presentation"
        onClick={() => dispatch(showCart(false))}
      />

      <div className={styles.cartModal}>
        <h3 className={styles.cartTitle}>Ваш заказ</h3>
        <button
          className={styles.cartCloseBtn}
          type="button"
          onClick={() => dispatch(showCart(false))}
        >
          <IoClose />
        </button>

        <ul className={styles.cartList}>
          {items.map((item, i) => (
            <li key={i} className={styles.cartItem}>
              <div className={styles.cartItemImage}>
                <div className={styles.cartItemImageWrapIcon}>
                  {item.type.map((value, i) => (
                    <div key={i} className={styles.cartItemImageIcon}>
                      <Image fill src={`/assets/icons/type/${value}.svg`} alt="icon" />
                    </div>
                  ))}
                </div>

                <SizeIcon className={styles.cartItemImageSizeL} />
                <SizeIcon className={styles.cartItemImageSizeM} />

                <div
                  className={clsx(
                    styles.cartItemImagePizza,
                    item.activeSize === 2 && styles.sizeL,
                    item.activeSize === 1 && styles.sizeM,
                    item.activeSize === 0 && styles.sizeS
                  )}
                >
                  <Image fill src={item.image} alt="pizza" />
                </div>
              </div>

              <div className={styles.cartItemPizza}>
                <p className={styles.cartItemPizzaName}>{item.name}</p>
                <p className={styles.cartItemPizzaSize}>{`${item.size} см`}</p>
              </div>

              <div className={styles.cartItemCount}>
                <button
                  className={styles.cartItemCountBtn}
                  type="button"
                  disabled={item.count === 1}
                  onClick={() => dispatch(decCount(item))}
                >
                  <BiSolidMinusCircle />
                </button>
                <input disabled className={styles.cartItemCountInput} value={item.count} />
                <button
                  className={styles.cartItemCountBtn}
                  type="button"
                  onClick={() => dispatch(incCount(item))}
                >
                  <BiSolidPlusCircle />
                </button>
              </div>

              <p className={styles.cartItemPrice}>{`${item.price * item.count} руб`}</p>

              <button
                className={styles.cartItemDelBtn}
                type="button"
                onClick={() => dispatch(removeItem(item))}
              >
                <IoClose />
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.cartTotal}>
          <span className={styles.cartTotalText}>Сумма заказа :</span>
          <span className={styles.cartTotalSum}>{`${totalPrice} руб`}</span>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.formTitle}>Контакты</p>
          <div className={styles.formTwoInputs}>
            <div
              className={clsx(
                styles.formWrap,
                errors.name && styles.error,
                getValues('name') && styles.good
              )}
            >
              <input
                className={styles.formWrapInput}
                {...register('name', { required: true, minLength: 1 })}
              />
              <label className={styles.formWrapLable}>Ваше имя</label>
            </div>
            <div
              className={clsx(
                styles.formWrap,
                errors.phone && styles.error,
                getValues('phone') && styles.good
              )}
            >
              <input
                className={styles.formWrapInput}
                {...register('phone', { required: true, minLength: 1 })}
              />
              <label className={styles.formWrapLable}>Телефон</label>
            </div>
          </div>

          <div
            className={clsx(
              styles.formWrap,
              errors.address && styles.error,
              getValues('address') && styles.good
            )}
          >
            <input
              className={styles.formWrapInput}
              {...register('address', { required: true, minLength: 1 })}
            />
            <label className={styles.formWrapLable}>Адрес доставки</label>
          </div>

          <div className={styles.formPay}>
            <p className={styles.formTitle}>Способ оплаты</p>

            <div className={styles.formPayWrapRadio}>
              <input className={styles.formPayRadio} type="radio" name="payment" id="paymentCash" />
              <label className={styles.formPayLabel} htmlFor="paymentCash">
                Оплата наличными или картой курьеру
              </label>
            </div>

            <div className={styles.formPayWrapRadio}>
              <input
                className={styles.formPayRadio}
                type="radio"
                name="payment"
                id="paymentOnline"
              />
              <label className={styles.formPayLabel} htmlFor="paymentOnline">
                Оплата картой онлайн на сайте
              </label>
            </div>
          </div>

          <button className={styles.formBuyBtn} type="submit">
            Оформить заказ
          </button>

          <p className={styles.formPolicy}>
            Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </div>
    </div>
  );
}
