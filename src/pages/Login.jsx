import LoginForm from '../features/auth/LoginForm';

function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  gap-4 bg-gray-50">
      <h1 className="text-2xl font-bold">Login to atlantic</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
