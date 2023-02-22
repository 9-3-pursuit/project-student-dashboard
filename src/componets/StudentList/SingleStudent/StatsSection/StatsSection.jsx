import StatsLister from "./StatsLister";

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
        <StatsLister title={"Certifications"} stats={certifications} />
        <StatsLister title={"CodeWars"} stats={codewarsToDisplay} />
        <StatsLister title={"Scores"} stats={scores} />
      </div>
    </>
  );
}
