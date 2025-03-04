const PointsHistory = ({ history }) => {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Points History</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index} className="py-2">{entry}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PointsHistory;
  