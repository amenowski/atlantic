import { Link } from 'react-router-dom';
import {
  formatCurrency,
  formatNameForURL,
  revertFormattedName,
} from '../../utils/helpers';
import UpdateQuantity from '../../ui/UpdateQuantity';
import RemoveProduct from './RemoveProduct';

function CartTableItem({ product }) {
  const { name, price, totalPrice, id, images, size } = product;

  return (
    <div className="grid grid-cols-[1fr_0.7fr_0.7fr_0.3fr] place-items-center py-8 text-lg ">
      <div className="flex h-full w-full items-center gap-8">
        <Link to={`/product/${name}`}>
          <img
            width={140}
            height={140}
            className=" object-contain"
            src={images[0]}
            alt={name}
          />
        </Link>
        <span className="text-xl">
          <Link
            className="text-lg text-primary"
            to={`/product/${formatNameForURL(name)}`}
          >
            {revertFormattedName(name)}
          </Link>
        </span>
      </div>
      <span>{formatCurrency(price)}</span>
      <div className="flex flex-col gap-1">
        <UpdateQuantity id={id} />
        <RemoveProduct id={id} />
      </div>
      <span>{formatCurrency(totalPrice)}</span>
    </div>
  );
}

export default CartTableItem;
