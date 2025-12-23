function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Developer Dashboard</h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Status: Learning</span>
        <img
          src="/src/assets/profile.jpeg"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover border"
        />
      </div>
    </header>
  );
}

export default Navbar;
