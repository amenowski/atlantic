import { useQuery } from '@tanstack/react-query';
import { getProductByName } from '../services/apiProducts';

export function useProduct(name) {
  const { data: product, isLoading } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProductByName(name),
  });

  return { product, isLoading };
}
