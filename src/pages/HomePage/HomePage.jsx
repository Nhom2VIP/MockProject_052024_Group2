import React, { useEffect, useState } from 'react';
import images from '../../assets/images/image';
import Ongoing from './Ongoing.json';
import Upcomming from './Upcomming.json';
import OngoingCard from '../../components/Card/OngoingCard';
import UpcommingCard from '../../components/Card/UpcommingCard';
import Pagination from '../../components/Pagination/Pagination';

const SALE = [
  <div className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden">
    <img
      src={images.springSale}
      alt="Spring Sale"
      className="h-[95%] w-[95%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rounded-md"
    />
  </div>,
  <div className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden">
    <img
      src={images.summerSale}
      alt="Summer Sale"
      className="h-[95%] w-[95%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rounded-md"
    />
  </div>,
  <div className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden">
    <img
      src={images.winterSale}
      alt="Winter Sale"
      className="h-[95%] w-[95%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rounded-md"
    />
  </div>,
];

const HomePage = () => {
  const [ongoingPage, setOngoingPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);
  const ongoingPageSize = 2;
  const [upcomingPageSize, setUpcomingPageSize] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setUpcomingPageSize(6);
      } else {
        setUpcomingPageSize(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="w-full">
      <main className="container mx-auto p-4 md:w-[80%]">
        <section className="my-8 flex flex-wrap justify-center space-y-2 text-center">
          <img
            src={images.biDMarket}
            alt="Spring Sale"
            className="w-full md:w-1/2"
          />
          <img
            src={images.auction}
            alt="Spring Sale"
            className="w-full md:w-1/2"
          />
        </section>

        <section className="my-8">
          <h2 className="mb-5 text-2xl font-bold">Featured Event</h2>
          <div className="relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-[''] md:before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] md:after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)]">
            <div className="animate-infinite-slider flex w-[calc(250px*10)]">
              {SALE.map((logo, index) => (
                <div
                  className="slide flex w-full items-center justify-center sm:w-1/2 md:w-1/3 lg:w-1/4"
                  key={index}
                >
                  {logo}
                </div>
              ))}
              {SALE.map((logo, index) => (
                <div
                  className="slide flex w-full items-center justify-center sm:w-1/2 md:w-1/3 lg:w-1/4"
                  key={index}
                >
                  {logo}
                </div>
              ))}
            </div>
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
          <div className="flex flex-wrap justify-center">
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
