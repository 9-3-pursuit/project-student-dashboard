import { useState } from "react";
import userImg from "../assets/user-img3.png";

function StudentCard({ student, comments, setComments }) {
  const [showMore, setShowMore] = useState(false);
  const [comment, setComment] = useState("");
  const [commenterName, setCommenterName] = useState("");

  const addComment = (event) => {
    event.preventDefault();
    setComments((prev) => {
      if (prev[student.id]) {
        prev[student.id].push({ comment, commenterName });
      } else {
        prev[student.id] = [{ comment, commenterName }];
      }
      return prev;
    });
    setComment("");
    setCommenterName("");
  };

  const toggleShowMore = () => setShowMore(!showMore);
  const studentName = `${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`;

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formatDate = (dateStr) => {
    const [month, date, year] = dateStr.split("/");
    return `${months[month - 1]} ${date}, ${year}`;
  };

  const onTrackToGraduate = () => {
    return (
      student.certifications.resume &&
      student.certifications.linkedin &&
      student.certifications.github &&
      student.certifications.mockInterview &&
      student.codewars.current.total > 600
    );
  };

  const getCodewarsCompletedPercent =
    (student.codewars.current.total / student.codewars.goal.total) * 100;

  const getColor = (v) => {
    if (v >= 100) return "green";
    else if (v >= 50 && v < 100) return "#a9a905";
    else return "red";
  };

  return (
    <div className="student-card">
      <div className="student-card-main">
        <div className="student-img">
          <img src={userImg} alt="" />
        </div>
        <div className="student-info">
          <h3>{studentName}</h3>
          <p>{student.username}</p>
          <p>
            <span className="color-green">Birthday: </span>
            {formatDate(student.dob)}
          </p>
          <button
            className="color-green show-more-btn"
            onClick={toggleShowMore}
          >
            {showMore ? "Show less..." : "Show more..."}
          </button>
        </div>
        {onTrackToGraduate() && (
          <div className="student-status color-green">On Track To Graduate</div>
        )}
      </div>
      {showMore && (
        <div className="more-info">
          <ul className="codewars-list">
            <h4>Codewars</h4>
            <li>
              <p>
                <span className="color-green">Current Total: </span>
                <span>{student.codewars.current.total}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="color-green">Last Week: </span>
                <span>{student.codewars.current.lastWeek}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="color-green">Goal: </span>
                <span>{student.codewars.goal.total}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="color-green">Percent of Goal Achieved : </span>
                <span style={{ color: getColor(getCodewarsCompletedPercent) }}>
                  {getCodewarsCompletedPercent.toFixed(2)} %
                </span>
              </p>
            </li>
          </ul>
          <ul className="scores-list">
            <h4>Scores</h4>
            <li>
              <p>
                <span className="color-green">Assignments: </span>
                <span>{student.cohort.scores.assignments * 100}%</span>
              </p>
            </li>
            <li>
              <p>
                <span className="color-green">Projects: </span>
                <span>{student.cohort.scores.projects * 100}%</span>
              </p>
            </li>
            <li>
              <p>
                <span className="color-green">Assessments: </span>
                <span>{student.cohort.scores.assessments * 100}%</span>
              </p>
            </li>
          </ul>
          <ul className="certs-list">
            <h4>Certifications</h4>
            <li>
              <p>
                <span className="color-green">Resume: </span>
                <span>{student.certifications.resume ? "✔" : "❌"}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="color-green">LinkedIn: </span>
                <span>{student.certifications.linkedin ? "✔" : "❌"}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="color-green">Mock Interview: </span>
                <span>{student.certifications.mockInterview ? "✔" : "❌"}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="color-green">Github: </span>
                <span>{student.certifications.github ? "✔" : "❌"}</span>
              </p>
            </li>
          </ul>
        </div>
      )}
      <div className="notes">
        <h3>1-on-1 Notes</h3>
        <form onSubmit={addComment}>
          <div>
            <label>Commenter Name </label>
            <input
              type="text"
              value={commenterName}
              onChange={(e) => setCommenterName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Commenter </label>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Note</button>
        </form>
        <ul className="notes-ul">
          {comments[student.id] &&
            comments[student.id].length > 0 &&
            comments[student.id].map((c, i) => (
              <li key={i}>
                {c.commenterName} says, "{c.comment}"
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default StudentCard;
