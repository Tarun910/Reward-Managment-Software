const RecentActivityCard = ({ name, designation, points }) => {
  return (
    <div className="bg-gray-100 p-5 rounded-xl shadow-lg w-99 h-28 flex items-center gap-4 
                    shadow-[5px_5px_15px_#b8b8b8,-5px_-5px_15px_#ffffff] 
                    hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Profile Avatar */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold shadow-md">
        {name[0]}
      </div>

      {/* User Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{designation}</p>
        <p className="text-xs text-gray-500 mt-1">{name} gave you <span className="font-semibold text-green-600">+{points} points</span>.</p>
      </div>

      {/* Points Badge */}
      <div className="px-3 py-1 bg-green-500 text-white text-md font-semibold rounded-lg shadow-md">
        +{points} ⭐
      </div>

    </div>
  );
};

export default RecentActivityCard;
