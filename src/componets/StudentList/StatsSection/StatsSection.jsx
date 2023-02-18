import "./StatsSection.css";

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
        <div>
          <h3>Certifications</h3>
          <ScoreLister object={certifications} />
        </div>
        <div>
          <h3>CodeWars</h3>
          <ScoreLister object={codewarsToDisplay} />
        </div>
        <div>
          <h3>Scores</h3>
          <ScoreLister object={scores} />
        </div>
      </div>
    </>
  );
}

function ScoreLister({ object }) {
  return Object.entries(object).map((score) => {
    const category = score[0][0].toUpperCase() + score[0].slice(1);
    let categoryScore = `${score[1]}pts`;

    if (object.hasOwnProperty("projects") || score[0].includes("completed")) {
      categoryScore = `${Math.round(score[1] * 100)}%`;
    }
    if (object.hasOwnProperty("resume")) {
      categoryScore = score[1] === false ? "❌" : "✅";
    }

    return (
      <p
        key={score[0] + score[1]}
        className={score[0].includes("completed") && generatesTag(score)}
      >
        {category}: {categoryScore}
      </p>
    );
  });
}

function generatesTag(score) {
  return score[1] < 0.5
    ? "show-red"
    : score[1] >= 1
    ? "show-green"
    : "show-yellow";
}
