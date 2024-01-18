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
    <div className="grid  grid-cols-[1fr_0.7fr_0.7fr] grid-rows-2 items-center py-8 text-lg md:grid-cols-[1fr_0.7fr_0.7fr_0.3fr] md:grid-rows-1 md:place-items-center ">
      <div className="col-span-4 flex h-full w-full items-center gap-8 md:col-span-1">
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
      <div className="flex flex-col gap-1 text-left">
        <p className="text-sm normal-case text-gray-500 md:hidden">Price</p>
        <span>{formatCurrency(price)}</span>
      </div>
      <div className="gap- flex flex-col gap-1">
        <UpdateQuantity id={id} />
        <RemoveProduct id={id} />
      </div>
      <div className="flex flex-col gap-1 text-right">
        <p className="text-sm normal-case text-gray-500 md:hidden">Total</p>

        <span>{formatCurrency(totalPrice)}</span>
      </div>
    </div>
  );
}

export default CartTableItem;
