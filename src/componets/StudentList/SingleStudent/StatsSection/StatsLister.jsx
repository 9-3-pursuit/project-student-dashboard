export default function StatsLister({ title, stats }) {
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

function StatFromScores({ scoreInfo, SectionTitle }) {
  const category = scoreInfo[0],
    studentScore = scoreInfo[1],
    //only 'percentage of goal completed' contains the words "completed"
    className = category.includes("completed")
      ? generatesTag(studentScore)
      : "";
  const formattedCategory = category[0].toUpperCase() + category.slice(1);
  const categoryScore = formatScore(category, studentScore, SectionTitle);

  return (
    <p className={className}>
      {formattedCategory}: {categoryScore}
    </p>
  );
}

function formatScore(category, studentScore, title) {
  if (title === "CodeWars" && !category.includes("completed")) {
    return `${studentScore}pts`;
  }
  if (title === "Scores" || category.includes("completed")) {
    return `${Math.round(studentScore * 100)}%`;
  }
  if (title === "Certifications") {
    return studentScore === false ? "❌" : "✅";
  }
}

const generatesTag = (score) =>
  score < 0.5 ? "show-red" : score >= 1 ? "show-green" : "show-yellow";
