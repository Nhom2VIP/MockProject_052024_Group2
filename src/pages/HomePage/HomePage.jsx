import React, { useState } from 'react';
import images from '../../assets/images/image';
import { ChevronDown } from 'lucide-react';
import Ongoing from './Ongoing.json';
import Upcomming from './Upcomming.json';
import OngoingCard from '../../components/Card/OngoingCard';
import UpcommingCard from '../../components/Card/UpcommingCard';
import Pagination from '../../components/Pagination/Pagination';

const HomePage = () => {
  const [ongoingPage, setOngoingPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);
  const ongoingPageSize = 2;
  const upcomingPageSize = 6;

  const ongoingTotalPages = Math.ceil(Ongoing.length / ongoingPageSize);
  const upcomingTotalPages = Math.ceil(Upcomming.length / upcomingPageSize);

  const displayedOngoing = Ongoing.slice(
    (ongoingPage - 1) * ongoingPageSize,
    ongoingPage * ongoingPageSize
  );

  const displayedUpcoming = Upcomming.slice(
    (upcomingPage - 1) * upcomingPageSize,
    upcomingPage * upcomingPageSize
  );

  return (
    <div className="">
      <div className="border-b bg-white py-2">
        <div className="container mx-auto flex items-center justify-between px-4">
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
        <div className="mx-auto flex items-center px-4 py-2">
          <div className="flex items-center space-x-4">
            <img src={images.logo} alt="Logo" className="h-30" />
          </div>
          <div className="flex items-center space-x-8">
            <div className="relative">
              <button className="bg-white flex px-4 py-2 outline-none">
                Shop by category <ChevronDown />
              </button>
            </div>
            <div className="flex items-center overflow-hidden border border-gray-300">
              <input
                type="text"
                className="w-[600px] px-4 py-2 outline-none"
                placeholder="Search for anything"
              />
              <select className="border-l border-gray-300 bg-white px-4 py-2">
                <option>All Categories</option>
              </select>
            </div>
            <button className="bg-green-600 px-8 py-2 text-white">
              Search
            </button>
            <button href="#" className="ml-2 text-green-600">
              Advanced
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto w-[80%] p-4">
        <section className="my-8 flex text-center">
          <img src={images.biDMarket} alt="Spring Sale" className="" />
          <img src={images.auction} alt="Spring Sale" className="" />
        </section>

        <section className="my-8">
          <h2 className="mb-5 text-2xl font-bold">Featured Event</h2>
          <div className="flex gap-8">
            <img
              src={images.springSale}
              alt="Spring Sale"
              className="w-full cursor-pointer transition-all delay-300 ease-in-out hover:scale-105 hover:rounded-md"
            />
            <img
              src={images.summerSale}
              alt="Summer Sale"
              className="w-full cursor-pointer transition-all delay-300 ease-in-out hover:scale-105 hover:rounded-md"
            />
            <img
              src={images.winterSale}
              alt="Winter Sale"
              className="w-full cursor-pointer transition-all delay-300 ease-in-out hover:scale-105 hover:rounded-md"
            />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold">Ongoing Auctions</h2>
          <div className="flex flex-wrap gap-5 justify-between">
            {displayedOngoing.map((item, index) => {
              return(
                <OngoingCard data={item} key={index}/>
              )
            })}
            
          </div>
          <div className="my-4 flex justify-center">
          <Pagination
              totalPages={ongoingTotalPages}
              currentPage={ongoingPage}
              onPageChange={setOngoingPage}
            />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold">Upcoming Auctions</h2>
          <div className="flex w-full flex-wrap">
            {displayedUpcoming.map((item,index) => {
              return(
                <UpcommingCard data={item} key={index}/>
              )
            })}
          </div>
          
          <div className="my-4 flex justify-center">
          <Pagination
              totalPages={upcomingTotalPages}
              currentPage={upcomingPage}
              onPageChange={setUpcomingPage}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
