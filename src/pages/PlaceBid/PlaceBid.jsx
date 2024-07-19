import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image from '../../assets/images/image.js';

const PlaceBid = () => {
  const [product, setProduct] = useState({});
  const [similarItems, setSimilarItems] = useState([]);
  const [images, setImages] = useState([]);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productResponse = await axios.get('/api/product');
        setProduct(productResponse.data);

        const similarItemsResponse = await axios.get('/api/similar-items');
        setSimilarItems(similarItemsResponse.data);

        const imagesResponse = await axios.get('/api/product-images');
        setImages(imagesResponse.data);

        const bidsResponse = await axios.get('/api/bids');
        setBids(bidsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded p-4">
          <div className="h-96 rounded p-4 shadow">
            <img src="" alt="Error" className="h-full w-full object-cover" />
          </div>
          <div className="mt-5 flex flex-wrap justify-between">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-full rounded p-4 shadow sm:w-1/2 lg:w-1/3"
              >
                <img src="" alt="Error" className="h-40 w-full object-cover" />
                <h2 className="mb-2 text-xl font-medium">
                  Ultimate golden item
                </h2>
                <p>$1350</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded p-4">
          <h2 className="mb-2 text-2xl font-medium">
            Content for the second column in the first row
          </h2>
          <div className="pt-4">
            <div className="flex items-center gap-4">
              <img src={image.saleIcon} className="w-12" alt="Error" />
              <div>
                <strong className="flex items-center gap-2">
                  wowashoppk (2495)
                </strong>
                <p className="flex items-center gap-2 pb-2">
                  <a href="!#" className="underline">
                    99.2% positive
                  </a>
                  <a href="!#" className="underline">
                    Seller's other items
                  </a>
                  <a href="!#" className="underline">
                    Contact seller
                  </a>
                </p>
              </div>
            </div>
            <p className="pb-2 pt-2">Description: ....</p>
            <p>Time left: 6d 04h | Sunday</p>
          </div>
          <div className="mt-6 flex flex-col justify-between lg:flex-row">
            <div>
              <div className="flex items-center gap-3">
                <p>Current bid:</p>
                <strong className="text-2xl">US $3600.00</strong>
              </div>
              <textarea className="ml-8 mt-2 w-full border p-2 text-black lg:w-60" />
              <p className="ml-8 mt-2">Enter US $3600.00 or more</p>
              <p className="ml-8 mt-2">215 watches</p>
            </div>
            <div className="mt-4 flex flex-col items-center space-y-2 lg:mt-0">
              <button className="w-full rounded-full bg-green-700 px-4 py-2 text-white lg:w-80">
                Place bid
              </button>
              <button className="w-full rounded-full border border-green-700 px-4 py-2 text-green-700 lg:w-80">
                Add To Watchlist
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row">
              <h4 className="text-lg font-medium">Shipping:</h4>
              <div>
                <p>
                  Free Expedited International Shipping.{' '}
                  <a href="#" className="underline">
                    See details for shipping
                  </a>
                </p>
                <p>
                  International shipment of items may be subject to customs
                  processing and additional charges.
                </p>
                <p>Located in: Osaka, Japan</p>
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row">
              <h4 className="text-lg font-medium">Delivery:</h4>
              <div>
                <p>Estimated between Tue, Jul 9 and Fri, Jul 19</p>
                <p>
                  Includes 6 business days handling time after receipt of
                  cleared payment.
                </p>
                <p>
                  Please allow additional time if international delivery is
                  subject to customs processing.
                </p>
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-4 sm:flex-row">
              <h4 className="text-lg font-medium">Returns:</h4>
              <p>
                60 days returns. Seller pays for return shipping.{' '}
                <a href="#" className="underline">
                  See details for more information about returns
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="pb-3">Similar items</h3>
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="rounded p-4 shadow">
            <img src="" alt="Error" className="h-40 w-full object-cover" />
            <h2 className="mb-2 text-xl font-medium">Ultimate golden item</h2>
            <p>$1350</p>
          </div>
        ))}
      </div>
      <div className="pb-3">
        <a href="!#" className="underline">
          About this item
        </a>
        <p>Seller assumes all responsibility for this listing</p>
        <p>
          Last update on July 01, 2024 07:05:45{' '}
          <a href="!#" className="underline">
            View all revisions
          </a>
        </p>
      </div>
      <div className="bg-gray-200 p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="your-image-src.jpg"
              alt="OnlyWatch"
              className="mr-4 h-16 w-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">OnlyWatch</h2>
              <p>99.8% positive feedback</p>
              <p>9.3K items sold</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="w-full rounded-full bg-green-700 px-4 py-2 text-white lg:w-80">
              Visit store
            </button>
            <button className="w-full rounded-full border border-green-700 px-4 py-2 text-green-700 lg:w-80">
              Contact
            </button>
            <button className="w-full rounded-full border border-green-700 px-4 py-2 text-green-700 lg:w-80">
              Save Seller
            </button>
          </div>
        </div>
        <div className="border-b border-t py-4">
          <h3 className="mb-2 text-lg font-medium">Seller feedback (1,888)</h3>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="border-b pb-4">
                <p>
                  <span className="font-medium">Nguyen Thanh Son</span>
                </p>
                <p>
                  Very happy with purchase. I love these sneakers. Wow, shipping
                  was practically overnight.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h3 className="pb-2 pt-2">You may also like</h3>
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="rounded p-4 shadow">
            <img src="" alt="Error" className="h-40 w-full object-cover" />
            <h2 className="mb-2 text-xl font-medium">Ultimate golden item</h2>
            <p>$1350</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceBid;
