import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

function Navigation() {
  return (
    <nav className="hidden lg:block">
      <ul className="text-secondary flex uppercase">
        <li className="group relative p-4 hover:bg-primary hover:text-white">
          <div className="flex cursor-pointer items-center gap-1">
            <Link to="shop">Shop</Link>
            <IoIosArrowDown />
          </div>
          <div className="absolute left-0 top-[55px] z-[999] hidden w-56 flex-col gap-2 bg-primary px-6 py-4 normal-case group-hover:flex">
            <Link
              className="transition-all duration-300 hover:text-gray-300"
              to="shop/living/storage"
            >
              Storage
            </Link>
            <Link
              className="transition-all duration-300 hover:text-gray-300"
              to="shop/living/desk"
            >
              Desk
            </Link>
            <Link
              className="transition-all duration-300 hover:text-gray-300"
              to="shop/living/clocks"
            >
              Clocks
            </Link>
            <Link
              className="transition-all duration-300 hover:text-gray-300"
              to="shop/living/tools"
            >
              Tools
            </Link>
          </div>
        </li>
        <li className="p-4 hover:bg-primary hover:text-white">
          <div className="cursor-pointer gap-1">
            <Link to="/blog">Blog</Link>
          </div>
        </li>
        <li className="p-4 hover:bg-primary hover:text-white">
          <div className="cursor-pointer gap-1">
            <Link to="/about">About</Link>
          </div>
        </li>
        <li className="p-4 hover:bg-primary hover:text-white">
          <div className="cursor-pointer gap-1">
            <Link to="/contact">Contact</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
