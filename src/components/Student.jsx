import "../styles/Student.css";

import { useState } from "react";

const Student = ({ student, addNewNoteToStudent }) => {
  const [toggle, setToggle] = useState(false);
  const [studentNoteForm, setStudentNoteForm] = useState({
    commenter: "",
    comment: "",
  });

  const handleShowMoreStudentInfo = () => {
    setToggle(!toggle);
  };

  const handleTextChange = (event) => {
    setStudentNoteForm({ ...studentNoteForm, [event.target.id]: event.target.value });
  };

  const convertDate = (date) => {
    const newDateFormat = date.split("/");
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthArray[newDateFormat[0] - 1];
    return `${month} ${newDateFormat[1]}, ${newDateFormat[2]}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewNoteToStudent(student.id, studentNoteForm);
    resetForm();
  };

  const resetForm = () => {
    console.log("is this being called");
    setStudentNoteForm({
      commenter: "",
      comment: "",
    });
  };

  const isOnTrackToGraduate = () => {
    const allCertificationsAreValid = Object.values(student.certifications);
    const codewarScoreIsHighEnough = student.codewars.current.total > 600;
    return allCertificationsAreValid && codewarScoreIsHighEnough;
  };

  return (
    <div className="h-30 student-info border-2 border-emerald-500 p-1">
      <div className="student-info-main grid grid-cols-3">
        <div className="left-side">{/* <img src={student.profilePhoto} alt={student.username} /> */}</div>
        <div className="middle-side">
          <h2>
            {student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}
          </h2>
          <p>{student.username}</p>
          <p>Birthday: {convertDate(student.dob)}</p>
          <br />
        </div>
        <div className="right-side">{isOnTrackToGraduate() ? "On Track To Graduate" : "Not On Track To Graduate"}</div>
      </div>
      <br />
      <a
        href="#_"
        onClick={() => handleShowMoreStudentInfo()}
        className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
      >
        <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span class="relative">{toggle ? "Show Less..." : "Show More..."}</span>
      </a>
      <br />
      {toggle ? (
        <div className="extra-student-info">
          <div className="extra-student-scores">
            <div className="student-extra-left">
              <h3>CodeWars:</h3>
              <p>Current Total: {student.codewars.current.total}</p>
              <p>Last Week: {student.codewars.current.lastWeek}</p>
              <p>Goal: {student.codewars.goal.total}</p>
              <p>Percent of Goal Achieved: {Math.round((student.codewars.current.total / student.codewars.goal.total) * 100)}%</p>
            </div>
            <div className="student-extra-middle">
              <h3>Scores: </h3>
              <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
              <p>Projects: {student.cohort.scores.projects * 100}%</p>
              <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
            </div>
            <div className="student-extra-right">
              <h3>Certifications: </h3>
              <p>Resume: {student.certifications.resume.toString()}</p>
              <p>LinkedIn: {student.certifications.linkedin.toString()}</p>
              <p>Mock Interview: {student.certifications.github.toString()}</p>
              <p>GitHub: {student.certifications.mockInterview.toString()}</p>
            </div>
          </div>
          <div className="student-notes">
            <h3>1-on-1 Notes</h3>
            <div className="student-notes-inner-container">
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <label>
                    Commenter Name:
                    <input type="text" id="commenter" name="commenter" value={studentNoteForm.commenter} onChange={handleTextChange} />
                  </label>
                  <br />
                  <br />
                  <label>
                    Comment:
                    <input type="text" id="comment" name="comment" value={studentNoteForm.comment} onChange={handleTextChange} />
                  </label>
                  <br />
                  <input type="submit" value="Add Note" />
                </form>
              </div>
              <div className="student-notes-lists">
                <ul>
                  {student.notes.map((note) => {
                    return (
                      <li>
                        {note.commenter} says, {note.comment}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Student;
