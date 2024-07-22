import { useNavigate } from 'react-router-dom';
import images from '../../assets/images/image';

const OngoingCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col border p-4 sm:w-[48%] sm:flex-row">
      <img
        src={images.bloodRuby}
        alt="Blood Ruby"
        className="aspect-square w-full transition-all delay-300 ease-in-out hover:scale-105 hover:rounded-md sm:w-[50%]"
      />
      <div className="mt-4 flex w-full flex-col items-center justify-between gap-4 sm:ml-4 sm:mt-0 sm:w-[50%]">
        <div className="my-5 flex flex-col items-center gap-4">
          <h3 className="text-center text-xl font-extrabold sm:text-2xl">
            {data.name}
          </h3>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-lg font-semibold sm:text-xl">
              Current Bid: ${data.currentBid}
            </p>
            <p className="text-lg font-semibold sm:text-xl">
              Remaining time: {data.remainingTime}
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate('/place-bid')}
          className="rounded-md bg-red-600 px-4 py-2 text-white transition-all delay-300 ease-in-out hover:scale-105 hover:rounded-md"
        >
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default OngoingCard;
