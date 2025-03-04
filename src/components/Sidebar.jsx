import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-200 h-screen p-4 flex flex-col justify-start">
      <div className="text-center">
        {/* Profile Picture Placeholder */}
        <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-2"></div>
        <hr className="border-gray-400 mb-4" />

        {/* Sidebar Menu */}
        <button className="w-full py-2 bg-gray-300 rounded mb-2">My Profile</button>
        <button className="w-full py-2 bg-gray-300 rounded mb-2">Peer Scoring</button>
        <button className="w-full py-2 bg-gray-300 rounded mb-2">LeaderBoard</button>
      </div>

      {/* Logout Button (Moved Up) */}
      <button className="w-full flex items-center justify-center py-2 bg-gray-300 rounded mt-6">
        Logout <FaSignOutAlt className="ml-2" />
      </button>
    </div>
  );
};

export default Sidebar;
