// import { FaUserCircle } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <div className="bg-gray-300 p-4 flex justify-between items-center shadow-md">
//       <h1 className="text-xl font-bold">Hi, User</h1>
//       <FaUserCircle className="text-3xl text-gray-700 cursor-pointer" />
//     </div>
//   );
// };

// export default Navbar;



// import { FaUserCircle } from "react-icons/fa";

// const Navbar = ({ title = "Hi, User ", userIcon = <FaUserCircle />, className = "" }) => {
//   return (
//     <div className={`bg-gray-300 p-4 flex justify-between items-center shadow-md ${className}`}>
//       <h1 className="text-xl font-bold">{title}</h1>
//       <div className="text-3xl text-gray-700 cursor-pointer">{userIcon}</div>
//     </div>
//   );
// };

// export default Navbar;



import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ 
  title = "Hi, User ", 
  email = "user@example.com",  // Default email
  userIcon = <FaUserCircle />, 
  className = "" 
}) => {
  return (
    <div className={`bg-white p-4 flex justify-between items-center shadow-md ${className}`}>
      <h1 className="text-3xl text-[#163C78] font-bold ml-28 mt-3">{title}</h1>

      {/* Email and User Icon */}
      <div className="flex items-center gap-4">
        <span className="text-lg text-black">{email}</span>
        <div className="text-3xl text-black cursor-pointer">{userIcon}</div>
      </div>
    </div>
  );
};

export default Navbar;
