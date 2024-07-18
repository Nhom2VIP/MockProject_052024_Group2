import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaAddressCard, FaCity, FaCreditCard, FaPhone, FaUser, FaCcAmazonPay, FaCcApplePay, FaCcVisa } from 'react-icons/fa';

const schema = yup.object().shape({
    country: yup.string().required('Country is required'),
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    street_address_1: yup.string().required('Street Address 1 is required'),
    city: yup.string().required('City is required'),
    region: yup.string().required('State/Province/Region is required'),
    zip_code: yup.string().required('Zip code is required'),
    country_code: yup.string().required('Country code is required'),
    phone_number: yup.string().required('Phone number is required'),
    card_number: yup.string().required('Card number is required'),
    expiry: yup.string().required('Expiry date is required'),
    cvc: yup.string().required('CVC is required'),
    payment_country: yup.string().required('Payment country is required'),
    agreement: yup.boolean().oneOf([true], 'You must agree to the terms & conditions'),
});
const PaymentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row p-8 lg:p-12 justify-center items-start space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-lg">
                <div className="mb-6">
                    <div className="mb-4 flex justify-between pb-2">
                        <p className="text-gray-700">Seller: ...........</p>
                        <p className="text-blue-500 cursor-pointer hover:text-blue-700 transition">Message to seller</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-around items-center">
                        <img src="https://via.placeholder.com/100" alt="Product" className=" w-80 h-64 object-cover rounded-lg lg:mr-4 mb-4 lg:mb-0" />
                        <div className="lg:mt-4">
                            <h5 className="text-gray-900 font-bold">Lobanni Golden Wonder Limited Edition</h5>
                            <div className="text-gray-600 mt-2 text-2xl">US $3449</div>
                            <div className="text-black mt-4 text-2xl font-semibold">Delivery</div>
                            <div className="text-black mt-2 text-2xl">Est. Delivery: Jul 28 - Jul 30</div>
                            <div className="text-gray-600 text-2xl mt-2">US $50</div>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 border-b mt-2 border-gray-300 pb-2">Ship to</h3>
                    <div className="grid gap-6 grid-cols-1">
                        <div>
                            <select
                                id="country"
                                {...register('country')}
                                className={`bg-gray-50 border ${errors.country ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500`}
                            >
                                <option value="">Choose a country</option>
                                <option value="AF">Viet Nam</option>
                                <option value="AL">USA</option>
                                <option value="DZ">China</option>
                                <option value="AS">Korea</option>
                                <option value="AD">ThaiLan</option>
                                <option value="AO">Angola</option>
                            </select>
                            {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                        </div>
                    </div>
                </div>
                <div className="grid gap-6 mt-4 grid-cols-1 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaUser className="text-gray-500" />
                            </div>
                            <input
                                type="text"
                                id="first_name"
                                {...register('first_name')}
                                className={`bg-gray-50 border ${errors.first_name ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5`}
                                placeholder="Enter first name"
                            />
                        </div>
                        {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
                    </div>
                    <div className=' relative'>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaUser className="text-gray-500" />
                            </div>
                            <input
                                type="text"
                                id="first_name"
                                {...register('last_name')}
                                className={`bg-gray-50 border ${errors.last_name ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5`} // Điều chỉnh padding để icon không đè lên text
                                placeholder="Enter first name"
                            />
                        </div>
                        {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="street_address_1" className="block mb-2 text-sm font-medium text-gray-900">Street Address 1</label>
                        <div className=' relative'>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaAddressCard className="text-gray-500" />
                            </div>
                            <input
                                type="text"
                                id="street_address_1"
                                {...register('street_address_1')}
                                className={`bg-gray-50 border ${errors.street_address_1 ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5`} // Điều chỉnh padding để icon không đè lên text
                                placeholder="Enter street address 1"
                            />
                        </div>

                        {errors.street_address_1 && <p className="text-red-500 text-sm">{errors.street_address_1.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="street_address_2" className="block mb-2 text-sm font-medium text-gray-900">Street Address 2</label>
                        <div className=' relative'>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaAddressCard className="text-gray-500" />
                            </div>
                            <input
                                type="text"
                                id="street_address_2"
                                {...register('street_address_2')}
                                className={`bg-gray-50 border ${errors.street_address_2 ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5`} // Điều chỉnh padding để icon không đè lên text
                                placeholder="Enter street address 2 "
                            />
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 mt-4 grid-cols-1 md:grid-cols-3">
                    <div>
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
                        <div className=' relative'>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaCity className="text-gray-500" />
                            </div>
                            <input
                                type="text"
                                id="city"
                                {...register('city')}
                                className={`bg-gray-50 border ${errors.city ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5`} // Điều chỉnh padding để icon không đè lên text
                                placeholder="Enter city "
                            />
                        </div>
                        {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-900">State/Province/Region</label>
                        <input
                            type="text"
                            id="region"
                            {...register('region')}
                            className={`bg-gray-50 border ${errors.region ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5`}
                            placeholder="Enter region"
                        />
                        {errors.region && <p className="text-red-500 text-sm">{errors.region.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="zip_code" className="block mb-2 text-sm font-medium text-gray-900">Zip code</label>
                        <input
                            type="text"
                            id="zip_code"
                            {...register('zip_code')}
                            className={`bg-gray-50 border ${errors.zip_code ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5`}
                            placeholder="Enter zip code"
                        />
                        {errors.zip_code && <p className="text-red-500 text-sm">{errors.zip_code.message}</p>}
                    </div>
                </div>

                <div className="grid gap-6 mt-4 grid-cols-1 md:grid-cols-2">
                    <div>
                        <label htmlFor="country_code" className="block mb-2 text-sm font-medium text-gray-900">Country code</label>
                        <input
                            type="text"
                            id="country_code"
                            {...register('country_code')}
                            className={`bg-gray-50 border ${errors.country_code ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5`}
                            placeholder="Enter country code"
                        />
                        {errors.country_code && <p className="text-red-500 text-sm">{errors.country_code.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                        <div className='relative'>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaPhone className="text-gray-500" />
                            </div>
                            <input
                                type="text"
                                id="phone_number"
                                {...register('phone_number')}
                                className={`bg-gray-50 border ${errors.phone_number ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5`} // Điều chỉnh padding để icon không đè lên text
                                placeholder="Enter phone number "
                            />
                        </div>
                        {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number.message}</p>}
                    </div>
                </div>

                <div className="mb-6 mt-6">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Pay with</h3>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                        <div>
                            <label htmlFor="card" className="block mb-2 text-sm font-medium text-gray-900">Card</label>
                            <div className='relative'>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    < FaCreditCard style={48} className="text-gray-500" />
                                </div>
                                <input
                                    type="text"
                                    id="card_number"
                                    {...register('card_number')}
                                    className={`bg-gray-50 border ${errors.card_number ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5`} // Điều chỉnh padding để icon không đè lên text
                                    placeholder="Enter card_number "
                                />
                            </div>
                            {errors.card && <p className="text-red-500 text-sm">{errors.card.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="eps" className="block mb-2 text-sm font-medium text-gray-900">EPS</label>
                            <div className='relative'>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    < FaCreditCard style={48} className="text-gray-500" />
                                </div>
                                <input
                                    type="text"
                                    id="EPS"
                                    {...register('EPS')}
                                    className={`bg-gray-50 border ${errors.EPS ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5`} // Điều chỉnh padding để icon không đè lên text
                                    placeholder="Enter EPS "
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="giropay" className="block mb-2 text-sm font-medium text-gray-900">GiroPay</label>
                            <input
                                type="text"
                                id="giropay"
                                {...register('giropay')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                placeholder="Giro pay"
                            />
                        </div>
                    </div>
                    <div className="grid gap-6 mt-4">
                        <div>
                            <label htmlFor="card_number" className="block mb-2 text-sm font-medium text-gray-900">Card number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="card_number"
                                    {...register('card_number')}
                                    className={`bg-gray-50 border ${errors.card_number ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 p-2.5`}
                                    placeholder="1234-1234-1234-1234"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-3">
                                    <FaCcApplePay color='black' className="text-gray-500" />
                                    <FaCcAmazonPay color='blue' className="text-gray-500" />
                                    <FaCcVisa className="text-gray-500" />
                                </div>
                            </div>
                            {errors.card_number && <p className="text-red-500 text-sm">{errors.card_number.message}</p>}
                        </div>
                    </div>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-4">
                        <div>
                            <label htmlFor="expiry" className="block mb-2 text-sm font-medium text-gray-900">Expiry</label>
                            <input
                                type="text"
                                id="expiry"
                                {...register('expiry')}
                                className={`bg-gray-50 border ${errors.expiry ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5`}
                                placeholder="Expiry"
                            />
                            {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="cvc" className="block mb-2 text-sm font-medium text-gray-900">CVC</label>
                            <input
                                type="text"
                                id="cvc"
                                {...register('cvc')}
                                className={`bg-gray-50 border ${errors.cvc ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5`}
                                placeholder="CVC"
                            />
                            {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="payment_country" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                            <select
                                id="payment_country"
                                {...register('payment_country')}
                                className={`bg-gray-50 border ${errors.payment_country ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500`}
                            >
                                <option value="">Choose a country</option>
                                <option value="AF">Viet Nam</option>
                                <option value="AL">USA</option>
                                <option value="DZ">China</option>
                                <option value="AS">Korea</option>
                                <option value="AD">ThaiLan</option>
                                <option value="AO">Angola</option>
                            </select>
                            {errors.payment_country && <p className="text-red-500 text-sm">{errors.payment_country.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="postal_code" className="block mb-2 text-sm font-medium text-gray-900">Postal code</label>
                            <input
                                type="text"
                                id="postal_code"
                                {...register('postal_code')}
                                className={`bg-gray-50 border ${errors.postal_code ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5`}
                                placeholder="Postal code"
                            />
                            {errors.postal_code && <p className="text-red-500 text-sm">{errors.postal_code.message}</p>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Information</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h5 className="text-gray-900 font-bold">Nike Air 1</h5>
                            <div className="text-sm text-gray-600">Size: 29</div>
                        </div>
                        <div className="text-gray-600">x3</div>
                        <div className="text-gray-900 font-semibold">$320</div>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 py-3 uppercase">
                        <div>Subtotal</div>
                        <div>$1280</div>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 py-3 uppercase">
                        <div>Shipping</div>
                        <div>Free</div>
                    </div>
                    <div className="flex justify-between py-3 uppercase">
                        <div className="font-semibold">Total</div>
                        <div>$1280</div>
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <input
                        type="checkbox"
                        name="agreement"
                        id="agreement"
                        {...register('agreement')}
                        className="text-indigo-500 focus:ring-0 rounded-sm cursor-pointer w-4 h-4"
                    />
                    <label htmlFor="agreement" className={`text-gray-600 ml-3 cursor-pointer text-sm ${errors.agreement ? 'text-red-500' : ''}`}>
                        I agree to terms & conditions
                    </label>
                </div>
                {errors.agreement && <p className="text-red-500 text-sm">{errors.agreement.message}</p>}
                <button
                    type="submit"
                    className="w-full py-3 px-4 text-center text-white bg-green-600 rounded-lg transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                    Pay
                </button>
            </div>
        </form>

    );
};

export default PaymentForm;
