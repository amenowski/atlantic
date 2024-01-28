import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import Spinner from './Spinner';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1) Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2) If there is no authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate],
  );

  console.log(`isloading user protected route ${isLoading} `);

  // 3) WHile loading, show a spinner
  if (isLoading) return <Spinner />;

  // 4) If there is a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
