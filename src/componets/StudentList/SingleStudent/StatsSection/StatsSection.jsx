import StatFromScores from "./StatFromScores";

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

function StatsLister({ title, stats }) {
  const statsFromScores = Object.entries(stats).map((stat) => (
    <StatFromScores scoreInfo={stat} SectionTitle={title} />
  ));

  return (
    <div>
      <h3>{title}</h3>
      {statsFromScores}
    </div>
  );
}
