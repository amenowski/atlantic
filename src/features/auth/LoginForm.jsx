import Button from '../../ui/Button';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import SpinnerMini from '../../ui/SpinnerMini';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onSettled: () => {
          reset();
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-w-[400px] flex-col gap-2 rounded-e-sm bg-white p-8"
    >
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold">Email address</label>
        <input
          className="border p-4 outline-none placeholder:text-gray-200 focus:ring-1 focus:ring-gray-400"
          id="email"
          disabled={isPending}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Please provide a valid email address',
            },
          })}
        />
        <p className="text-sm text-red-700">{errors?.email?.message}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold">Password</label>
        <input
          className="border p-4 outline-none placeholder:text-gray-200 focus:ring-1 focus:ring-gray-400"
          id="passsword"
          type="password"
          disabled={isPending}
          {...register('password', {
            required: 'This field is required',
          })}
        />
        <p className="text-sm text-red-700">{errors?.password?.message}</p>
      </div>
      <Link className="text-sm text-gray-400" to="/signup">
        Signup
      </Link>
      <Button type="primary">{!isPending ? 'Log in' : <SpinnerMini />}</Button>
    </form>
  );
}

export default LoginForm;
