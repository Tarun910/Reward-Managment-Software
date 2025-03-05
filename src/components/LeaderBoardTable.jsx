import { useState } from "react";
import { FaEdit, FaUserPlus, FaTrash } from "react-icons/fa"; // Import Icons

const LeaderBoardTable = ({ isHR }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", peerScore: 8, pmsScore: 7, totalScore: 15 },
    { id: 2, name: "Jane Smith", peerScore: 9, pmsScore: 6, totalScore: 15 },
    { id: 3, name: "Alice Johnson", peerScore: 7, pmsScore: 8, totalScore: 15 },
    { id: 4, name: "Bob Brown", peerScore: 8, pmsScore: 7, totalScore: 15 },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [newPmsScore, setNewPmsScore] = useState(0);
  const [newEmployeeName, setNewEmployeeName] = useState("");

  // Function to add a new employee
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
    setNewEmployeeName(""); // Reset input field
  };

  // Function to remove an employee
  const handleRemoveEmployee = (id) => {
    setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id).sort((a, b) => b.totalScore - a.totalScore));
  };

  // Open the edit popup
  const openEditPopup = (employee) => {
    if (!isHR) return;
    setSelectedEmployee(employee);
    setNewPmsScore(employee.pmsScore);
    setIsPopupOpen(true);
  };

  // Update PMS Score and recalculate total score
  const handleUpdatePMS = () => {
    if (!isHR || selectedEmployee === null) return;

    setEmployees((prevEmployees) =>
      prevEmployees
        .map((emp) =>
          emp.id === selectedEmployee.id
            ? { ...emp, pmsScore: newPmsScore, totalScore: emp.peerScore + newPmsScore }
            : emp
        )
        .sort((a, b) => b.totalScore - a.totalScore) // Sort after update
    );

    setIsPopupOpen(false); // Close popup after updating
  };

  // Filter employees based on search input
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto mt-10">
      {/* Title & Search Bar with Add Employee Icon */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          {/* Add Employee Input & Button (Only for HR) */}
          {isHR && (
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="New Employee Name"
                className="p-2 border rounded-lg"
                value={newEmployeeName}
                onChange={(e) => setNewEmployeeName(e.target.value)}
              />
              <button onClick={handleAddEmployee} className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-700">
                <FaUserPlus />
              </button>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search employee..."
          className="p-2 border rounded-lg w-1/4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table Container with Scroll */}
      <div className="max-h-[500px] overflow-y-auto border border-gray-300 rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 text-gray-700 sticky top-0">
            <tr>
              <th className="border border-gray-300 p-3">Rank</th>
              <th className="border border-gray-300 p-3">Name</th>
              <th className="border border-gray-300 p-3">Peer Score</th>
              <th className="border border-gray-300 p-3">PMS Score</th>
              <th className="border border-gray-300 p-3">Total Score</th>
              {isHR && <th className="border border-gray-300 p-3">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp, index) => (
              <tr key={emp.id} className="text-center border-t">
                <td className="border border-gray-300 p-3">{index + 1}</td>
                <td className="border border-gray-300 p-3">{emp.name}</td>
                <td className="border border-gray-300 p-3">{emp.peerScore}</td>
                <td className="border border-gray-300 p-3">{emp.pmsScore}</td>
                <td className="border border-gray-300 p-3 font-bold">{emp.totalScore}</td>

                {/* Edit & Remove Icons (Only for Admins) */}
                {isHR && (
                  <td className="border border-gray-300 p-3 flex justify-center gap-3">
                    <button onClick={() => openEditPopup(emp)}>
                      <FaEdit className="text-blue-500 text-xl cursor-pointer hover:text-blue-700" />
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

      {/* Popup Modal (Only for Admins) */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
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

            <div className="flex justify-end mt-4 gap-3">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700" onClick={() => setIsPopupOpen(false)}>
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={handleUpdatePMS}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderBoardTable;