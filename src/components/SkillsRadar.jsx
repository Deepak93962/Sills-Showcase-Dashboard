import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { skill: "Frontend", value: 85 },
  { skill: "Backend", value: 70 },
  { skill: "DevOps", value: 55 },
  { skill: "Databases", value: 65 },
  { skill: "Tools", value: 80 },
];

function SkillsRadar() {
  return (
    <div className="bg-white rounded-xl shadow p-5 h-80">
      <h3 className="font-semibold mb-4">Developer Skill Profile</h3>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <Radar
            dataKey="value"
            stroke="#2563eb"
            fill="#3b82f6"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillsRadar;
