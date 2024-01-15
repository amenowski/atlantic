import { Link } from 'react-router-dom';
import Collection1 from '../assets/images/collection-1.png';
import Collection2 from '../assets/images/collection-2.png';

function Collection() {
  return (
    <div className="grid-8 grid grid-cols-1 gap-8 py-12 sm:grid-cols-2">
      <div>
        <img
          src={Collection1}
          className="w-full"
          alt="Collection of essentials"
        />
        <div className="flex flex-col gap-6 divide-y py-4">
          <div>
            <h4 className="text-2xl">Essentials</h4>
          </div>

          <ul className="flex flex-col gap-2 py-4 text-lg text-gray-500">
            <li className="transition-all duration-300 hover:text-gray-700">
              <Link to="shop/clocks">Clocks</Link>
            </li>
            <li className="transition-all duration-300 hover:text-gray-700">
              <Link to="shop/desk">Desks Mirrors</Link>
            </li>
            <li className="transition-all duration-300 hover:text-gray-700">
              <Link to="shop/storage">Storage</Link>
            </li>
            <li className="transition-all duration-300 hover:text-gray-700">
              <Link to="shop/tools">Tools</Link>
            </li>
            <li className="transition-all duration-300 hover:text-gray-700">
              <Link to="shop/sconces">Sconces</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          src={Collection2}
          className="w-full"
          alt="Collection of furniture"
        />
        <div className="flex flex-col gap-6 divide-y py-4">
          <div>
            <h4 className="text-2xl">Furniture</h4>
          </div>

          <ul className="flex flex-col gap-2 py-4 text-lg text-gray-500">
            <li className="transition-all duration-300 hover:text-gray-700">
              <Link to="shop/chairs">Chairs</Link>
            </li>
            <li className="transition-all duration-300 hover:text-gray-700">
              <Link to="shop/benches">Benches</Link>
            </li>
            <li className="transition-all duration-300 hover:text-gray-700">
              <Link to="shop/mirrors">Mirrors</Link>
            </li>
            <li className="transition-all duration-300 hover:text-gray-700">
              <Link to="shop/sofas">Sofas</Link>
            </li>
            <li className="transition-all duration-300 hover:text-gray-700">
              <Link to="shop/tables">Tables</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Collection;
