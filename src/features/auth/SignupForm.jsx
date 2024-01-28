import { useSignup } from '../../hooks/useSignup';
import Button from '../../ui/Button';
import { useForm } from 'react-hook-form';
import SpinnerMini from '../../ui/SpinnerMini';
import { Link } from 'react-router-dom';

function SignupForm() {
  const { signup, isPending } = useSignup();
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  function onSubmit({ name, email, password }) {
    signup({ name, email, password }, { onSettled: reset });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-w-[400px] flex-col gap-2 rounded-e-sm bg-white p-8"
    >
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold" htmlFor="name">
          Name
        </label>
        <input
          className="border p-4 outline-none placeholder:text-gray-200 focus:ring-1 focus:ring-gray-400"
          type="text"
          id="name"
          disabled={isPending}
          {...register('name', { required: 'This field is required' })}
        />
        <p className="text-sm text-red-700">{errors?.name?.message}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="border p-4 outline-none placeholder:text-gray-200 focus:ring-1 focus:ring-gray-400"
          type="email"
          id="email"
          disabled={isPending}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Please provide a valid email address',
            },
          })}
        />
        <p className="text-sm text-red-700">{errors?.email?.message}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="border p-4 outline-none placeholder:text-gray-200 focus:ring-1 focus:ring-gray-400"
          type="password"
          id="password"
          disabled={isPending}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
          })}
        />
        <p className="text-sm text-red-700">{errors?.password?.message}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold" htmlFor="passwordConfirm">
          Repeat password
        </label>
        <input
          className="border p-4 outline-none placeholder:text-gray-200 focus:ring-1 focus:ring-gray-400"
          type="password"
          id="passwordConfirm"
          disabled={isPending}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Password need to match',
          })}
        />
        <p className="text-sm text-red-700">
          {errors?.passwordConfirm?.message}
        </p>
      </div>
      <Link className="text-sm text-gray-400" to="/login">
        Login
      </Link>
      <Button type="primary" onClick={() => console.log('elo')}>
        {isPending ? <SpinnerMini /> : 'Signup'}
      </Button>
    </form>
  );
}

export default SignupForm;
