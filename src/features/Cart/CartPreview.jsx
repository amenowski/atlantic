import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import Button from '../../ui/Button';
import { useCartPreview } from '../../contexts/CartPreviewProvider';

function CartPreview() {
  const { onSetIsOpenCart, isNavOpen } = useCartPreview();

  function handleCloseCart() {
    onSetIsOpenCart(false);
  }

  return createPortal(
    <motion.div
      key="unique-key"
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="absolute right-0 top-0 z-[9999] h-screen min-w-[400px] max-w-[400px] overflow-y-hidden bg-white"
    >
      <div className="grid h-screen grid-rows-[auto_1fr_auto] p-4">
        <div className="flex items-center border-b pb-2">
          <h3 className="grow uppercase">Your cart</h3>
          <IoMdClose
            size={20}
            className="cursor-pointer"
            onClick={handleCloseCart}
          />
        </div>
        <div>as</div>
        <div className="flex gap-2">
          <Button width="full" type="secondary" to="cart">
            View cart
          </Button>
          <Button width="full" type="primary" to="cart">
            Checkout
          </Button>
        </div>
      </div>
    </motion.div>,
    document.body,
  );
}

export default CartPreview;
