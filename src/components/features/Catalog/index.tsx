/* eslint-disable @typescript-eslint/restrict-template-expressions */

'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { useCategoryQuery } from '~/src/hooks/queries/category';
import { useProductQuery } from '~/src/hooks/queries/product';

import CatalogCard from '../CatalogCard';
import styles from './Catalog.module.scss';

export default function Catalog() {
  const [categoryId, setCategoryId] = useState(0);
  const { data: categoryData } = useCategoryQuery();
  const { data: productData } = useProductQuery({ variables: { categoryId } });

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

          {categoryData?.map(category => (
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
          {productData?.map(pizza => (
            <CatalogCard {...pizza} key={pizza.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
