import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaApple, FaFacebook } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Email is invalid").required("Email is required"),
  username: yup.string().required("Username is required"),
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  state: yup.string().required("State is required"),
  bankName: yup.string().required("Bank name is required"),
  bankNumber: yup.string().required("Bank number is required"),
  bankBranch: yup.string().required("Bank branch is required"),
  password: yup
    .string().required("Password is required")
    .min(6, "Password must be at least 6 characters")
    ,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Confirm password is required"),
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
    console.log("Form data is valid:", data);
  };

  return (
    <div className="min-h-screen flex">
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('../login-banner.png')" }}
      ></div>
      <div className="flex-1 flex items-center p-12">
        <div className="bg-white rounded-xl max-w-full w-full p-8">
          <h2 className="text-3xl font-bold mb-6">Create an account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="email"
                    className="w-full mb-4 md:mb-0 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Email (*)"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="username"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Username (*)"
                    {...register("username")}
                  />
                  {errors.username && (
                    <span className="text-red-500 text-sm">{errors.username.message}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="firstname"
                    className="w-full mb-4 md:mb-0 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="First name (*)"
                    {...register("firstname")}
                  />
                  {errors.firstname && (
                    <span className="text-red-500 text-sm">{errors.firstname.message}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="lastname"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Last name (*)"
                    {...register("lastname")}
                  />
                  {errors.lastname && (
                    <span className="text-red-500 text-sm">{errors.lastname.message}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="country"
                    className="w-full mb-4 md:mb-0 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Country (*)"
                    {...register("country")}
                  />
                  {errors.country && (
                    <span className="text-red-500 text-sm">{errors.country.message}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="city"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="City (*)"
                    {...register("city")}
                  />
                  {errors.city && (
                    <span className="text-red-500 text-sm">{errors.city.message}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="address"
                    className="w-full mb-4 md:mb-0 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Address (*)"
                    {...register("address")}
                  />
                  {errors.address && (
                    <span className="text-red-500 text-sm">{errors.address.message}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="state"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="State (*)"
                    {...register("state")}
                  />
                  {errors.state && (
                    <span className="text-red-500 text-sm">{errors.state.message}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="bankName"
                    className="w-full mb-4 md:mb-0 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Bank name (*)"
                    {...register("bankName")}
                  />
                  {errors.bankName && (
                    <span className="text-red-500 text-sm">{errors.bankName.message}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="bankNumber"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Bank number (*)"
                    {...register("bankNumber")}
                  />
                  {errors.bankNumber && (
                    <span className="text-red-500 text-sm">{errors.bankNumber.message}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="bankBranch"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Bank branch (*)"
                    {...register("bankBranch")}
                  />
                  {errors.bankBranch && (
                    <span className="text-red-500 text-sm">{errors.bankBranch.message}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                <div className="w-full">
                  <input
                    type="password"
                    name="password"
                    className="w-full mb-4 md:mb-0 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Password (*)"
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Confirm password (*)"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full py-3 mt-6 text-white rounded-lg bg-green-700 hover:bg-green-800 transition font-medium"
            >
              Create account
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 mb-3 text-black rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium"
            >
              <GrGoogle color="red" style={24} className="mr-2" />
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 mb-3 text-black rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium"
            >
              <FaFacebook style={24} color="blue" className="mr-2"/>
              Facebook
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 mb-3 text-black rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium"
            >
              <FaApple style={24} className="mr-2"  />
              Apple
            </button>
          </div>
          <div className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
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
