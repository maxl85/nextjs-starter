import { createMutation } from 'react-query-kit';

import { OrderService } from '@/api/services/OrderService';
import { CreateOrderDto } from '~/src/api/models/CreateOrderDto';

export const useCreateOrder = createMutation({
  mutationFn: (requestBody: { requestBody: CreateOrderDto }) => OrderService.create(requestBody),
});
