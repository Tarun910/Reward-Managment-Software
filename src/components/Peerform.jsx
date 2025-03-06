import { useState } from "react";

const PeerForm = () => {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [givenScores, setGivenScores] = useState({});

  const employees = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedEmployee) {
      alert("Please select an employee!");
      return;
    }

    if (!comment) {
      alert("Comment is required!");
      return;
    }

    if (givenScores[selectedEmployee]) {
      alert("You cannot score the same employee more than once.");
      return;
    }

    console.log("Submitted:", { selectedEmployee, score, comment });

    setGivenScores((prev) => ({ ...prev, [selectedEmployee]: score }));

    setComment("");
    setScore(0);
    setSelectedEmployee("");
  };

  const handleEmployeeChange = (e) => {
    const newEmployee = e.target.value;
    setSelectedEmployee(newEmployee);
    setScore(0);
  };

  return (
    <div className=" p-9 rounded-lg ">
   
   <h2 className="text-3xl font-bold mt-2 mb-8 ml-66 text-center text-[#163C78]">
        Peer Scoring Panel
      </h2>
      {/* Employee Selection + Score Inline */}
      <div className="mb-6 flex justify-between items-center">
        <div className="w-2/3">
          <label className="block font-semibold mb-1 text-gray-700">
            Name of Employee
          </label>
          <select
            className="w-90 p-2 border rounded-lg "
            value={selectedEmployee}
            onChange={handleEmployeeChange}
          >
            <option value="">Select Employee</option>
            {employees.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Score Counter */}
        <div className="flex items-center gap-2 mr-36 mt-6">
          <span className="text-xl font-semibold text-gray-700">Score:</span>
          <button
            className="px-5 py-1 bg-[#1F509A] text-2xl text-white rounded-md"
            onClick={() => setScore(score > 0 ? score - 1 : 0)}
          >
            -
          </button>
          <span className="text-2xl font-bold">{score}</span>
          <button
            className="px-5 py-1 bg-[#1F509A] text-2xl text-white rounded-md"
            onClick={() =>
              setScore(score < 3 ? score + 1 : 3) // Max score per employee = 3
            }
          >
            +
          </button>
        </div>
      </div>

      {/* Comment Box */}
      <div className="mb-4 ">
        <label className=" block font-semibold mb-1 text-gray-700">
          Comment *
        </label>
        <textarea
          className="w-150 p-2 border rounded-lg"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        className="bg-[#1F509A]  text-white px-2 py-2 rounded-lg w-40 hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default PeerForm;