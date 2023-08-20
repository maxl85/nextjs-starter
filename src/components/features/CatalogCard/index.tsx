/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { ProductEntity } from '@/api/models/ProductEntity';
import { useAddToCart } from '@/hooks/queries/cart';

import styles from './CatalogCard.module.scss';

export default function CatalogCard(props: ProductEntity) {
  const [activeSize, setActiveSize] = useState(0);
  const mutation = useAddToCart();

  return (
    <div className={styles.card}>
      <div className={styles.cardType}>
        <Image
          className={styles.cardTypeIcon}
          src={`${process.env.NEXT_PUBLIC_BACK_URL}/category/image/${props.category.image}`}
          width={0}
          height={0}
          alt="icon"
        />
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
            activeSize === 2 && styles.sizeL,
            activeSize === 1 && styles.sizeM,
            activeSize === 0 && styles.sizeS
          )}
        >
          <Image
            fill
            src={`${process.env.NEXT_PUBLIC_BACK_URL}/product/image/${props.image}`}
            sizes="(max-width: 768px) 100vw"
            style={{ objectFit: 'contain' }}
            alt=""
          />
        </div>
      </div>

      <div className={styles.cardDesc}>
        <span className={styles.cardDescName}>{props.name}</span>
        <span className={styles.cardDescText}>{props.description}</span>
        <span className={styles.cardDescP}>Размер, см:</span>
        <div className={styles.cardDescSizes}>
          {props.sizes.map((size, i) => (
            <button
              key={i}
              type="button"
              className={clsx(styles.cardDescSizesBtn, activeSize === i && styles.active)}
              onClick={() => setActiveSize(i)}
            >
              {size}
            </button>
          ))}
        </div>
        <span className={styles.cardDescPrice}>{`${props.prices[activeSize]} руб.`}</span>

        <button
          className={styles.cardDescBuyBtn}
          type="button"
          onClick={() => {
            mutation.mutate({
              requestBody: { productId: props.id, productSizeId: activeSize, quantity: 1 },
            });
          }}
        >
          Заказать
        </button>
        <button
          className={styles.cardDescBuyBtnMobile}
          type="button"
          onClick={() => {
            mutation.mutate({
              requestBody: { productId: props.id, productSizeId: activeSize, quantity: 1 },
            });
          }}
        >
          {`${props.prices[activeSize]} руб.`}
        </button>
      </div>
    </div>
  );
}
