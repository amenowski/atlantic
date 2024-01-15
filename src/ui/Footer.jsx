import { Link } from 'react-router-dom';
import Contact from './Contact';

function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-6 text-gray-400">
      <Contact />
      <ul className="flex gap-4">
        <li className="transition-all duration-300 hover:text-gray-700">
          <Link to="/faqs">FAQ</Link>
        </li>
        <li className="transition-all duration-300 hover:text-gray-700">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="transition-all duration-300 hover:text-gray-700">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="transition-all duration-300 hover:text-gray-700">
          <Link to="/about">About Us</Link>
        </li>
        <li className="transition-all duration-300 hover:text-gray-700">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <p className="">© 2024. All rights reserved. </p>
    </footer>
  );
}

export default Footer;
