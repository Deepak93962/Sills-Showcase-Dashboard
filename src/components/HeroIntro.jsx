import profile from "../assets/profile.jpeg"; // dummy image

function HeroIntro() {
  return (
    <section className="bg-white rounded-xl shadow p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* LEFT CONTENT */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Hello, I’m a Developer</h1>

        <p className="text-gray-600 leading-relaxed">
          This is a sample introduction section used to demonstrate how a
          professional dashboard-style portfolio can present information. The
          content here is purely dummy and meant for layout and UI testing.
        </p>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-md w-fit">
          Say Hello
        </button>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 pt-6">
          <div>
            <h3 className="text-xl font-bold">2+</h3>
            <p className="text-sm text-gray-500">Years Learning</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">10+</h3>
            <p className="text-sm text-gray-500">Projects</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">100+</h3>
            <p className="text-sm text-gray-500">Commits</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img
          src={profile}
          alt="Dummy profile"
          className="w-64 h-64 object-cover rounded-xl"
        />
      </div>
    </section>
  );
}

export default HeroIntro;
