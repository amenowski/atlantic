import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/helpers';
import Button from './Button';

function Product({ product }) {
  const { id, name, price, images } = product;

  return (
    <div className="group/product relative">
      <Link to={`/product/${id}`}>
        <img src={images[0]} />
        <img
          src={images[1]}
          className="absolute left-0 top-0 hidden group-hover/product:block"
          alt={name}
        />
        <div className="absolute hidden w-full group-hover/product:block group-hover/product:-translate-y-14">
          <Button width="full" type="secondary">
            Quickshop
          </Button>
        </div>
      </Link>
      <div className="py-4">
        <h4 className="mb-2 text-xl">{name}</h4>
        <p className="text-gray-400">{formatCurrency(price)}</p>
      </div>
    </div>
  );
}

export default Product;
