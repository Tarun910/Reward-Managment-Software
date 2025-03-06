const Card = ({ title, value }) => {
  return (
    <div className="bg-[#1F509A] text-white p-6 rounded-xl shadow-lg w-80 h-40 text-center 
                    transition-all duration-300 hover:shadow-2xl hover:scale-105 
                    shadow-[5px_5px_15px_#163C78,-5px_-5px_15px_#2A68C5] 
                    mx-6 my-4 flex flex-col bg-gradient-to-b from-[#1F509A] to-[#163C78] ">
      <h3 className="text-lg font-semibold uppercase tracking-wide">{title}</h3>
      <p className="text-4xl font-extrabold mt-2">{value}</p>
    </div>


  );
};

export default Card;


