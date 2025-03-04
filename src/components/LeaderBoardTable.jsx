import { useState } from "react";

const LeaderBoardTable = ({ isHR }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", peerScore: 8, pmsScore: 7, totalScore: 15 },
    { id: 2, name: "Jane Smith", peerScore: 9, pmsScore: 6, totalScore: 15 },
    { id: 3, name: "Alice Johnson", peerScore: 7, pmsScore: 8, totalScore: 15 },
    { id: 4, name: "Bob Brown", peerScore: 8, pmsScore: 7, totalScore: 15 },
    { id: 5, name: "Chris Evans", peerScore: 6, pmsScore: 9, totalScore: 15 },
    { id: 6, name: "Emma Watson", peerScore: 7, pmsScore: 6, totalScore: 13 },
    { id: 7, name: "Michael Jordan", peerScore: 8, pmsScore: 8, totalScore: 16 },
    { id: 8, name: "Serena Williams", peerScore: 9, pmsScore: 7, totalScore: 16 },
    { id: 9, name: "Tom Holland", peerScore: 6, pmsScore: 6, totalScore: 12 },
    { id: 10, name: "Scarlett Johansson", peerScore: 7, pmsScore: 7, totalScore: 14 },
    { id: 11, name: "Robert Downey Jr.", peerScore: 8, pmsScore: 8, totalScore: 16 },
    { id: 12, name: "Elon Musk", peerScore: 9, pmsScore: 7, totalScore: 16 },
    { id: 13, name: "Jeff Bezos", peerScore: 7, pmsScore: 6, totalScore: 13 },
    { id: 14, name: "Mark Zuckerberg", peerScore: 6, pmsScore: 8, totalScore: 14 },
    { id: 15, name: "Cristiano Ronaldo", peerScore: 9, pmsScore: 9, totalScore: 18 },
    { id: 16, name: "Lionel Messi", peerScore: 10, pmsScore: 9, totalScore: 19 },
    { id: 17, name: "Neymar Jr.", peerScore: 8, pmsScore: 8, totalScore: 16 },
    { id: 18, name: "Usain Bolt", peerScore: 7, pmsScore: 7, totalScore: 14 },
    { id: 19, name: "Virat Kohli", peerScore: 9, pmsScore: 8, totalScore: 17 },
    { id: 20, name: "Rafael Nadal", peerScore: 8, pmsScore: 7, totalScore: 15 },
  ]);

  const handleEditPMS = (id, newPmsScore) => {
    if (!isHR) return;
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              pmsScore: newPmsScore,
              totalScore: emp.peerScore + newPmsScore,
            }
          : emp
      )
    );
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto mt-10">
      {/* Title & Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Leaderboard</h2>
        <input
          type="text"
          placeholder="Search employee..."
          className="p-2 border rounded-lg w-1/4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table Container */}
      <div className="max-h-[500px] overflow-y-auto border border-gray-300 rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 text-gray-700 sticky top-0">
            <tr>
              <th className="border border-gray-300 p-3 w-1/12">Rank</th>
              <th className="border border-gray-300 p-3 w-3/12">Name</th>
              <th className="border border-gray-300 p-3 w-2/12">Peer Score</th>
              <th className="border border-gray-300 p-3 w-2/12">PMS Score</th>
              <th className="border border-gray-300 p-3 w-2/12">Total Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp, index) => (
              <tr key={emp.id} className="text-center border-t">
                <td className="border border-gray-300 p-3">{index + 1}</td>
                <td className="border border-gray-300 p-3">{emp.name}</td>
                <td className="border border-gray-300 p-3">{emp.peerScore}</td>
                <td className="border border-gray-300 p-3">
                  {isHR ? (
                    <input
                      type="number"
                      className="w-16 text-center border border-gray-400 rounded"
                      value={emp.pmsScore}
                      onChange={(e) =>
                        handleEditPMS(emp.id, Math.max(0, Math.min(10, +e.target.value)))
                      }
                    />
                  ) : (
                    <span>{emp.pmsScore}</span>
                  )}
                </td>
                <td className="border border-gray-300 p-3 font-bold">{emp.totalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoardTable;
