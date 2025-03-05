import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation

const Sidebar = ({ menuItems = [], onLogout, user = {}, isAdmin = false }) => {
  const navigate = useNavigate(); // Initialize navigate function
  const location = useLocation(); // Get current URL path

  return (
    <div className="w-64 bg-gray-200 h-screen p-4 flex flex-col justify-start">
      <div className="text-center">
        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gray-400">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name and Designation */}
        <h2 className="text-lg font-semibold">{isAdmin ? "Admin Name" : user.name || "John Doe"}</h2>
        <p className="text-sm text-gray-600">{isAdmin ? "Administrator" : user.designation || "Software Engineer"}</p>

        <hr className="border-gray-400 my-4" />

        {/* Render Menu Items Dynamically */}
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full py-2 bg-gray-300 rounded mb-2 transition-all 
              ${location.pathname === item.path ? "outline outline-2 outline-black " : ""}`}
            onClick={() => navigate(item.path)} // Navigate on click
          >
            {item.label} {/* Display label */}
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <button
        className="w-full flex items-center justify-center py-2 bg-gray-300 rounded mt-6"
        onClick={onLogout}
      >
        Logout <FaSignOutAlt className="ml-2" />
      </button>
    </div>
  );
};

export default Sidebar;
