import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { formatCurrency, revertFormattedName } from '../utils/helpers';
import Spinner from './Spinner';
import ProductGallery from './ProductGallery';
import Button from './Button';
import Accordion from './Accordion';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  getCurrentProductQuantity,
} from '../features/Cart/cartSlice';
import { useCartPreview } from '../contexts/CartPreviewProvider';

function ProductDetails() {
  const { name } = useParams();
  const { product, isLoading } = useProduct(revertFormattedName(name));

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { onSetIsOpenCart } = useCartPreview();

  const currentQuantity = useSelector(
    getCurrentProductQuantity(product?.at(0)?.id),
  );

  if (isLoading) return <Spinner />;

  const {
    id,
    price,
    images,
    material,
    dimensions,
    description,
    weight,
    origin,
    designer,
    isDiscount,
  } = product.at(0);

  const isInCart = currentQuantity > 0;

  console.log(currentQuantity);
  console.log(isInCart);

  function handleAddProduct(e) {
    e.preventDefault();

    if (Number(quantity) === 0) return;

    const newProduct = {
      id,
      name,
      price,
      images,
      material,
      dimensions,
      description,
      weight,
      origin,
      designer,
      isDiscount,
      quantity: quantity,
      totalPrice: price * quantity,
    };

    dispatch(addToCart(newProduct));
    onSetIsOpenCart(true);
  }

  return (
    <div className="grid min-h-96 grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <ProductGallery images={images} isDiscount={isDiscount} />
      </div>
      <div className="flex flex-col gap-4 divide-y">
        <div>
          <h4 className="mb-4 text-3xl">{revertFormattedName(name)}</h4>
          <p className="mb-12 text-xl text-gray-500">
            {formatCurrency(price)} USD
          </p>
          <input
            className="mb-4 w-20 border p-2"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {isInCart ? (
            <Button to="/cart" type="primary" width="full">
              View in cart
            </Button>
          ) : (
            <Button onClick={handleAddProduct} width="full" type="secondary">
              Add to cart
            </Button>
          )}
        </div>
        <Accordion title="Description">
          <p className="text-sm">{description}</p>
        </Accordion>
        <Accordion title="Specifications">
          <ul className="flex flex-col gap-1 text-sm">
            <li>Material: {material}</li>
            <li>Dimensions: {dimensions}</li>
            <li>Weight: {weight} lbs</li>
            <li>Origin: {origin}</li>
            <li>Designer: {designer}</li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
}

export default ProductDetails;
