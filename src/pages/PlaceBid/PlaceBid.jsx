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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded">
          <div className="p-4 rounded shadow h-96">
            <img src="" alt="Error" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-wrap justify-between mt-5">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="p-4 rounded shadow w-full sm:w-1/2 lg:w-1/3">
                <img src="" alt="Error" className="h-40 w-full object-cover" />
                <h2 className="text-xl font-medium mb-2">Ultimate golden item</h2>
                <p>$1350</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded">
          <h2 className="text-2xl font-medium mb-2">Content for the second column in the first row</h2>
          <div className="pt-4">
            <div className="flex items-center gap-4">
              <img src={image.saleIcon} className='w-12' alt="Error" />
              <div>
                <strong className="flex items-center gap-2">wowashoppk (2495)</strong>
                <p className="flex items-center gap-2 pb-2">
                  <a href="!#" className="underline">99.2% positive</a>
                  <a href="!#" className="underline">Seller's other items</a>
                  <a href="!#" className="underline">Contact seller</a>
                </p>
              </div>
            </div>
            <p className="pt-2 pb-2">Description: ....</p>
            <p>Time left: 6d 04h | Sunday</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between mt-6">
            <div>
              <div className="flex items-center gap-3">
                <p>Current bid:</p>
                <strong className="text-2xl">US $3600.00</strong>
              </div>
              <textarea className="w-full lg:w-60 text-black border p-2 ml-8 mt-2" />
              <p className="ml-8 mt-2">Enter US $3600.00 or more</p>
              <p className="ml-8 mt-2">215 watches</p>
            </div>
            <div className="flex flex-col items-center space-y-2 mt-4 lg:mt-0">
              <button className="bg-green-700 text-white px-4 py-2 rounded-full w-full lg:w-80">Place bid</button>
              <button className="border border-green-700 text-green-700 px-4 py-2 rounded-full w-full lg:w-80">Add To Watchlist</button>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-4 flex flex-col sm:flex-row gap-2">
              <h4 className="text-lg font-medium">Shipping:</h4>
              <div>
                <p>Free Expedited International Shipping. <a href="#" className="underline">See details for shipping</a></p>
                <p>International shipment of items may be subject to customs processing and additional charges.</p>
                <p>Located in: Osaka, Japan</p>
              </div>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row gap-3">
              <h4 className="text-lg font-medium">Delivery:</h4>
              <div>
                <p>Estimated between Tue, Jul 9 and Fri, Jul 19</p>
                <p>Includes 6 business days handling time after receipt of cleared payment.</p>
                <p>Please allow additional time if international delivery is subject to customs processing.</p>
              </div>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row gap-4">
              <h4 className="text-lg font-medium">Returns:</h4>
              <p>60 days returns. Seller pays for return shipping. <a href="#" className="underline">See details for more information about returns</a></p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="pb-3">Similar items</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-4">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="p-4 rounded shadow">
            <img src="" alt="Error" className="h-40 w-full object-cover" />
            <h2 className="text-xl font-medium mb-2">Ultimate golden item</h2>
            <p>$1350</p>
          </div>
        ))}
      </div>
      <div className="pb-3">
        <a href="!#" className="underline">About this item</a>
        <p>Seller assumes all responsibility for this listing</p>
        <p>Last update on July 01, 2024 07:05:45 <a href="!#" className="underline">View all revisions</a></p>
      </div>
      <div className="bg-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src="your-image-src.jpg" alt="OnlyWatch" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-bold">OnlyWatch</h2>
              <p>99.8% positive feedback</p>
              <p>9.3K items sold</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="bg-green-700 text-white px-4 py-2 rounded-full w-full lg:w-80">Visit store</button>
            <button className="border border-green-700 text-green-700 px-4 py-2 rounded-full w-full lg:w-80">Contact</button>
            <button className="border border-green-700 text-green-700 px-4 py-2 rounded-full w-full lg:w-80">Save Seller</button>
          </div>
        </div>
        <div className="border-t border-b py-4">
          <h3 className="text-lg font-medium mb-2">Seller feedback (1,888)</h3>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="border-b pb-4">
                <p><span className="font-medium">Nguyen Thanh Son</span></p>
                <p>Very happy with purchase. I love these sneakers. Wow, shipping was practically overnight.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h3 className="pt-2 pb-2">You may also like</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-4">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="p-4 rounded shadow">
            <img src="" alt="Error" className="h-40 w-full object-cover" />
            <h2 className="text-xl font-medium mb-2">Ultimate golden item</h2>
            <p>$1350</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceBid;
