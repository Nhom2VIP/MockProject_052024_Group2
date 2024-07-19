import React from 'react';
import images from '../../assets/images/image';

const CartItem = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-bold">Shopping cart</h2>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-3/4">
          <div className="rounded border border-gray-300 bg-white p-4">
            <div className="mb-4 flex items-center">
              <img
                src={images.user}
                alt="Profile"
                className="mr-2 h-8 w-8 rounded-full"
              />
              <div>
                <p className="font-semibold">chriscallfashion</p>
                <p className="text-sm text-gray-500">98.7% positive feedback</p>
              </div>
            </div>
            <div className="flex items-start">
              <img
                src={images.shoe}
                alt="Shoe"
                className="mr-4 h-32 w-32 object-cover"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">
                  Lego 51515 Mindstorms Robot Inventor Building Toys
                </h3>
                <p className="mb-2 text-sm text-gray-500">New</p>
                <div className="mb-2 flex items-center">
                  <span className="mr-2">Qty</span>
                  <select className="rounded border border-gray-300 px-2 py-1">
                    <option>1</option>
                  </select>
                </div>
                <p className="font-semibold">US $1,199.99</p>
                <p className="text-sm text-gray-500">
                  + US $25.00 Expedited International Shipping
                </p>
                <p className="text-sm text-gray-500">Returns accepted</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="text-sm text-gray-500 hover:underline">
                Save for later
              </button>
              <button className="text-sm text-gray-500 hover:underline">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4">
          <div className="rounded bg-gray-100 p-4">
            <h3 className="mb-2 font-semibold">Item (1)</h3>
            <p className="flex justify-between">
              <span>US $1,199.99</span>
            </p>
            <p className="flex justify-between text-sm text-gray-500">
              <span>Shipping to 7000000</span>
              <span>US $25.00</span>
            </p>
            <div className="mt-2 border-t border-gray-300 pt-2">
              <p className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>US $1,224.99</span>
              </p>
            </div>
            <button className="mt-4 w-full rounded-full bg-black py-2 text-white hover:bg-green-700">
              Go to checkout
            </button>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="mb-2 text-xl font-semibold">Explore related items</h2>
        <p className="mb-4 text-sm text-gray-500">Sponsored</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="max-w-sm overflow-hidden rounded shadow-lg"
            >
              <img src={images.shoe} alt="Related item" className="w-full" />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">
                  LEGO MINDSTORMS: Robot Inventor (51515)
                </div>
                <p className="text-base text-gray-700">
                  New Retired Factory Sealed
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CartItem;
