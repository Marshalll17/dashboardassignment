import { Link } from "react-router-dom";
import { FaTachometerAlt, FaFolderOpen, FaEdit, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-orange-600 text-white flex flex-col p-4">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <span className="text-xl font-bold">LOGO</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        <Link
          to="/"
          className="flex items-center space-x-2 p-3 rounded hover:bg-orange-700"
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/portfolio"
          className="flex items-center space-x-2 p-3 rounded hover:bg-orange-700"
        >
          <FaFolderOpen />
          <span>Portfolio</span>
        </Link>
        <Link
          to="/inputs"
          className="flex items-center space-x-2 p-3 rounded hover:bg-orange-700"
        >
          <FaEdit />
          <span>Inputs</span>
        </Link>
        <Link
          to="/profile"
          className="flex items-center space-x-2 p-3 rounded hover:bg-orange-700"
        >
          <FaUser />
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
