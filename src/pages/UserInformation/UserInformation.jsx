import React from 'react';

const EditProfile = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="mt-8">
        <h2 className="mb-2 text-xl font-semibold">Edit Profile</h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                for="first-name"
              >
                First Name
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="first-name"
                type="text"
                placeholder="Enter Value"
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                for="last-name"
              >
                Last Name
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="last-name"
                type="text"
                placeholder="Enter Value"
              />
            </div>
            <div className="col-span-2 mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                for="address"
              >
                Address
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="address"
                type="text"
                placeholder="Enter Value"
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                for="dob"
              >
                Date of birth
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="dob"
                type="date"
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                for="account-type"
              >
                Account type
              </label>
              <select
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="account-type"
              >
                <option>Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                for="email"
              >
                Email
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="email"
                type="email"
                placeholder="Enter Value"
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                for="phone-number"
              >
                Phone Number
              </label>
              <div className="flex">
                <select
                  className="focus:shadow-outline w-20 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="country-code"
                >
                  <option>+84</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <input
                  className="focus:shadow-outline ml-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="phone-number"
                  type="tel"
                  placeholder="Enter Value"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                for="city"
              >
                City
              </label>
              <select
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="city"
              >
                <option>Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
            >
              Save
            </button>
            <button
              className="focus:shadow-outline rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
              type="button"
            >
              Become a Seller
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditProfile;
