/* eslint-disable no-magic-numbers */
import { useQueryClient } from '@tanstack/react-query';
import { createMutation, createQuery } from 'react-query-kit';

import { CartEntity } from '@/api/models/CartEntity';
import { CartService } from '@/api/services/CartService';
import { AddCartDto } from '~/src/api/models/AddCartDto';

export const useAddToCart = createMutation({
  mutationFn: (requestBody: { requestBody: AddCartDto }) => CartService.add(requestBody),
  // onSuccess(data, variables, context) {
  //   // обновляем запрос по составу корзины
  // },
  useDefaultOptions: () => {
    const queryClient = useQueryClient();
    return {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ['/cart'] });
      },
    };
  },
});

export const useCartQuery = createQuery<CartEntity[]>({
  primaryKey: '/cart',
  queryFn: () => CartService.findAll(),
});
