import React, { useState } from 'react';
import images from '../../assets/images/image';
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
    ongoingPage * ongoingPageSize,
  );

  const displayedUpcoming = Upcomming.slice(
    (upcomingPage - 1) * upcomingPageSize,
    upcomingPage * upcomingPageSize,
  );

  return (
    <div className="">
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
          <div className="flex flex-wrap justify-between gap-5">
            {displayedOngoing.map((item, index) => {
              return <OngoingCard data={item} key={index} />;
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
            {displayedUpcoming.map((item, index) => {
              return <UpcommingCard data={item} key={index} />;
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
