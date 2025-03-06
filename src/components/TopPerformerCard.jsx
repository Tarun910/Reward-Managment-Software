const Card = ({ name, score, rank, image }) => {
    return (
      <div className="bg-gradient-to-r from-[#163C78] to-[#1F509A] text-white p-2 rounded-xl shadow-lg  
      w-80 h-47 text-center transition-all duration-300 hover:scale-105 
      shadow-[5px_5px_15px_#0F2A5D,-5px_-5px_15px_#1A468D] mx-10 my-2">

        
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
  