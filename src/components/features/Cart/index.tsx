/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-secrets/no-secrets */

'use client';

import { clsx } from 'clsx';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiSolidMinusCircle, BiSolidPlusCircle } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

import { useAddToCart, useCartQuery, useDeleteCart, useReduceCart } from '@/hooks/queries/cart';
import { useCreateOrder } from '@/hooks/queries/order';
import { useStore } from '@/hooks/useStore';

import SizeIcon from '../../../../public/assets/icons/size.svg';
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
    reset,
  } = useForm<CartForm>({
    mode: 'onBlur',
  });

  const store = useStore();
  const { data: cartItems, isSuccess } = useCartQuery();
  const addToCart = useAddToCart();
  const reduceCart = useReduceCart();
  const deleteCart = useDeleteCart();
  const createOrder = useCreateOrder();

  const onSubmit: SubmitHandler<CartForm> = data => {
    createOrder.mutate({
      requestBody: {
        userName: data.name,
        phone: data.phone,
        address: data.address,
        payment: 0,
      },
    });
    reset();
    // eslint-disable-next-line no-alert
    alert('Заказ оформлен');
  };

  return (
    <div className={clsx(styles.cart, store.cartVisible && styles.visible)}>
      <div className={styles.cartBg} role="presentation" onClick={() => store.showCart(false)} />

      <div className={styles.cartModal}>
        <div className={styles.cartTitle}>Ваш заказ</div>
        <button className={styles.cartCloseBtn} type="button" onClick={() => store.showCart(false)}>
          <IoClose />
        </button>

        {isSuccess && (
          <div className={styles.cartList}>
            {cartItems?.map((item, i) => (
              <div key={i} className={styles.cartItem}>
                <div className={styles.cartItemImage}>
                  {/* <div className={styles.cartItemImageWrapIcon}>
                    <div className={styles.cartItemImageIcon}>
                      <Image
                        fill
                        src={`${process.env.NEXT_PUBLIC_BACK_URL}/category/image/${item.product.category.image}`}
                        alt="icon"
                      />
                    </div>
                  </div> */}

                  <SizeIcon className={styles.cartItemImageSizeL} />
                  <SizeIcon className={styles.cartItemImageSizeM} />

                  <div
                    className={clsx(
                      styles.cartItemImagePizza,
                      item.productSizeId === 2 && styles.sizeL,
                      item.productSizeId === 1 && styles.sizeM,
                      item.productSizeId === 0 && styles.sizeS
                    )}
                  >
                    <Image
                      fill
                      src={`${process.env.NEXT_PUBLIC_BACK_URL}/product/image/${item.product.image}`}
                      alt="pizza"
                    />
                  </div>
                </div>

                <div className={styles.cartItemPizza}>
                  <div className={styles.cartItemPizzaName}>{item.product.name}</div>
                  <div className={styles.cartItemPizzaSize}>{`${
                    item.product.sizes[item.productSizeId]
                  } см`}</div>
                </div>

                <div className={styles.cartItemCount}>
                  <button
                    className={styles.cartItemCountBtn}
                    type="button"
                    disabled={item.quantity === 1}
                    onClick={() => {
                      reduceCart.mutate({ id: item.id.toString() });
                    }}
                  >
                    <BiSolidMinusCircle />
                  </button>
                  <input disabled className={styles.cartItemCountInput} value={item.quantity} />
                  <button
                    className={styles.cartItemCountBtn}
                    type="button"
                    onClick={() => {
                      addToCart.mutate({
                        requestBody: {
                          productId: item.product.id,
                          productSizeId: item.productSizeId,
                          quantity: 1,
                        },
                      });
                    }}
                  >
                    <BiSolidPlusCircle />
                  </button>
                </div>

                <div className={styles.cartItemPrice}>{`${item.totalPrice} руб`}</div>

                <button
                  className={styles.cartItemDelBtn}
                  type="button"
                  onClick={() => {
                    deleteCart.mutate({ id: item.id.toString() });
                  }}
                >
                  <IoClose />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className={styles.cartTotal}>
          <span className={styles.cartTotalText}>Сумма заказа :</span>
          <span className={styles.cartTotalSum}>
            {`${cartItems?.reduce((sum, current) => sum + current.totalPrice, 0)} руб`}
          </span>
        </div>

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
