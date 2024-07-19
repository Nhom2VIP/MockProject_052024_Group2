import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FaAddressCard,
  FaCity,
  FaCreditCard,
  FaPhone,
  FaUser,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcVisa,
} from 'react-icons/fa';

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
  agreement: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms & conditions'),
});
const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start justify-center space-y-8 p-8 lg:flex-row lg:space-x-8 lg:space-y-0 lg:p-12"
    >
      <div className="w-full rounded-lg bg-white p-6 shadow-lg lg:w-1/2">
        <div className="mb-6">
          <div className="mb-4 flex justify-between pb-2">
            <p className="text-gray-700">Seller: ...........</p>
            <p className="cursor-pointer text-blue-500 transition hover:text-blue-700">
              Message to seller
            </p>
          </div>
          <div className="flex flex-col items-center justify-around lg:flex-row">
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              className="mb-4 h-64 w-80 rounded-lg object-cover lg:mb-0 lg:mr-4"
            />
            <div className="lg:mt-4">
              <h5 className="font-bold text-gray-900">
                Lobanni Golden Wonder Limited Edition
              </h5>
              <div className="mt-2 text-2xl text-gray-600">US $3449</div>
              <div className="mt-4 text-2xl font-semibold text-black">
                Delivery
              </div>
              <div className="mt-2 text-2xl text-black">
                Est. Delivery: Jul 28 - Jul 30
              </div>
              <div className="mt-2 text-2xl text-gray-600">US $50</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-4 mt-2 border-b border-gray-300 pb-2 text-xl font-semibold lg:text-2xl">
            Ship to
          </h3>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <select
                id="country"
                {...register('country')}
                className={`border bg-gray-50 ${errors.country ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none`}
              >
                <option value="">Choose a country</option>
                <option value="AF">Viet Nam</option>
                <option value="AL">USA</option>
                <option value="DZ">China</option>
                <option value="AS">Korea</option>
                <option value="AD">ThaiLan</option>
                <option value="AO">Angola</option>
              </select>
              {errors.country && (
                <p className="text-sm text-red-500">{errors.country.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              First name
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-500" />
              </div>
              <input
                type="text"
                id="first_name"
                {...register('first_name')}
                className={`border bg-gray-50 ${errors.first_name ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 pl-10 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`}
                placeholder="Enter first name"
              />
            </div>
            {errors.first_name && (
              <p className="text-sm text-red-500">
                {errors.first_name.message}
              </p>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="last_name"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Last name
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-500" />
              </div>
              <input
                type="text"
                id="first_name"
                {...register('last_name')}
                className={`border bg-gray-50 ${errors.last_name ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 pl-10 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`} // Điều chỉnh padding để icon không đè lên text
                placeholder="Enter first name"
              />
            </div>
            {errors.last_name && (
              <p className="text-sm text-red-500">{errors.last_name.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="street_address_1"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Street Address 1
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaAddressCard className="text-gray-500" />
              </div>
              <input
                type="text"
                id="street_address_1"
                {...register('street_address_1')}
                className={`border bg-gray-50 ${errors.street_address_1 ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 pl-10 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`} // Điều chỉnh padding để icon không đè lên text
                placeholder="Enter street address 1"
              />
            </div>

            {errors.street_address_1 && (
              <p className="text-sm text-red-500">
                {errors.street_address_1.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="street_address_2"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Street Address 2
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaAddressCard className="text-gray-500" />
              </div>
              <input
                type="text"
                id="street_address_2"
                {...register('street_address_2')}
                className={`border bg-gray-50 ${errors.street_address_2 ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 pl-10 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`} // Điều chỉnh padding để icon không đè lên text
                placeholder="Enter street address 2 "
              />
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              City
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaCity className="text-gray-500" />
              </div>
              <input
                type="text"
                id="city"
                {...register('city')}
                className={`border bg-gray-50 ${errors.city ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 pl-10 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`} // Điều chỉnh padding để icon không đè lên text
                placeholder="Enter city "
              />
            </div>
            {errors.city && (
              <p className="text-sm text-red-500">{errors.city.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="region"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              State/Province/Region
            </label>
            <input
              type="text"
              id="region"
              {...register('region')}
              className={`border bg-gray-50 ${errors.region ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`}
              placeholder="Enter region"
            />
            {errors.region && (
              <p className="text-sm text-red-500">{errors.region.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="zip_code"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Zip code
            </label>
            <input
              type="text"
              id="zip_code"
              {...register('zip_code')}
              className={`border bg-gray-50 ${errors.zip_code ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`}
              placeholder="Enter zip code"
            />
            {errors.zip_code && (
              <p className="text-sm text-red-500">{errors.zip_code.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="country_code"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Country code
            </label>
            <input
              type="text"
              id="country_code"
              {...register('country_code')}
              className={`border bg-gray-50 ${errors.country_code ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`}
              placeholder="Enter country code"
            />
            {errors.country_code && (
              <p className="text-sm text-red-500">
                {errors.country_code.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone_number"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Phone number
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaPhone className="text-gray-500" />
              </div>
              <input
                type="text"
                id="phone_number"
                {...register('phone_number')}
                className={`border bg-gray-50 ${errors.phone_number ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 pl-10 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`} // Điều chỉnh padding để icon không đè lên text
                placeholder="Enter phone number "
              />
            </div>
            {errors.phone_number && (
              <p className="text-sm text-red-500">
                {errors.phone_number.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-6 mt-6">
          <h3 className="mb-4 border-b border-gray-300 pb-2 text-xl font-semibold lg:text-2xl">
            Pay with
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="card"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Card
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaCreditCard style={48} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="card_number"
                  {...register('card_number')}
                  className={`border bg-gray-50 ${errors.card_number ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 pl-10 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`} // Điều chỉnh padding để icon không đè lên text
                  placeholder="Enter card_number "
                />
              </div>
              {errors.card && (
                <p className="text-sm text-red-500">{errors.card.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="eps"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                EPS
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaCreditCard style={48} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="EPS"
                  {...register('EPS')}
                  className={`border bg-gray-50 ${errors.EPS ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 pl-10 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`} // Điều chỉnh padding để icon không đè lên text
                  placeholder="Enter EPS "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="giropay"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                GiroPay
              </label>
              <input
                type="text"
                id="giropay"
                {...register('giropay')}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Giro pay"
              />
            </div>
          </div>
          <div className="mt-4 grid gap-6">
            <div>
              <label
                htmlFor="card_number"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Card number
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="card_number"
                  {...register('card_number')}
                  className={`border bg-gray-50 ${errors.card_number ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 pr-12 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`}
                  placeholder="1234-1234-1234-1234"
                />
                <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-3">
                  <FaCcApplePay color="black" className="text-gray-500" />
                  <FaCcAmazonPay color="blue" className="text-gray-500" />
                  <FaCcVisa className="text-gray-500" />
                </div>
              </div>
              {errors.card_number && (
                <p className="text-sm text-red-500">
                  {errors.card_number.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="expiry"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Expiry
              </label>
              <input
                type="text"
                id="expiry"
                {...register('expiry')}
                className={`border bg-gray-50 ${errors.expiry ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`}
                placeholder="Expiry"
              />
              {errors.expiry && (
                <p className="text-sm text-red-500">{errors.expiry.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="cvc"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                {...register('cvc')}
                className={`border bg-gray-50 ${errors.cvc ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`}
                placeholder="CVC"
              />
              {errors.cvc && (
                <p className="text-sm text-red-500">{errors.cvc.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="payment_country"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Country
              </label>
              <select
                id="payment_country"
                {...register('payment_country')}
                className={`border bg-gray-50 ${errors.payment_country ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none`}
              >
                <option value="">Choose a country</option>
                <option value="AF">Viet Nam</option>
                <option value="AL">USA</option>
                <option value="DZ">China</option>
                <option value="AS">Korea</option>
                <option value="AD">ThaiLan</option>
                <option value="AO">Angola</option>
              </select>
              {errors.payment_country && (
                <p className="text-sm text-red-500">
                  {errors.payment_country.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="postal_code"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Postal code
              </label>
              <input
                type="text"
                id="postal_code"
                {...register('postal_code')}
                className={`border bg-gray-50 ${errors.postal_code ? 'border-red-500' : 'border-gray-300'} block w-full rounded-lg p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500`}
                placeholder="Postal code"
              />
              {errors.postal_code && (
                <p className="text-sm text-red-500">
                  {errors.postal_code.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-lg bg-white p-6 shadow-lg lg:w-1/2">
        <h3 className="mb-4 border-b border-gray-300 pb-2 text-xl font-semibold lg:text-2xl">
          Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-bold text-gray-900">Nike Air 1</h5>
              <div className="text-sm text-gray-600">Size: 29</div>
            </div>
            <div className="text-gray-600">x3</div>
            <div className="font-semibold text-gray-900">$320</div>
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
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            {...register('agreement')}
            className="h-4 w-4 cursor-pointer rounded-sm text-indigo-500 focus:ring-0"
          />
          <label
            htmlFor="agreement"
            className={`ml-3 cursor-pointer text-sm text-gray-600 ${errors.agreement ? 'text-red-500' : ''}`}
          >
            I agree to terms & conditions
          </label>
        </div>
        {errors.agreement && (
          <p className="text-sm text-red-500">{errors.agreement.message}</p>
        )}
        <button
          type="submit"
          className="w-full rounded-lg bg-green-600 px-4 py-3 text-center text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
