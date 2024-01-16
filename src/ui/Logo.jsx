import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Logo() {
  return (
    <Link to="/home">
      <img src={logo} className={`h-20 lg:h-10`} alt="Store logo" />
    </Link>
  );
}

export default Logo;
