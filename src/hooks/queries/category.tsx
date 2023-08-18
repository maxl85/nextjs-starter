import { createQuery } from 'react-query-kit';

import { CategoryEntity } from '@/api/models/CategoryEntity';
import { CategoryService } from '@/api/services/CategoryService';

export const useCategoryQuery = createQuery<CategoryEntity[]>({
  primaryKey: '/category',
  queryFn: () => CategoryService.findAll(),
});
