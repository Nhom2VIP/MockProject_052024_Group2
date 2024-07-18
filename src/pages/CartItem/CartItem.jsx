import React from 'react';
import images from '../../assets/images/image';

const CartItem = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Shopping cart</h2>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-3/4">
                    <div className="bg-white p-4 border border-gray-300 rounded">
                        <div className="flex items-center mb-4">
                            <img src={images.user} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                            <div>
                                <p className="font-semibold">chriscallfashion</p>
                                <p className="text-sm text-gray-500">98.7% positive feedback</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <img src={images.shoe} alt="Shoe" className="w-32 h-32 object-cover mr-4" />
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold">Lego 51515 Mindstorms Robot Inventor Building Toys</h3>
                                <p className="text-sm text-gray-500 mb-2">New</p>
                                <div className="flex items-center mb-2">
                                    <span className="mr-2">Qty</span>
                                    <select className="border border-gray-300 rounded px-2 py-1">
                                        <option>1</option>
                                    </select>
                                </div>
                                <p className="font-semibold">US $1,199.99</p>
                                <p className="text-sm text-gray-500">+ US $25.00 Expedited International Shipping</p>
                                <p className="text-sm text-gray-500">Returns accepted</p>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4 space-x-2">
                            <button className="text-sm text-gray-500 hover:underline">Save for later</button>
                            <button className="text-sm text-gray-500 hover:underline">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/4">
                    <div className="bg-gray-100 p-4 rounded">
                        <h3 className="font-semibold mb-2">Item (1)</h3>
                        <p className="flex justify-between"><span>US $1,199.99</span></p>
                        <p className="flex justify-between text-sm text-gray-500">
                            <span>Shipping to 7000000</span>
                            <span>US $25.00</span>
                        </p>
                        <div className="border-t border-gray-300 mt-2 pt-2">
                            <p className="flex justify-between font-semibold">
                                <span>Subtotal</span>
                                <span>US $1,224.99</span>
                            </p>
                        </div>
                        <button className="w-full bg-black text-white py-2 rounded-full mt-4 hover:bg-green-700">
                            Go to checkout
                        </button>


                    </div>
                </div>
            </div>

            <section className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Explore related items</h2>
                <p className="text-sm text-gray-500 mb-4">Sponsored</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img src={images.shoe} alt="Related item" className="w-full" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">LEGO MINDSTORMS: Robot Inventor (51515)</div>
                                <p className="text-gray-700 text-base">
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
