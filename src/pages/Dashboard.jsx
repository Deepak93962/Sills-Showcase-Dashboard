import SkillCard from "../components/SkillCard";
import SkillsRadar from "../components/SkillsRadar";
import ProjectCard from "../components/ProjectCard";
import GithubActivity from "../components/GithubActivity";
import LearningTimeline from "../components/LearningTimeline";
import ProjectStepper from "../components/ProjectStepper";

function Dashboard() {
  return (
    <div className="space-y-10">
      {/* SKILLS  */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Skills Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard name="React" level={90} />
          <SkillCard name="JavaScript" level={85} />
          <SkillCard name="Backend" level={70} />
        </div>
      </section>

      {/* Radar */}
      <section>
        <SkillsRadar />
      </section>

      {/* projects*/}
      <section>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="E-Commerce Platform"
            status="Production"
            description="Full-stack platform with authentication and payments."
            tech={["React", "Node", "MongoDB"]}
          />

          <ProjectCard
            title="Deepak Agrawal"
            status="In Progress"
            description="Analytics-based portfolio dashboard."
            tech={["React", "Tailwind", "Recharts"]}
          />
        </div>
      </section>

      <section>
        <GithubActivity />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LearningTimeline />
        <ProjectStepper />
      </section>
    </div>
  );
}

export default Dashboard;
