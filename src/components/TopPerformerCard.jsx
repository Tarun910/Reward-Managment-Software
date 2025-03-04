const Card = ({ name, score, rank, image }) => {
    return (
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6 rounded-xl shadow-lg 
                      w-80 h-52 text-center transition-all duration-300 hover:scale-105 
                      shadow-[5px_5px_15px_#b8b8b8,-5px_-5px_15px_#ffffff] mx-12 my-4">
        
        {/* User Profile Picture */}
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full mx-auto border-4 border-white shadow-md"
        />
  
        {/* User Name */}
        <h3 className="text-xl font-semibold mt-2">{name}</h3>
  
        {/* Performance Score & Rank */}
        <p className="text-lg mt-1">Rank: <span className="font-bold">#{rank}</span></p>
        <p className="text-2xl font-bold mt-1">Score: {score}</p>
        
      </div>
    );
  };
  
  export default Card;
  