export default function ScoreLister({ title, scores }) {
  const statsFromScores = Object.entries(scores).map((score) =>
    mapsStatFromScores(score, title)
  );
  return (
    <div>
      <h3>{title}</h3>
      {statsFromScores}
    </div>
  );
}

function mapsStatFromScores(score, title) {
  const className = score[0].includes("completed") ? generatesTag(score) : "";
  const category = score[0][0].toUpperCase() + score[0].slice(1);
  let categoryScore = `${score[1]}pts`;

  if (title === "Scores" || score[0].includes("completed")) {
    categoryScore = `${Math.round(score[1] * 100)}%`;
  }
  if (title === "Certifications") {
    categoryScore = score[1] === false ? "❌" : "✅";
  }

  return (
    <p key={score[0] + score[1]} className={className}>
      {category}: {categoryScore}
    </p>
  );
}

function generatesTag(score) {
  return score[1] < 0.5
    ? "show-red"
    : score[1] >= 1
    ? "show-green"
    : "show-yellow";
}
