import supabase from './supabase';

export async function getProducts() {
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) {
    console.error(error);
    throw new Error('Products could be not loaded');
  }

  return products;
}
