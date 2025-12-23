function SkillCard({ name, level }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="font-semibold mb-2">{name}</h3>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>

      <p className="text-sm text-gray-500 mt-2">{level}% proficiency</p>
    </div>
  );
}

export default SkillCard;
