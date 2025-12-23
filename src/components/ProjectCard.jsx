function ProjectCard({ title, status, description, tech }) {
  const statusColor = {
    Production: "bg-green-100 text-green-700",
    Beta: "bg-yellow-100 text-yellow-700",
    "In Progress": "bg-blue-100 text-blue-700",
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className={`text-xs px-2 py-1 rounded ${statusColor[status]}`}>
          {status}
        </span>
      </div>

      <p className="text-sm text-gray-600">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
