
import { useState } from "react";
import "../Styles/Student.css";

// function to abbreviate middle name
const abbreviate__middleName = (name) => {
  return name.charAt(0) + "."; 
};

// function to format date of birth
const format__dob = (dob) => {
  const [month, day, year] = dob.split("/"); // Split the date of birth and destructure as array of month, day, and year strings.
  const date = new Date(year, month - 1, day); // Create new Date object from the array and - 1 for zero-based indexing.
  const formattedMonth = date.toLocaleString("default", { month: "long" }); // Get the full month name in the user's default locale using the toLocaleString method.
  return `${formattedMonth} ${day}, ${year}`; // Return the formatted date of birth using a template literal.
};

// function to check if a student is on track to graduate
const isOnTrackToGraduate = (certifications, codewars) => {
  return (
    certifications.resume &&
    certifications.linkedin &&
    certifications.github &&
    certifications.mockInterview &&
    codewars.current.total > 600
  );
};

const Student = ({ student, notes, setNotes, commenterName, setCommenterName, studentComment, setStudentComment }) => {
  // use destructuring to get the student object from the props
  const { profilePhoto, names, username, dob, cohort, codewars, certifications } = student; // use destructuring to get the relevant student properties
  const [showDetails, setShowDetails] = useState(false); // state to toggle the display of the student details

  const handleNameChange = (event) => {
    setCommenterName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setStudentComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = { commenter: commenterName, comment: studentComment };
    setNotes([...notes, newNote]);
    setCommenterName("");
    setStudentComment("");
  };

  // function to toggle the display of the student details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // check if the student is on track to graduate
  const onTrackToGraduate = isOnTrackToGraduate(certifications, codewars);

  return (
    <div className="style__EachStudent">
      <span>
        <img
          className="student__pic"
          // src={profilePhoto}
          alt={names.preferredName}
        />
      </span>
      <main className="style__EachStudent__info">
        {/* display student's name */}
        <h2>
          <span className="style__EachStudent__green">Full Name: </span>
          {names.preferredName} {abbreviate__middleName(names.middleName)}{" "} {names.surname}
        </h2>
        {/* display student's graduation status */}
        <aside className="student__status">
          <span className="style__EachStudent__green">
            {onTrackToGraduate ? (
              <p>On Track to Graduate</p>
            ) : (
              <p>Not Graduating</p>
            )}
          </span>
        </aside>
        {/* display student's email address */}
        <h5>
          <span className="style__EachStudent__green">Email: </span>
          {username}
        </h5>
        {/* display student's date of birth */}
        <h5 className="last__h5">
          <span className="style__EachStudent__green">Birthday: </span>
          <span>{format__dob(dob)}</span>
        </h5>
        {/* display toggle show more button */}
        <button className="show__more" onClick={toggleDetails}>
          {" "}{showDetails ? "Show Less..." : "Show More..."}{" "}
        </button>
        {showDetails && (
          <div className="student-details">
          <div className="codewars">
            <h3>Codewars</h3>
            <p> <span className="style__EachStudent__green">Current Total: </span> {codewars.current.total}</p>
            <p> <span className="style__EachStudent__green"> Last Week: </span> {codewars.current.lastWeek}</p>
            <p> <span className="style__EachStudent__green">Goal: </span> {codewars.goal.total}</p>
            <p> <span className="style__EachStudent__green">Goal Achieved Percent: </span> {(codewars.current.total / codewars.goal.total * 100).toFixed(0)}%</p>
          </div>
          <div className="scores">
            <h3>Scores</h3>
            <p> <span className="style__EachStudent__green">Assignments: </span>{cohort.scores.assignments * 100}%</p>
            <p> <span className="style__EachStudent__green">Projects: </span>{cohort.scores.projects * 100}%</p>
            <p> <span className="style__EachStudent__green">Assessments: </span>{cohort.scores.assessments * 100}%</p>
          </div>
          <div className="certifications">
            <h3>Certifications</h3>
            <p> <span className="style__EachStudent__green">Resume: </span>{certifications.resume ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</p>
            <p> <span className="style__EachStudent__green">LinkedIn: </span>{certifications.linkedin ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</p>
            <p> <span className="style__EachStudent__green">GitHub: </span>{certifications.github ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</p>
            <p> <span className="style__EachStudent__green">Mock Interview: </span>{certifications.mockInterview ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</p>
          </div>
        
        <aside className="notes">
        <h2 className="notes__title">1-on-1 Notes</h2>
        <form onSubmit={handleSubmit} className="notes__form">
          <label htmlFor="commenter-name">
            {" "}
            Commenter Name : {"  "}
            <input
              type="text"
              id="commenter-name"
              name="commenter-name"
              autoFocus
              placeholder="Your Name..."
              value={commenterName}
              onChange={handleNameChange}
            />
          </label>
          <br />
          <label className="align__label" htmlFor="comment">
            {" "}
            Comment : {"  "}
            <input
              type="text"
              id="comment"
              name="comment"
              value={studentComment}
              onChange={handleCommentChange}
              placeholder="Your Comment..."
            />
          </label>
          <br />
          <input type="submit" className="button__addNote" value="Add Note" />
        </form>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <strong>{note.commenter} </strong> says, "{note.comment}"
            </li>
          ))}
        </ul>
      </aside>
      </div>
        )}
      </main>
    </div>
  );
};
export default Student;