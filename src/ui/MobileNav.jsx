import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useMobileNav } from '../contexts/MobileNavProvider';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

function MobileNav() {
  const { onSetIsOpenNav } = useMobileNav();

  function handleCloseNav() {
    onSetIsOpenNav(false);
  }

  return createPortal(
    <motion.div
      key="unique-key"
      initial={{ x: -400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -400, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="absolute left-0 top-0 z-[9999] flex h-screen min-w-[400px] max-w-[400px] flex-col gap-8 overflow-y-hidden bg-primary p-4 text-white"
    >
      <div>
        <IoMdClose
          size={25}
          className="cursor-pointer"
          onClick={handleCloseNav}
        />
      </div>
      <ul className="flex flex-col gap-6 uppercase tracking-widest">
        <li>
          <Link
            className="transition-all duration-300 hover:text-gray-300"
            to="shop/living"
          >
            living
          </Link>
        </li>
        <li>
          <Link
            className="transition-all duration-300 hover:text-gray-300"
            to="shop/dining"
          >
            dining
          </Link>
        </li>
        <li>
          <Link
            className="transition-all duration-300 hover:text-gray-300"
            to="shop/furniture"
          >
            furniture
          </Link>
        </li>
        <li>
          <Link
            className="transition-all duration-300 hover:text-gray-300"
            to="shop/lighting"
          >
            lighting
          </Link>
        </li>
      </ul>
    </motion.div>,
    document.body,
  );
}

export default MobileNav;
