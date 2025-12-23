function LearningTimeline() {
  const timeline = [
    { title: "HTML, CSS, JavaScript", status: "Completed" },
    { title: "React & Hooks", status: "Completed" },
    { title: "Tailwind CSS", status: "Completed" },
    { title: "Recharts & Dashboard UI", status: "Learning" },
    { title: "Docker & Deployment", status: "Upcoming" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="font-semibold mb-4">Learning Journey</h3>

      <ul className="space-y-4">
        {timeline.map((item, index) => (
          <li key={index} className="flex gap-4">
            <span
              className={`w-3 h-3 mt-1 rounded-full ${
                item.status === "Completed"
                  ? "bg-green-500"
                  : item.status === "Learning"
                  ? "bg-blue-500"
                  : "bg-gray-400"
              }`}
            ></span>

            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-500">{item.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LearningTimeline;
