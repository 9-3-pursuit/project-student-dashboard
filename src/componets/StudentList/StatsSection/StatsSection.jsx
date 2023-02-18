import "./StatsSection.css";
import ScoreLister from "./ScoreLister";

export default function StatsSection({ student }) {
  const {
    certifications,
    codewars: { current, goal },
    cohort: { scores },
  } = student;

  const codewarsToDisplay = {
    total: current.total,
    goal: goal.total,
    "goal completed": current.total / goal.total,
  };
  return (
    <>
      <div className="stats-section">
        <ScoreLister title={"Certifications"} scores={certifications} />
        <ScoreLister title={"CodeWars"} scores={codewarsToDisplay} />
        <ScoreLister title={"Scores"} scores={scores} />
      </div>
    </>
  );
}
