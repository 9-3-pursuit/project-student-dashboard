import "./StatsSection.css";

export default function StatsSection({ student }) {
  const {
    certifications,
    codewars: { current, goal },
    cohort: { scores },
  } = student;

  const codewarsToDisplay = { ...current, "Goal total": goal.total };
  return (
    <>
      <div className="stats-section">
        <div>
          <h3>Certifications</h3>
          <CertificationLister object={certifications} />
        </div>
        <div>
          <h3>CodeWars</h3>
          <ObjectPorpertyLister object={codewarsToDisplay} />
        </div>
        <div>
          <h3>Scores</h3>
          <ScoreLister object={scores} />
        </div>
      </div>
    </>
  );
}

function ObjectPorpertyLister({ object }) {
  let list = [];

  for (let key in object) {
    list.push(<p key={key + object[key]}>{`${key}: ${object[key]}`}</p>);
  }
  return list;
}

function ScoreLister({ object }) {
  let list = [];

  for (let key in object) {
    list.push(<p key={key + object[key]}>{`${key}: ${object[key] * 100}%`}</p>);
  }
  return list;
}

function CertificationLister({ object }) {
  let list = [];

  for (let key in object) {
    list.push(
      <p key={key + object[key]}>{`${key}: ${
        object[key] === false ? "❌" : "✅"
      }`}</p>
    );
  }
  return list;
}
