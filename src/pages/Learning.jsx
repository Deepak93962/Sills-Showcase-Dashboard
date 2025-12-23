function Learning() {
  const learning = [
    { topic: "Advanced React Patterns", status: "Learning" },
    { topic: "API Integration", status: "Learning" },
    { topic: "Backend Basics (Node.js)", status: "Beginner" },
    { topic: "Deployment (Vercel / Netlify)", status: "Beginner" },
    { topic: "Docker Basics", status: "Upcoming" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Learning</h1>

      <ul className="space-y-3">
        {learning.map((item, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded-lg shadow flex justify-between"
          >
            <span>{item.topic}</span>
            <span className="text-gray-500">{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Learning;
