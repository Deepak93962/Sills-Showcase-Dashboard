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
      />
    </div>
  );
}

export default GithubActivity;
