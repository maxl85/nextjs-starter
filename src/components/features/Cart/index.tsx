/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { clsx } from 'clsx';
import { observer } from 'mobx-react-lite';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';

import { useStore } from '@/hooks/useStore';

import styles from './Cart.module.scss';

interface CartForm {
  name: string;
  phone: string;
  address: string;
}

function Cart() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<CartForm>({
    mode: 'onBlur',
  });

  // const cartVisible = false;
  // const cartVisible = useSelector(selectCartVisible);
  // const { items, totalPrice } = useSelector(selectCart);
  // const dispatch = useDispatch();

  const store = useStore();

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<CartForm> = data => console.log(data);

  return (
    <div className={clsx(styles.cart, store.cartVisible && styles.visible)}>
      <div className={styles.cartBg} role="presentation" onClick={() => store.showCart(false)} />

      <div className={styles.cartModal}>
        <div className={styles.cartTitle}>Ваш заказ</div>
        <button className={styles.cartCloseBtn} type="button" onClick={() => store.showCart(false)}>
          <IoClose />
        </button>

        {/* <div className={styles.cartList}>
          {items.map((item, i) => (
            <div key={i} className={styles.cartItem}>
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
                <div className={styles.cartItemPizzaName}>{item.name}</div>
                <div className={styles.cartItemPizzaSize}>{`${item.size} см`}</div>
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

              <div className={styles.cartItemPrice}>{`${item.price * item.count} руб`}</div>

              <button
                className={styles.cartItemDelBtn}
                type="button"
                onClick={() => dispatch(removeItem(item))}
              >
                <IoClose />
              </button>
            </div>
          ))}
        </div> */}

        {/* <div className={styles.cartTotal}>
          <span className={styles.cartTotalText}>Сумма заказа :</span>
          <span className={styles.cartTotalSum}>{`${totalPrice} руб`}</span>
        </div> */}

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formTitle}>Контакты</div>
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
            <div className={styles.formTitle}>Способ оплаты</div>

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

          <div className={styles.formPolicy}>
            Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой конфиденциальности
          </div>
        </form>
      </div>
    </div>
  );
}

export default observer(Cart);
