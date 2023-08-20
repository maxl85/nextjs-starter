import { useQueryClient } from '@tanstack/react-query';
import { createMutation, createQuery } from 'react-query-kit';

import { CartEntity } from '@/api/models/CartEntity';
import { CartService } from '@/api/services/CartService';
import { AddCartDto } from '~/src/api/models/AddCartDto';

export const useAddToCart = createMutation({
  mutationFn: (requestBody: { requestBody: AddCartDto }) => CartService.add(requestBody),
  useDefaultOptions: () => {
    const queryClient = useQueryClient();
    return {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ['/cart'] });
      },
    };
  },
});

export const useReduceCart = createMutation({
  mutationFn: (id: { id: string }) => CartService.reduce(id),
  useDefaultOptions: () => {
    const queryClient = useQueryClient();
    return {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ['/cart'] });
      },
    };
  },
});

export const useDeleteCart = createMutation({
  mutationFn: (id: { id: string }) => CartService.delete(id),
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
