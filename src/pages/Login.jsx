import LoginForm from '../features/auth/LoginForm';
import Logo from '../ui/Logo';

function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  gap-4 bg-gray-50">
      <Logo />
      <h1 className="text-2xl font-bold">Login to atlantic</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
