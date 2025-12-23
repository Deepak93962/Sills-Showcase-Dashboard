import SkillCard from "../components/SkillCard";
import SkillsRadar from "../components/SkillsRadar";

function Dashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Skills Overview</h2>

      {/* Skill cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillCard name="React" level={90} />
        <SkillCard name="JavaScript" level={85} />
        <SkillCard name="Backend" level={70} />
      </div>

      {/* Radar chart */}
      <SkillsRadar />
    </div>
  );
}

export default Dashboard;
