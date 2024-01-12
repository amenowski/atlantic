import Logo from './Logo';
import Navigation from './Navigation';
import { IoBagOutline } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';
import { useCartPreview } from '../contexts/CartPreviewProvider';
import CartPreview from '../features/Cart/CartPreview';
import Overlay from './Overlay';
import { AnimatePresence } from 'framer-motion';
import { useMobileNav } from '../contexts/MobileNavProvider';
import MobileNav from './MobileNav';

function Header() {
  const { onSetIsOpenCart, isCartOpen } = useCartPreview();
  const { onSetIsOpenNav, isNavOpen } = useMobileNav();

  function handleOpenCart() {
    onSetIsOpenCart(true);
  }

  function handleOpenNav() {
    onSetIsOpenNav(true);
  }

  return (
    <header className="flex w-full items-center justify-between px-6 py-5">
      <AiOutlineMenu
        size={25}
        className="block cursor-pointer lg:hidden"
        onClick={handleOpenNav}
      />
      <div className="flex items-center gap-3">
        <Logo />
        <Navigation />
      </div>
      <div>
        <IoBagOutline
          size={25}
          className="cursor-pointer"
          onClick={handleOpenCart}
        />
        <AnimatePresence>
          {isCartOpen && <CartPreview />}
          {isNavOpen && <MobileNav />}
          {isCartOpen || isNavOpen ? <Overlay /> : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
