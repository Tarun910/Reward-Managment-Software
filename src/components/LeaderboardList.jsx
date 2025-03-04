const LeaderboardList = ({ employees }) => {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Leaderboard</h3>
        <ul>
          {employees.map((emp, index) => (
            <li key={index} className="py-2">
              {index + 1}. {emp.name} - {emp.points} Points
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default LeaderboardList;
  