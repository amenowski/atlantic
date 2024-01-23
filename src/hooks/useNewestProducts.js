import { useQuery } from '@tanstack/react-query';
import { getNewestProducts } from '../services/apiProducts';

export function useNewestProducts(limit) {
  const { data: newestProducts, isLoading } = useQuery({
    queryKey: ['newestProducts'],
    queryFn: () => getNewestProducts(limit),
  });

  return { newestProducts, isLoading };
}
