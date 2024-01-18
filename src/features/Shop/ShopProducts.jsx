import { useProducts } from '../../hooks/useProducts';
import Product from '../../ui/Product';
import Spinner from '../../ui/Spinner';

function ShopProducts() {
  const { products, isLoading } = useProducts();

  if (isLoading) return <Spinner />;

  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {products?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ShopProducts;
