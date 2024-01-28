import { CiLogout } from 'react-icons/ci';
import { useLogout } from '../hooks/useLogout';

function Logout() {
  const { logout, isLoading } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <CiLogout
      display={isLoading}
      onClick={handleLogout}
      className="cursor-pointer rounded-md  p-1 transition-all duration-300 hover:bg-gray-100"
      size={35}
    />
  );
}

export default Logout;
