import Logo from './Logo';
import { useCartPreview } from '../contexts/CartPreviewProvider';
import { AnimatePresence } from 'framer-motion';
import { useMobileNav } from '../contexts/MobileNavProvider';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

import Navigation from './Navigation';
import CartPreview from '../features/Cart/CartPreview';
import Overlay from './Overlay';
import MobileNav from './MobileNav';
import Logout from './Logout';

import { IoBagOutline } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';

function Header() {
  const { onSetIsOpenCart, isCartOpen } = useCartPreview();
  const { onSetIsOpenNav, isNavOpen } = useMobileNav();
  const { isAuthenticated } = useUser();

  function handleOpenCart() {
    onSetIsOpenCart(true);
  }

  function handleOpenNav() {
    onSetIsOpenNav(true);
  }

  return (
    <header className="flex w-full items-center justify-between px-6 py-5">
      <AiOutlineMenu
        size={35}
        className="block cursor-pointer  rounded-md p-1  transition-all duration-300 hover:bg-gray-100 lg:hidden"
        onClick={handleOpenNav}
      />
      <div className="flex items-center gap-3">
        <Logo />
        <Navigation />
      </div>
      <div className="flex items-center gap-2">
        {isAuthenticated ? (
          <Logout />
        ) : (
          <Link to="/login">
            <AiOutlineUser
              className="cursor-pointer rounded-md  p-1 transition-all duration-300 hover:bg-gray-100"
              size={35}
            />
          </Link>
        )}

        <IoBagOutline
          className="cursor-pointer rounded-md  p-1 hover:bg-gray-100"
          size={35}
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
