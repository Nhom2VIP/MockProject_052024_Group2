import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),
  username: yup.string().required('Username is required'),
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  country: yup.string().required('Country is required'),
  city: yup.string().required('City is required'),
  address: yup.string().required('Address is required'),
  state: yup.string().required('State is required'),
  bankName: yup.string().required('Bank name is required'),
  bankNumber: yup.string().required('Bank number is required'),
  bankBranch: yup.string().required('Bank branch is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Confirm password is required'),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form data is valid:', data);
  };

  return (
    <div className="flex min-h-screen">
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('../login-banner.png')" }}
      ></div>
      <div className="flex flex-1 items-center p-12">
        <div className="w-full max-w-full rounded-xl bg-white p-8">
          <h2 className="mb-6 text-3xl font-bold">Create an account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="flex flex-col space-x-0 md:flex-row md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="email"
                    className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none md:mb-0"
                    placeholder="Email (*)"
                    {...register('email')}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="username"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none"
                    placeholder="Username (*)"
                    {...register('username')}
                  />
                  {errors.username && (
                    <span className="text-sm text-red-500">
                      {errors.username.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col space-x-0 md:flex-row md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="firstname"
                    className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none md:mb-0"
                    placeholder="First name (*)"
                    {...register('firstname')}
                  />
                  {errors.firstname && (
                    <span className="text-sm text-red-500">
                      {errors.firstname.message}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="lastname"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none"
                    placeholder="Last name (*)"
                    {...register('lastname')}
                  />
                  {errors.lastname && (
                    <span className="text-sm text-red-500">
                      {errors.lastname.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col space-x-0 md:flex-row md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="country"
                    className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none md:mb-0"
                    placeholder="Country (*)"
                    {...register('country')}
                  />
                  {errors.country && (
                    <span className="text-sm text-red-500">
                      {errors.country.message}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="city"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none"
                    placeholder="City (*)"
                    {...register('city')}
                  />
                  {errors.city && (
                    <span className="text-sm text-red-500">
                      {errors.city.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col space-x-0 md:flex-row md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="address"
                    className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none md:mb-0"
                    placeholder="Address (*)"
                    {...register('address')}
                  />
                  {errors.address && (
                    <span className="text-sm text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="state"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none"
                    placeholder="State (*)"
                    {...register('state')}
                  />
                  {errors.state && (
                    <span className="text-sm text-red-500">
                      {errors.state.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col space-x-0 md:flex-row md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="bankName"
                    className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none md:mb-0"
                    placeholder="Bank name (*)"
                    {...register('bankName')}
                  />
                  {errors.bankName && (
                    <span className="text-sm text-red-500">
                      {errors.bankName.message}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="bankNumber"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none"
                    placeholder="Bank number (*)"
                    {...register('bankNumber')}
                  />
                  {errors.bankNumber && (
                    <span className="text-sm text-red-500">
                      {errors.bankNumber.message}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="bankBranch"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none"
                    placeholder="Bank branch (*)"
                    {...register('bankBranch')}
                  />
                  {errors.bankBranch && (
                    <span className="text-sm text-red-500">
                      {errors.bankBranch.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col space-x-0 md:flex-row md:space-x-4">
                <div className="w-full">
                  <input
                    type="password"
                    name="password"
                    className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none md:mb-0"
                    placeholder="Password (*)"
                    {...register('password')}
                  />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none"
                    placeholder="Confirm password (*)"
                    {...register('confirmPassword')}
                  />
                  {errors.confirmPassword && (
                    <span className="text-sm text-red-500">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 block w-full rounded-lg bg-green-700 py-3 font-medium text-white transition hover:bg-green-800"
            >
              Create account
            </button>
          </form>
          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              className="mb-3 flex w-full items-center justify-center rounded-lg border border-gray-300 py-3 font-medium text-black transition hover:bg-gray-100"
            >
              <GrGoogle color="red" style={24} className="mr-2" />
              Google
            </button>
            <button
              type="button"
              className="mb-3 flex w-full items-center justify-center rounded-lg border border-gray-300 py-3 font-medium text-black transition hover:bg-gray-100"
            >
              <FaFacebook style={24} color="blue" className="mr-2" />
              Facebook
            </button>
            <button
              type="button"
              className="mb-3 flex w-full items-center justify-center rounded-lg border border-gray-300 py-3 font-medium text-black transition hover:bg-gray-100"
            >
              <FaApple style={24} className="mr-2" />
              Apple
            </button>
          </div>
          <div className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <div className="text-blue-500 hover:underline">
              <Link to="/login">Login now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
