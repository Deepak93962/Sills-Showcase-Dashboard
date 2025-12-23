function Skills() {
  const skills = [
    { name: "HTML & CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Beginner → Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Git & GitHub", level: "Beginner → Intermediate" },
    { name: "Backend (Node / APIs)", level: "Beginner" },
  ];

  return (
    <div >
      <h1 className="text-2xl font-bold mb-4">Skills</h1>

      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow flex justify-between"
          >
            <span>{skill.name}</span>
            <span className="text-gray-500">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
