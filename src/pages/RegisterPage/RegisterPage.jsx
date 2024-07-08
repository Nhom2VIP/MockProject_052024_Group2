import React, { useState } from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    country: "",
    city: "",
    address: "",
    state: "",
    bankName: "",
    bankNumber: "",
    bankBranch: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data is valid:", formData);
    }
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
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="email"
                    className="w-full mb-4 md:mb-0 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Email (*)"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="username"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Username (*)"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <span className="text-red-500 text-sm">{errors.username}</span>
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
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  {errors.firstname && (
                    <span className="text-red-500 text-sm">{errors.firstname}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="lastname"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Last name (*)"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {errors.lastname && (
                    <span className="text-red-500 text-sm">{errors.lastname}</span>
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
                    value={formData.country}
                    onChange={handleChange}
                  />
                  {errors.country && (
                    <span className="text-red-500 text-sm">{errors.country}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="city"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="City (*)"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && (
                    <span className="text-red-500 text-sm">{errors.city}</span>
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
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <span className="text-red-500 text-sm">{errors.address}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="state"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="State (*)"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  {errors.state && (
                    <span className="text-red-500 text-sm">{errors.state}</span>
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
                    value={formData.bankName}
                    onChange={handleChange}
                  />
                  {errors.bankName && (
                    <span className="text-red-500 text-sm">{errors.bankName}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="bankNumber"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Bank number (*)"
                    value={formData.bankNumber}
                    onChange={handleChange}
                  />
                  {errors.bankNumber && (
                    <span className="text-red-500 text-sm">{errors.bankNumber}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="bankBranch"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Bank branch (*)"
                    value={formData.bankBranch}
                    onChange={handleChange}
                  />
                  {errors.bankBranch && (
                    <span className="text-red-500 text-sm">{errors.bankBranch}</span>
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
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">{errors.password}</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Confirm password (*)"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-sm">{errors.confirmPassword}</span>
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
