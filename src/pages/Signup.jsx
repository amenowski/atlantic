import SignupForm from '../features/auth/SignupForm';

function Signup() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  gap-4 bg-gray-50">
      <h1 className="text-2xl font-bold">Sign up to atlantic</h1>
      <SignupForm />
    </div>
  );
}

export default Signup;
