import images from '../../assets/images/image';

const UpcommingCard = ({ data }) => {
  return (
    <div className="flex w-full flex-col p-4 sm:w-1/3 sm:flex-row">
      <img
        src={images.rainbowDiamond}
        alt="Rainbow Diamond"
        className="w-full transition-all delay-300 ease-in-out hover:scale-105 hover:rounded-md sm:w-1/2"
      />
      <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 sm:ml-4 sm:mt-0 sm:w-1/2">
        <h3 className="text-center text-lg font-bold sm:text-xl">
          {data.name}
        </h3>
        <p className="text-center">Starting Bid: ${data.startBid}</p>
        <p className="text-center">Start date: {data.startDate}</p>
        <button className="rounded-full bg-red-600 px-4 py-2 text-white transition-all delay-300 ease-in-out hover:scale-105">
          Details
        </button>
      </div>
    </div>
  );
};

export default UpcommingCard;
