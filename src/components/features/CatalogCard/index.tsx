/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import { clsx } from 'clsx';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { addItem } from '@/redux/cart/cartSlice';
import { CartItem } from '@/redux/cart/types';

import { Pizza } from '../../../redux/pizzas/types';
import styles from './styles.module.scss';

interface Props extends Pizza {
  onClickSize: (props: { pizzaId: number; activeSize: number }) => void;
}

export default function CatalogCard(props: Props) {
  const dispatch = useDispatch();

  const handleClickBuy = () => {
    const item: CartItem = {
      id: props.id,
      name: props.name,
      image: props.image,
      type: props.type.filter(value => value !== 'all'),
      size: props.sizes[props.activeSize],
      activeSize: props.activeSize,
      price: props.price[props.activeSize],
      count: 1,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardType}>
        {props.type.map(
          (item, index) =>
            item !== 'all' && (
              <Image
                key={index}
                className={styles.cardTypeIcon}
                src={`/assets/icons/type/${item}.svg`}
                width={0}
                height={0}
                alt="icon"
              />
            )
        )}
      </div>

      <div className={styles.cardImage}>
        <div className={styles.cardImageSizeL}>
          <Image fill src="/assets/icons/size.svg" alt="icon" />
        </div>
        <div className={styles.cardImageSizeM}>
          <Image fill src="/assets/icons/size.svg" alt="icon" />
        </div>

        <div
          className={clsx(
            styles.cardImagePizza,
            props.activeSize === 2 && styles.sizeL,
            props.activeSize === 1 && styles.sizeM,
            props.activeSize === 0 && styles.sizeS
          )}
        >
          <Image
            fill
            src={props.image}
            sizes="(max-width: 768px) 100vw"
            style={{ objectFit: 'contain' }}
            alt=""
          />
        </div>
      </div>

      <div className={styles.cardDesc}>
        <h4 className={styles.cardDescName}>{props.name}</h4>
        <p className={styles.cardDescText}>{props.description}</p>
        <p className={styles.cardDescP}>Размер, см:</p>
        <div className={styles.cardDescSizes}>
          {props.sizes.map((size, i) => (
            <button
              key={i}
              type="button"
              className={clsx(styles.cardDescSizesBtn, props.activeSize === i && styles.active)}
              onClick={() => props.onClickSize({ pizzaId: props.id, activeSize: i })}
            >
              {size}
            </button>
          ))}
        </div>
        <p className={styles.cardDescPrice}>{`${props.price[props.activeSize]} руб.`}</p>

        <button className={styles.cardDescBuyBtn} type="button" onClick={handleClickBuy}>
          Заказать
        </button>
        <button className={styles.cardDescBuyBtnMobile} type="button" onClick={handleClickBuy}>{`${
          props.price[props.activeSize]
        } руб.`}</button>
      </div>
    </div>
  );
}
