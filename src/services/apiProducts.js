import { PAGE_SIZE } from '../utils/constants';
import supabase from './supabase';

export async function getProducts({ filter, sortBy, page }) {
  let query = supabase.from('products').select('*', { count: 'exact' });

  // Filter
  console.log(query);
  if (filter) query = query.eq('isDiscount', filter.value);

  // Sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === 'asc',
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data: products, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error('Products could be not loaded');
  }

  return { products, count };
}

export async function getProductByName(name) {
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('name', name);

  if (error) {
    console.error(error);
    throw new Error('Product could be not loaded');
  }

  return product;
}
