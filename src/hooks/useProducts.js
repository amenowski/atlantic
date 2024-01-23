import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts } from '../services/apiProducts';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../utils/constants';

export function useProducts() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get('isDiscount');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'isDiscount', value: filterValue };

  // SORTBY
  const sortByRow = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortByRow.split('-');
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  // CATEGORIES
  const categoriesParam = searchParams.get('categories');
  const categoriesValue = categoriesParam ? categoriesParam.split('-') : [];
  const categories = categoriesValue.length > 0 ? categoriesValue : null;
  console.log(categories);

  const { data, isLoading } = useQuery({
    queryKey: ['products', filter, sortBy, page, categories],
    queryFn: () => getProducts({ filter, sortBy, page, categories }),
  });

  const products = data?.products;
  const count = data?.count;

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['products', filter, sortBy, page + 1, categories],
      queryFn: () =>
        getProducts({ filter, sortBy, page: page + 1, categories }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['products', filter, sortBy, page + 1, categories],
      queryFn: () =>
        getProducts({ filter, sortBy, page: page + 1, categories }),
    });

  return { products, isLoading, count };
}
