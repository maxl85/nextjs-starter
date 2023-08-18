import { createQuery } from 'react-query-kit';

import { PromoEntity } from '@/api/models/PromoEntity';
import { PromoService } from '@/api/services/PromoService';

export const usePromoQuery = createQuery<PromoEntity[]>({
  primaryKey: '/promo',
  queryFn: () => PromoService.findAll(),
});
