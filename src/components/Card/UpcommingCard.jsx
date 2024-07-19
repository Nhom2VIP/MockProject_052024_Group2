import images from '../../assets/images/image';

const UpcommingCard = ({ data }) => {
  return (
    <div className="flex w-1/3 p-4">
      <img
        src={images.rainbowDiamond}
        alt="Rainbow Diamond"
        className="w-1/2"
      />
      <div className="flex w-1/2 flex-col items-center justify-center gap-4">
        <h3 className="text-xl font-bold">{data.name}</h3>
        <p>Starting Bid: ${data.startBid}</p>
        <p>Start date: {data.startDate}</p>
        <button className="rounded-full bg-red-600 px-4 py-2 text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default UpcommingCard;
