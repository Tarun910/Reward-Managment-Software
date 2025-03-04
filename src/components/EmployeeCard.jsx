const EmployeeCard = ({ name, role, points }) => {
    return (
      <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{role}</p>
        <p className="text-xl font-bold">{points} Points</p>
      </div>
    );
  };
  
  export default EmployeeCard;
  