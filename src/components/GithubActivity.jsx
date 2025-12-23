import {GitHubCalendar} from "react-github-calendar";

function GithubActivity() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="font-semibold mb-4">GitHub Consistency</h3>

      <GitHubCalendar
        username="Deepak93962"
        blockSize={14}
        blockMargin={4}
        fontSize={14}
        theme={{
          light: ["#e5e7eb", "#bbf7d0", "#86efac", "#4ade80", "#16a34a"],
          dark: ["#e5e7eb", "#bbf7d0", "#86efac", "#4ade80", "#16a34a"],
        }}
      />
    </div>
  );
}

export default GithubActivity;
