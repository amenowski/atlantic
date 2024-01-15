import { useProducts } from '../hooks/useProducts';
import Product from './Product';
import Spinner from './Spinner';

function NewArrivals() {
  const { products, isLoading } = useProducts();

  if (isLoading) return <Spinner />;

  return (
    <div className="py-24">
      <h3 className="text-center text-lg">NEW ARRIVALS FOR MODERN LIVING</h3>
      <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
