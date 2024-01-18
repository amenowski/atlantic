import ShopOperations from '../features/Shop/ShopOperations';
import ShopProducts from '../features/Shop/ShopProducts';

function Shop() {
  return (
    <div className="grid min-h-[450px] grid-cols-1 gap-8 py-12 md:grid-cols-[0.2fr_1fr]">
      <ShopOperations />
      <ShopProducts />
    </div>
  );
}

export default Shop;
