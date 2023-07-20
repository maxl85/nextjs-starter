/* eslint-disable react/no-array-index-key */

'use client';

import { clsx } from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from '@/redux/filter/filterSlice';
import { selectCategoryId } from '@/redux/filter/selectors';
import { setActiveSize } from '@/redux/pizzas/pizzasSlice';
import { selectPizzaz } from '@/redux/pizzas/selectors';

import AllIcon from '../../../../public/assets/icons/type/all.svg';
import CheeseIcon from '../../../../public/assets/icons/type/cheese.svg';
import HotIcon from '../../../../public/assets/icons/type/hot.svg';
import MeatIcon from '../../../../public/assets/icons/type/meat.svg';
import VeganIcon from '../../../../public/assets/icons/type/vegetarian.svg';
import CatalogCard from '../CatalogCard';
import styles from './styles.module.scss';

const categories = [
  {
    name: 'Все',
    icon: <AllIcon key="all" />,
    type: 'all',
  },
  {
    name: 'Острые',
    icon: <HotIcon key="hot" />,
    type: 'hot',
  },
  {
    name: 'Мясные',
    icon: <MeatIcon key="meat" />,
    type: 'meat',
  },
  {
    name: 'Сырные',
    icon: <CheeseIcon key="cheese" />,
    type: 'cheese',
  },
  {
    name: 'Веганские',
    icon: <VeganIcon key="vegetarian" />,
    type: 'vegetarian',
  },
];

export default function Catalog() {
  const categoryId = useSelector(selectCategoryId);
  const pizzas = useSelector(selectPizzaz);
  const dispatch = useDispatch();

  const handleClickSize = (props: { pizzaId: number; activeSize: number }) => {
    dispatch(setActiveSize(props));
  };

  return (
    <div className="container">
      <section className={styles.catalog}>
        <h2 className={styles.catalogTitle}>Выберите пиццу</h2>

        <ul className={styles.catalogCategory}>
          {categories.map((category, i) => (
            <li
              key={i}
              role="presentation"
              className={clsx(styles.catalogCategoryItem, categoryId === i && styles.active)}
              onClick={() => dispatch(setCategoryId(i))}
            >
              <div className={styles.catalogCategoryItemIcon}>{category.icon}</div>
              <div className={styles.catalogCategoryItemText}>{category.name}</div>
            </li>
          ))}
        </ul>

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
