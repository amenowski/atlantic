import { useProducts } from '../../hooks/useProducts';
import Pagination from '../../ui/Pagination';
import Product from '../../ui/Product';
import Spinner from '../../ui/Spinner';

function ShopProducts() {
  const { products, isLoading, count } = useProducts();

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-2">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <Pagination count={count} />
    </div>
  );
}

export default ShopProducts;
