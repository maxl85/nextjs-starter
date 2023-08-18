/* eslint-disable @typescript-eslint/restrict-template-expressions */

'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveSize } from '@/redux/pizzas/pizzasSlice';
import { selectPizzaz } from '@/redux/pizzas/selectors';
import { useCategoryQuery } from '~/src/hooks/queries/category';

import AllIcon from '../../../../public/assets/icons/type/all.svg';
import CheeseIcon from '../../../../public/assets/icons/type/cheese.svg';
import HotIcon from '../../../../public/assets/icons/type/hot.svg';
import MeatIcon from '../../../../public/assets/icons/type/meat.svg';
import VeganIcon from '../../../../public/assets/icons/type/vegetarian.svg';
import CatalogCard from '../CatalogCard';
import styles from './Catalog.module.scss';

const categories = [
  {
    id: 0,
    name: 'Все',
    icon: <AllIcon key="all" />,
    type: 'all',
  },
  {
    id: 1,
    name: 'Острые',
    icon: <HotIcon key="hot" />,
    type: 'hot',
  },
  {
    id: 2,
    name: 'Мясные',
    icon: <MeatIcon key="meat" />,
    type: 'meat',
  },
  {
    id: 3,
    name: 'Сырные',
    icon: <CheeseIcon key="cheese" />,
    type: 'cheese',
  },
  {
    id: 4,
    name: 'Веганские',
    icon: <VeganIcon key="vegetarian" />,
    type: 'vegetarian',
  },
];

export default function Catalog() {
  const pizzas = useSelector(selectPizzaz);
  const dispatch = useDispatch();

  const [categoryId, setCategoryId] = useState(0);

  const { data } = useCategoryQuery();

  const handleClickSize = (props: { pizzaId: number; activeSize: number }) => {
    dispatch(setActiveSize(props));
  };

  return (
    <div className="container">
      <section className={styles.catalog}>
        <h2 className={styles.catalogTitle}>Выберите пиццу</h2>

        <div className={styles.catalogCategory}>
          <div
            role="presentation"
            className={clsx(styles.catalogCategoryItem, categoryId === 0 && styles.active)}
            onClick={() => setCategoryId(0)}
          >
            <div className={styles.catalogCategoryItemIcon}>
              <Image src="/assets/icons/type/all.svg" width={24} height={24} alt="svg" />
            </div>
            <div className={styles.catalogCategoryItemText}>все</div>
          </div>

          {data?.map(category => (
            <div
              key={category.id}
              role="presentation"
              className={clsx(
                styles.catalogCategoryItem,
                categoryId === category.id && styles.active
              )}
              onClick={() => setCategoryId(category.id)}
            >
              <div className={styles.catalogCategoryItemIcon}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACK_URL}/category/image/${category.image}`}
                  width={24}
                  height={24}
                  alt="svg"
                />
              </div>
              <div className={styles.catalogCategoryItemText}>{category.name}</div>
            </div>
          ))}
        </div>

        <div className={styles.catalogGrid}>
          {pizzas
            .filter(pizza => pizza.type.indexOf(categories[categoryId].type) !== -1)
            .map(item => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <CatalogCard onClickSize={handleClickSize} {...item} key={item.id} />
            ))}
        </div>
      </section>
    </div>
  );
}
