function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5 hidden md:block">
      <h2 className="text-xl font-bold mb-8">Dev Dashboard</h2>

      <nav className="space-y-4">
        <p className="cursor-pointer hover:text-gray-300">Overview</p>
        <p className="cursor-pointer hover:text-gray-300">Skills</p>
        <p className="cursor-pointer hover:text-gray-300">Projects</p>
        <p className="cursor-pointer hover:text-gray-300">Learning</p>
      </nav>
    </aside>
  );
}

export default Sidebar;
