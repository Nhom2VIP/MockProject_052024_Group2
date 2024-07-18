import React, { useEffect, useState } from 'react';
import images from '../../assets/images/image';
import { getShoeSizes, getCategories, getSearchResult } from "../../api/api.js";

const SearchPage = () => {
  const [shoeSizes, setShoeSizes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [filter, setFilter] = useState("All");
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [shoeSizesData, categoriesData, searchResultData] = await Promise.all([
            getShoeSizes(),
            getCategories(),
            getSearchResult()
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
    <div className="p-6 min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/5 bg-white p-4 mb-6 lg:mb-0">
          <div className="flex items-center justify-between" onClick={() => setIsActive(!isActive)}>
            <h2 className="text-xl font-bold mb-4">Category</h2>
            { isActive && <img src={images.minusIcon} className="w-4 h-4 mb-3" alt='Error' /> }
          </div>
          { isActive && <ul>
            {/* {categories.map(category => (
              <li key={category.id} className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">{category.name}</a>
              </li>
            ))} */}
            <li className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">XXX AAAA XXXX</a>
            </li>
            <li className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">XXX AAA</a>
            </li>
            <li className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">XXX TTTTT </a>
            </li>
            <li className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">XXX AAAA</a>
            </li>
          </ul> }
          <div className='pt-10'><hr /></div>
          <h2 className="text-xl font-bold mt-6 mb-4">US Shoe Size</h2>
          <ul>
            {/* {shoeSizes.map(size => (
              <li key={size.id} className="mb-2">
                <input type="checkbox" id={`size${size.id}`} name={`size${size.id}`} className="bg-white border-gray-300 rounded" />
                <label htmlFor={`size${size.id}`} className="ml-2">{size.label}</label>
              </li>
            ))} */}
            <li className="mb-2">
                <input type="checkbox" className="bg-white rounded" />
                <label className="ml-2">XXXX</label>
            </li>
            <li className="mb-2">
                <input type="checkbox" className="bg-white rounded" />
                <label className="ml-2">XXXX</label>
            </li>
            <li className="mb-2">
                <input type="checkbox" className="bg-white rounded" />
                <label className="ml-2">XXXX</label>
            </li>
            <li className="mb-2">
                <input type="checkbox" className="bg-white rounded" />
                <label className="ml-2">XXXX</label>
            </li>
          </ul>
          <a href="#" className="text-blue-500 hover:underline">See all</a>
        </div>

        <div className="w-full lg:w-4/5 lg:ml-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">6,100,000+ results for shoes</h3>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mb-4 flex-wrap">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-2 md:mb-0">
              <div className="flex space-x-0 rounded-full border border-gray-300 overflow-hidden">
                <button onClick={() => setFilter("All")} className={ filter === "All" ? "bg-black px-4 py-2 border-gray-300 text-white" : "bg-gray-200 px-4 py-2 border-gray-300"}>All</button>
                <button onClick={() => setFilter("Auction")} className={ filter === "Auction" ? "bg-black px-4 py-2 border-gray-300 text-white" : "bg-gray-200 px-4 py-2 border-gray-300"}>Auction</button>
                <button onClick={() => setFilter("Buy It Now")} className={ filter === "Buy It Now" ? "bg-black px-4 py-2 border-gray-300 text-white" : "bg-gray-200 px-4 py-2 border-gray-300"}>Buy It Now</button>
              </div>
              <button className="bg-gray-200 px-4 py-2 rounded-full border border-gray-300 flex items-center justify-between">Condition <img src={images.bottomArrow} alt="Condition" className="inline-block w-4 h-4 ml-1" /></button>
              <button className="bg-gray-200 px-4 py-2 rounded-full border border-gray-300 flex items-center justify-between">Shipping <img src={images.bottomArrow} alt="Shipping" className="inline-block w-4 h-4 ml-1" /></button>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <button className="bg-gray-200 px-4 py-2 rounded-full border border-gray-300 flex items-center justify-between">Sort: Best Match <img src={images.bottomArrow} alt="Sort Best Match" className="inline-block w-4 h-4 ml-1" /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* {searchResult.map(product => (
                <div key={product.id} className="bg-white p-4 rounded shadow">
                    <img src="lebron-shoes.jpg" alt="Lebron James Sneakers" className="w-full h-32 object-cover mb-4" />
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p>Starting Bid: {product.startingBid}</p>
                    <p>Buy It Now: {product.price}</p>
                </div>
            ))} */}
            <div className="bg-white p-4 rounded shadow">
                <img src="lebron-shoes.jpg" alt="Lebron James Sneakers" className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-bold">XXX</h2>
                <p>Starting Bid: XXX</p>
                <p>Buy It Now: XXX</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
                <img src="lebron-shoes.jpg" alt="Lebron James Sneakers" className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-bold">XXX</h2>
                <p>Starting Bid: XXX</p>
                <p>Buy It Now: XXX</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
                <img src="lebron-shoes.jpg" alt="Lebron James Sneakers" className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-bold">XXX</h2>
                <p>Starting Bid: XXX</p>
                <p>Buy It Now: XXX</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
                <img src="lebron-shoes.jpg" alt="Lebron James Sneakers" className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-bold">XXX</h2>
                <p>Starting Bid: XXX</p>
                <p>Buy It Now: XXX</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
                <img src="lebron-shoes.jpg" alt="Lebron James Sneakers" className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-bold">XXX</h2>
                <p>Starting Bid: XXX</p>
                <p>Buy It Now: XXX</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
                <img src="lebron-shoes.jpg" alt="Lebron James Sneakers" className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-bold">XXX</h2>
                <p>Starting Bid: XXX</p>
                <p>Buy It Now: XXX</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
                <img src="lebron-shoes.jpg" alt="Lebron James Sneakers" className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-bold">XXX</h2>
                <p>Starting Bid: XXX</p>
                <p>Buy It Now: XXX</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
                <img src="lebron-shoes.jpg" alt="Lebron James Sneakers" className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-bold">XXX</h2>
                <p>Starting Bid: XXX</p>
                <p>Buy It Now: XXX</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-black rounded-md px-4 py-2 mx-1 text-white">1</button>
            <button className="bg-gray-100 rounded-md px-4 py-2 mx-1">2</button>
            <button className="bg-gray-100 rounded-md px-4 py-2 mx-1">3</button>
            <span className="mx-2">...</span>
            <button className="bg-gray-100 rounded-md px-4 py-2 mx-1">67</button>
            <button className="bg-gray-100 rounded-md px-4 py-2 mx-1">68</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
