import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-300 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Hi, User</h1>
      <FaUserCircle className="text-3xl text-gray-700 cursor-pointer" />
    </div>
  );
};

export default Navbar;
