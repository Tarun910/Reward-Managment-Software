const RewardItem = ({ title, description }) => {
    return (
      <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    );
  };
  
  export default RewardItem;
  