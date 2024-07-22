import { useNavigate } from 'react-router-dom';
import images from '../../assets/images/image';
import { ChevronDown } from 'lucide-react';
import { useCallback, useState } from 'react';
import { debounce } from 'lodash';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('All Categories');

  const debouncedSearch = useCallback(
    debounce((term) => {
      console.log('Searching for:', term);
    }, 300),
    [],
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSearch = () => {
    navigate(
      `/search?searchTerm=${encodeURIComponent(searchTerm)}&option=${encodeURIComponent(selectedOption)}`,
    );
  };

  return (
    <nav>
      <div className="border-b bg-white py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-700">
              Hi Khoa!
            </a>
            <a href="#" className="text-sm text-gray-700">
              Daily deals
            </a>
            <a href="#" className="text-sm text-gray-700">
              Help & Contact
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-700">
              Ship to
            </a>
            <a href="#" className="text-sm text-gray-700">
              Sell
            </a>
            <a href="#" className="text-sm text-gray-700">
              Watchlist
            </a>
            <a href="#" className="text-sm text-gray-700">
              My eBay
            </a>
            <a href="#" className="text-sm text-gray-700">
              <i className="fas fa-bell"></i>
            </a>
            <a href="#" className="text-sm text-gray-700">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-b bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
          <div className="flex w-full flex-wrap items-center space-x-4 md:w-auto md:space-x-8">
            <div className="relative w-full md:w-auto">
              <div className="flex">
                <div
                  onClick={() => navigate('/')}
                  className="flex cursor-pointer items-center space-x-4"
                >
                  <img src={images.logo} alt="Logo" className="md:h-30 h-20" />
                </div>
                <button className="my-auto flex bg-white px-4 py-2 outline-none md:w-auto">
                  Shop by category <ChevronDown />
                </button>
              </div>
            </div>
            <div className="flex w-full items-center overflow-hidden border border-gray-300 md:w-auto">
              <input
                type="text"
                value={searchTerm}
                autoComplete="off"
                onChange={handleInputChange}
                className="w-full px-4 py-2 outline-none md:w-64 lg:w-[600px]"
                placeholder="Search for anything"
              />
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="border-l border-gray-300 bg-white px-4 py-2"
              >
                <option value="All Categories">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home & Garden">Home & Garden</option>
              </select>
            </div>
            <button
              className="bg-green-600 px-4 py-2 text-white md:px-8"
              onClick={handleSearch}
            >
              Search
            </button>
            <a href="#" className="ml-2 text-green-600">
              Advanced
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
