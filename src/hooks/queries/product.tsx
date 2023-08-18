/* eslint-disable no-magic-numbers */
import { createQuery } from 'react-query-kit';

import { ProductEntity } from '@/api/models/ProductEntity';
import { ProductService } from '@/api/services/ProductService';

type Variables = { categoryId: number };

export const useProductQuery = createQuery<ProductEntity[], Variables, Error>({
  primaryKey: '/product',
  queryFn: ({ queryKey: [, variables] }) => {
    const queries: Variables = variables.categoryId === 0 ? ({} as Variables) : { ...variables };
    return ProductService.findAll(queries);
  },
  staleTime: 1000 * 5,
});
