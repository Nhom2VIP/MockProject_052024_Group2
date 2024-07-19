import { useNavigate } from 'react-router-dom';
import images from '../../assets/images/image';

const OngoingCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-[48%] border p-4">
      <img
        src={images.bloodRuby}
        alt="Blood Ruby"
        className="w-[50%] transition-all delay-300 ease-in-out hover:scale-105 hover:rounded-md"
      />
      <div className="flex w-[50%] flex-col items-center justify-between gap-4">
        <div className="my-5 flex flex-col items-center gap-4">
          <h3 className="text-2xl font-extrabold">{data.name}</h3>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">
              Current Bid: ${data.currentBid}
            </p>
            <p className="text-xl font-semibold">
              Remaining time: {data.remainingTime}
            </p>
          </div>
        </div>
        <button onClick={() => navigate("/place-bid")} className="rounded-md bg-red-600 px-4 py-2 text-white transition-all delay-300 ease-in-out hover:scale-105 hover:rounded-md">
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default OngoingCard;
