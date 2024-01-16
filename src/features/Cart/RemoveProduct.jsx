import { useDispatch } from 'react-redux';
import { deleteFromCart } from './cartSlice';

function RemoveProduct({ id }) {
  const dispach = useDispatch();

  function handleRemoveProduct(e) {
    e.preventDefault();

    dispach(deleteFromCart(id));
  }

  return (
    <button
      onClick={handleRemoveProduct}
      className="border-none text-sm text-gray-500 underline outline-none"
    >
      Remove
    </button>
  );
}

export default RemoveProduct;
