function SkillCard({ name, level }) {
  // map % to readable level
  const getLabel = (value) => {
    if (value < 50) return "Beginner";
    if (value < 75) return "Beginner → Intermediate";
    return "Intermediate";
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 space-y-3">
      {/* Title + Level */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{name}</h3>
        <span className="text-xs text-gray-500">{getLabel(level)}</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="text-sm text-gray-500">{level}% proficiency</p>
    </div>
  );
}

export default SkillCard;
