import React, { useEffect, useState } from 'react';
import images from '../../assets/images/image';
import { getShoeSizes, getCategories, getSearchResult } from '../../api/api.js';

const SearchPage = () => {
  const [shoeSizes, setShoeSizes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [shoeSizesData, categoriesData, searchResultData] =
          await Promise.all([
            getShoeSizes(),
            getCategories(),
            getSearchResult(),
          ]);

        setShoeSizes(shoeSizesData);
        setCategories(categoriesData);
        setSearchResult(searchResultData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <div className="flex flex-col lg:flex-row">
        <div className="mb-6 w-full bg-white p-4 lg:mb-0 lg:w-1/5">
          <div
            className="flex items-center justify-between"
            onClick={() => setIsActive(!isActive)}
          >
            <h2 className="mb-4 text-xl font-bold">Category</h2>
            {isActive && (
              <img
                src={images.minusIcon}
                className="mb-3 h-4 w-4"
                alt="Error"
              />
            )}
          </div>
          {isActive && (
            <ul>
              {/* {categories.map(category => (
              <li key={category.id} className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">{category.name}</a>
              </li>
            ))} */}
              <li className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">
                  XXX AAAA XXXX
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">
                  XXX AAA
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">
                  XXX TTTTT{' '}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">
                  XXX AAAA
                </a>
              </li>
            </ul>
          )}
          <div className="pt-10">
            <hr />
          </div>
          <h2 className="mb-4 mt-6 text-xl font-bold">US Shoe Size</h2>
          <ul>
            {/* {shoeSizes.map(size => (
              <li key={size.id} className="mb-2">
                <input type="checkbox" id={`size${size.id}`} name={`size${size.id}`} className="bg-white border-gray-300 rounded" />
                <label htmlFor={`size${size.id}`} className="ml-2">{size.label}</label>
              </li>
            ))} */}
            <li className="mb-2">
              <input type="checkbox" className="rounded bg-white" />
              <label className="ml-2">XXXX</label>
            </li>
            <li className="mb-2">
              <input type="checkbox" className="rounded bg-white" />
              <label className="ml-2">XXXX</label>
            </li>
            <li className="mb-2">
              <input type="checkbox" className="rounded bg-white" />
              <label className="ml-2">XXXX</label>
            </li>
            <li className="mb-2">
              <input type="checkbox" className="rounded bg-white" />
              <label className="ml-2">XXXX</label>
            </li>
          </ul>
          <a href="#" className="text-blue-500 hover:underline">
            See all
          </a>
        </div>

        <div className="w-full lg:ml-6 lg:w-4/5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold">6,100,000+ results for shoes</h3>
          </div>
          <div className="mb-4 flex flex-col flex-wrap justify-between sm:flex-row">
            <div className="mb-2 flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 md:mb-0">
              <div className="flex space-x-0 overflow-hidden rounded-full border border-gray-300">
                <button
                  onClick={() => setFilter('All')}
                  className={
                    filter === 'All'
                      ? 'border-gray-300 bg-black px-4 py-2 text-white'
                      : 'border-gray-300 bg-gray-200 px-4 py-2'
                  }
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('Auction')}
                  className={
                    filter === 'Auction'
                      ? 'border-gray-300 bg-black px-4 py-2 text-white'
                      : 'border-gray-300 bg-gray-200 px-4 py-2'
                  }
                >
                  Auction
                </button>
                <button
                  onClick={() => setFilter('Buy It Now')}
                  className={
                    filter === 'Buy It Now'
                      ? 'border-gray-300 bg-black px-4 py-2 text-white'
                      : 'border-gray-300 bg-gray-200 px-4 py-2'
                  }
                >
                  Buy It Now
                </button>
              </div>
              <button className="flex items-center justify-between rounded-full border border-gray-300 bg-gray-200 px-4 py-2">
                Condition{' '}
                <img
                  src={images.bottomArrow}
                  alt="Condition"
                  className="ml-1 inline-block h-4 w-4"
                />
              </button>
              <button className="flex items-center justify-between rounded-full border border-gray-300 bg-gray-200 px-4 py-2">
                Shipping{' '}
                <img
                  src={images.bottomArrow}
                  alt="Shipping"
                  className="ml-1 inline-block h-4 w-4"
                />
              </button>
            </div>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <button className="flex items-center justify-between rounded-full border border-gray-300 bg-gray-200 px-4 py-2">
                Sort: Best Match{' '}
                <img
                  src={images.bottomArrow}
                  alt="Sort Best Match"
                  className="ml-1 inline-block h-4 w-4"
                />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* {searchResult.map(product => (
                <div key={product.id} className="bg-white p-4 rounded shadow">
                    <img src="lebron-shoes.jpg" alt="Lebron James Sneakers" className="w-full h-32 object-cover mb-4" />
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p>Starting Bid: {product.startingBid}</p>
                    <p>Buy It Now: {product.price}</p>
                </div>
            ))} */}
            <div className="rounded bg-white p-4 shadow">
              <img
                src="lebron-shoes.jpg"
                alt="Lebron James Sneakers"
                className="mb-4 h-32 w-full object-cover"
              />
              <h2 className="text-lg font-bold">XXX</h2>
              <p>Starting Bid: XXX</p>
              <p>Buy It Now: XXX</p>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <img
                src="lebron-shoes.jpg"
                alt="Lebron James Sneakers"
                className="mb-4 h-32 w-full object-cover"
              />
              <h2 className="text-lg font-bold">XXX</h2>
              <p>Starting Bid: XXX</p>
              <p>Buy It Now: XXX</p>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <img
                src="lebron-shoes.jpg"
                alt="Lebron James Sneakers"
                className="mb-4 h-32 w-full object-cover"
              />
              <h2 className="text-lg font-bold">XXX</h2>
              <p>Starting Bid: XXX</p>
              <p>Buy It Now: XXX</p>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <img
                src="lebron-shoes.jpg"
                alt="Lebron James Sneakers"
                className="mb-4 h-32 w-full object-cover"
              />
              <h2 className="text-lg font-bold">XXX</h2>
              <p>Starting Bid: XXX</p>
              <p>Buy It Now: XXX</p>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <img
                src="lebron-shoes.jpg"
                alt="Lebron James Sneakers"
                className="mb-4 h-32 w-full object-cover"
              />
              <h2 className="text-lg font-bold">XXX</h2>
              <p>Starting Bid: XXX</p>
              <p>Buy It Now: XXX</p>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <img
                src="lebron-shoes.jpg"
                alt="Lebron James Sneakers"
                className="mb-4 h-32 w-full object-cover"
              />
              <h2 className="text-lg font-bold">XXX</h2>
              <p>Starting Bid: XXX</p>
              <p>Buy It Now: XXX</p>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <img
                src="lebron-shoes.jpg"
                alt="Lebron James Sneakers"
                className="mb-4 h-32 w-full object-cover"
              />
              <h2 className="text-lg font-bold">XXX</h2>
              <p>Starting Bid: XXX</p>
              <p>Buy It Now: XXX</p>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <img
                src="lebron-shoes.jpg"
                alt="Lebron James Sneakers"
                className="mb-4 h-32 w-full object-cover"
              />
              <h2 className="text-lg font-bold">XXX</h2>
              <p>Starting Bid: XXX</p>
              <p>Buy It Now: XXX</p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="mx-1 rounded-md bg-black px-4 py-2 text-white">
              1
            </button>
            <button className="mx-1 rounded-md bg-gray-100 px-4 py-2">2</button>
            <button className="mx-1 rounded-md bg-gray-100 px-4 py-2">3</button>
            <span className="mx-2">...</span>
            <button className="mx-1 rounded-md bg-gray-100 px-4 py-2">
              67
            </button>
            <button className="mx-1 rounded-md bg-gray-100 px-4 py-2">
              68
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
