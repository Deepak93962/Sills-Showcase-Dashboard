import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-8">Dev Dashboard</h2>

      <nav className="space-y-4">
        <NavLink to="/" className="block hover:text-gray-300">
          Dashboard
        </NavLink>

        <NavLink to="/Overview" className="block hover:text-gray-300">
          Overview
        </NavLink>

        <NavLink to="/skills" className="block hover:text-gray-300">
          Skills
        </NavLink>

        <NavLink to="/projects" className="block hover:text-gray-300">
          Projects
        </NavLink>

        <NavLink to="/learning" className="block hover:text-gray-300">
          Learning
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
