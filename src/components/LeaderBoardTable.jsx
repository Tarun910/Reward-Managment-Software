import { useState } from "react";
import { FaEdit, FaUserPlus, FaTrash, FaTimes } from "react-icons/fa"; // Import Close Icon

const LeaderBoardTable = ({ isHR }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Employee ${i + 1}`,
      peerScore: Math.floor(Math.random() * 10) + 1,
      pmsScore: Math.floor(Math.random() * 10) + 1,
      totalScore: 0,
    })).map((emp) => ({ ...emp, totalScore: emp.peerScore + emp.pmsScore }))
  );

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [newPmsScore, setNewPmsScore] = useState(0);
  const [newEmployeeName, setNewEmployeeName] = useState("");

  const openAddEmployeePopup = () => {
    setIsPopupOpen(true);
    setSelectedEmployee(null);
    setNewEmployeeName("");
  };

  const handleAddEmployee = () => {
    if (newEmployeeName.trim() === "") return alert("Enter employee name!");

    const newEmployee = {
      id: employees.length + 1,
      name: newEmployeeName,
      peerScore: 0,
      pmsScore: 0,
      totalScore: 0,
    };

    setEmployees((prevEmployees) => [...prevEmployees, newEmployee].sort((a, b) => b.totalScore - a.totalScore));
    setIsPopupOpen(false);
  };

  const handleRemoveEmployee = (id) => {
    setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id).sort((a, b) => b.totalScore - a.totalScore));
  };

  const openEditPopup = (employee) => {
    if (!isHR) return;
    setSelectedEmployee(employee);
    setNewPmsScore(employee.pmsScore);
    setIsPopupOpen(true);
  };

  const handleUpdatePMS = () => {
    if (!isHR || selectedEmployee === null) return;

    setEmployees((prevEmployees) =>
      prevEmployees
        .map((emp) =>
          emp.id === selectedEmployee.id
            ? { ...emp, pmsScore: newPmsScore, totalScore: emp.peerScore + newPmsScore }
            : emp
        )
        .sort((a, b) => b.totalScore - a.totalScore)
    );

    setIsPopupOpen(false);
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-1 rounded-lg w-full max-w-6xl mx-auto mt-2">
      {/* Title & Search Bar with Add Employee Icon */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-3xl font-bold text-[#163C78] flex-1 text-left">Leaderboard</h2>

        {/* Search Bar + Add Employee Icon */}
        <div className="flex items-center mr-20 gap-1">
          <input
            type="text"
            placeholder="Search employee..."
            className="p-2 border border-black rounded-lg w-64 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {isHR && (
            <button
              onClick={openAddEmployeePopup}
              className="bg-[#163C78] text-white p-3 rounded-lg hover:bg-[#122d5b] transition"
            >
              <FaUserPlus />
            </button>
          )}
        </div>
      </div>

      {/* Table Container with Scroll */}
      <div className="max-h-[500px] overflow-y-auto rounded-lg scrollbar-hide hover:scrollbar-highlight">
        <table className="w-full border-collapse">
          {/* Header with Dark Blue Background */}
          <thead className="bg-[#163C78] text-white sticky top-0">
            <tr>
              <th className="p-3 text-left">Rank</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Peer Score</th>
              <th className="p-3 text-left">PMS Score</th>
              <th className="p-3 text-left">Total Score</th>
              {isHR && <th className="p-3 text-left">Actions</th>}
            </tr>
          </thead>

          {/* Table Body without Borders */}
          <tbody>
            {filteredEmployees.map((emp, index) => (
              <tr key={emp.id} className="hover:bg-gray-100 transition">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.peerScore}</td>
                <td className="p-3">{emp.pmsScore}</td>
                <td className="p-3 font-bold">{emp.totalScore}</td>

                {isHR && (
                  <td className="p-3 flex gap-3">
                    <button onClick={() => openEditPopup(emp)}>
                      <FaEdit className="text-[#163C78] text-xl cursor-pointer hover:text-[#122d5b]" />
                    </button>
                    <button onClick={() => handleRemoveEmployee(emp.id)}>
                      <FaTrash className="text-red-500 text-xl cursor-pointer hover:text-red-700" />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Modal (For Add Employee & Edit PMS Score) */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setIsPopupOpen(false)}
            >
              <FaTimes className="text-xl" />
            </button>

            {selectedEmployee ? (
              <>
                <h3 className="text-xl font-bold mb-4">Edit PMS Score</h3>
                <p className="mb-2 text-gray-700">
                  Employee: <span className="font-semibold">{selectedEmployee.name}</span>
                </p>
                <label className="block font-semibold mb-1">New PMS Score</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-lg"
                  value={newPmsScore}
                  onChange={(e) => setNewPmsScore(Math.max(0, Math.min(10, +e.target.value)))}
                />
                <button
                  onClick={handleUpdatePMS}
                  className="bg-[#163C78] text-white px-4 py-2 rounded-lg hover:bg-[#122d5b] mt-4 w-full transition"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-4">Add Employee</h3>
                <input
                  type="text"
                  placeholder="Enter employee name..."
                  className="w-full p-2 border rounded-lg"
                  value={newEmployeeName}
                  onChange={(e) => setNewEmployeeName(e.target.value)}
                />
                <button
                  onClick={handleAddEmployee}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 mt-4 w-full"
                >
                  Add
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderBoardTable;
