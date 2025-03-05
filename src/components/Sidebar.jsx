import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ menuItems = [], onLogout, user = {}, isAdmin = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-64 bg-white h-screen p-6 flex flex-col justify-between ml-7">
      <div className="text-center">
        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-black shadow-md">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Designation */}
        <h2 className="text-lg font-semibold text-black">
          {isAdmin ? "Admin Name" : user.name || "John Doe"}
        </h2>
        <p className="text-sm text-gray-700">
          {isAdmin ? "Administrator" : user.designation || "Software Engineer"}
        </p>

        <hr className="border-black my-6" />

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full py-3 rounded-lg text-black font-medium transition-all shadow-md 
                ${
                  location.pathname === item.path
                    ? "bg-[#1F509A] text-white font-bold shadow-lg"
                    : "hover:bg-[#1F509A] hover:text-white"
                }`}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          ))}

      <button
        className="w-full flex items-center justify-center py-3 bg-white text-black rounded-lg font-medium shadow-md hover:bg-[#1F509A] hover:text-white transition"
        onClick={onLogout}
      >
        Logout <FaSignOutAlt className="ml-2" />
        
      </button>
        </div>
      </div>

      {/* Logout Button */}
    </div>
  );
};

export default Sidebar;
