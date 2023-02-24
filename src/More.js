import "./More.css";
import Form from "./Form";
import "./Form.css";

function More({ el }) {
    return (
      <section className="studentsDetails">
        <article className="codeWars">
          <h3>Codewars: </h3>
          <p>
            <span>Current Total: </span>
            {el.codewars.current.total}
          </p>
          <p>
            <span>Last Week: </span>
            {el.codewars.current.lastWeek}
          </p>
          <p>
            <span>Goal: </span>
            {el.codewars.goal.total}
          </p>
          <p>
            <span>Percent of Goal Achieved: </span>
            {(el.codewars.current.total / el.codewars.goal.total).toFixed(2) *
              100}
            %
          </p>
        </article>
        <article className="scores">
          <h3>Scores</h3>
          <p>
            <span>Assignments: </span>
            {el.cohort.scores.assignments * 100}%
          </p>
          <p>
            <span>Projects: </span>
            {el.cohort.scores.projects * 100}%
          </p>
          <p>
            <span>Assessments: </span>
            {el.cohort.scores.assessments * 100}%
          </p>
        </article>
        <article className="certifications">
          <h3>Certifications</h3>
          <p>
            <span>Resume: </span>
            {el.certifications.resume === false ? "❌" : "✅"}
          </p>
          <p>
            <span>LinkedIn: </span>
            {el.certifications.linkedin === false ? "❌" : "✅"}
          </p>
          <p>
            <span>Mock Interview: </span>
            {el.certifications.mockInterview === false ? "❌" : "✅"}
          </p>
          <p>
            <span>GitHub: </span>
            {el.certifications.github === false ? "❌" : "✅"}
          </p>
        </article>
        <Form el={el} />
      </section>
    );
  }
  
  export default More;
  