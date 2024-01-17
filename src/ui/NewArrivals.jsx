import { useProducts } from '../hooks/useProducts';
import Product from './Product';
import Spinner from './Spinner';

function NewArrivals() {
  const { products, isLoading } = useProducts();

  return (
    <div className="min-h-[400px] py-24">
      <h3 className="pb-8 text-center text-lg">
        NEW ARRIVALS FOR MODERN LIVING
      </h3>
      {isLoading && <Spinner />}
      <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-2 lg:grid-cols-4">
        {products?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
