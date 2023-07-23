'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PaginationOptions } from 'swiper/types';

import { slides } from '../../../data/promo';
import styles from './Promo.module.scss';

export default function Promo() {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet(index: number, className) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <section className="container">
      <div className={styles.promo}>
        {slides.map(slide => (
          <div key={slide.id}>
            <div className={styles.promoImage}>
              <Image
                fill
                src={slide.url}
                style={{ objectFit: 'contain' }}
                alt={`event-${slide.id}`}
              />
            </div>
            <div className={styles.promoTitle}>{slide.title}</div>
            <div className={styles.promoText}>{slide.text}</div>
          </div>
        ))}
      </div>

      <div className={styles.swiper}>
        <Swiper pagination={pagination} modules={[Pagination, Autoplay]} autoplay={{ delay: 3000 }}>
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className={styles.wrapSlide}>
                <Image fill src={slide.url} alt="slide" />
                <div className={styles.wrapDesc}>
                  <span className={styles.slideTitle}>{slide.title}</span>
                  <span className={styles.slideText}>{slide.text}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
