function Projects() {
  const projects = [
    {
      title: "Developer Dashboard",
      level: "Intermediate",
      desc: "Dashboard-style portfolio using React, Tailwind, Recharts.",
    },
    {
      title: "Password Generator",
      level: "Beginner → Intermediate",
      desc: "React app with state management and UI controls.",
    },
    {
      title: "Background Color Changer",
      level: "Beginner",
      desc: "Simple React project to understand events and state.",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.level}</p>
            <p className="text-gray-600 mt-2">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
