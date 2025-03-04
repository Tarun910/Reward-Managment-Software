const Card = ({ title, value }) => {
    return (
      <div className="bg-gray-200 text-gray-800 p-6 rounded-xl shadow-lg w-88 h-44 text-center 
                      transition-all duration-300 hover:shadow-inner hover:scale-105 
                      shadow-[5px_5px_15px_#b8b8b8,-5px_-5px_15px_#ffffff] mx-12 my-4">
        <h3 className="text-lg font-semibold ">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
      </div>
    );
  };
  
  export default Card;
  