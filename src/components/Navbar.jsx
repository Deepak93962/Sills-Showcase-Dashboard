import { NavLink, useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpeg";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Left: Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-lg font-semibold cursor-pointer"
      >
        Deepak Agrawal
      </h1>

      {/* Center: Nav */}
      <nav className="hidden md:flex gap-6 text-sm text-gray-600">
        <NavLink
          to="/overview"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : "hover:text-gray-900"
          }
        >
          Overview
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : "hover:text-gray-900"
          }
        >
          Skills
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : "hover:text-gray-900"
          }
        >
          Projects
        </NavLink>
      </nav>

      {/* Right: Status + Profile */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600 hidden sm:block">
          Status: Learning
        </span>

        <img
          src={profile}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover border cursor-pointer hover:ring-2 hover:ring-blue-500"
        />
      </div>
    </header>
  );
}

export default Navbar;
