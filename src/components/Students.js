import React from "react";
import { useState } from "react";



export default function Students({ students }) {
  const [userInputs, setUserInput] = useState(true);
  const [form, setForm] = useState(true);
  
  function handleOnClick(e) {
    setUserInput((userInputs = e.target.value));
  }
  function handleTextChange(e) {
    setUserInput(e.target.value);
  }
//   function handleClickSubmit(e) {
//     e.preventDefault();
//     e.target.reset();
//     setForm((form = e.target.value));

    // setUserInput(userInputs)
//     // setForm(form)
//   }
//   function getForm() {
//     return null;
//   }

  const studentProfiles = students.map((student) => {
    const firstName = student.names.preferredName;
    const middleInitial = student.names.middleName.charAt(0);
    const lastName = student.names.surname;
    const studentUserName = student.username;
    const studentBday = student.dob;
    
    
   
    return (
      <div className="students">
        <ul>
          <li className="studentProfile" key={student.id}>
            {/* <img src={studentImg} width="100" height="100" alt="studentProfile"></img> */}
            <h4>
              {firstName} {middleInitial} {lastName}
            </h4>
            <p>{studentUserName}</p>
            <p id="birthday">
              <span>Birthday: </span>
              {studentBday}
            </p>

            <button type="button" onClick={() => setUserInput(!userInputs)}>
              {!userInputs ? "Show Less..." : "Show More..."}
              {!userInputs ? (
                <section className="showMore">
                  <h4>CodeWars:</h4>
                  <p>
                    <span>Current Total:</span>
                    {student.codewars.current.total}
                  </p>
                  <p>
                    <span>Last Week:</span>
                    {student.codewars.current.lastWeek}
                  </p>
                  <p>
                    <span>Goal:</span>
                    {student.codewars.goal.total}
                  </p>
                  <h4>Scores</h4>
                  <p>
                    <span>Assignments: </span>
                    {student.cohort.scores.assignments}
                  </p>
                  <p>
                    <span>Projects: </span>
                    {student.cohort.scores.projects}
                  </p>
                  <p>
                    <span>Assessments: </span>
                    {student.cohort.scores.assessments}
                  </p>
                  <h4>Certifications</h4>
                  <p>
                    <span>Resume: </span>
                        ✅
                  </p>
                  <p>
                    <span>LinkedIn: </span>
                        ✅
                  </p>
                  <p>
                    <span>Mock Interview: </span>
                        ✅
                  </p>
                  <p>
                    <span>GitHub: </span>
                        ✅
                  </p>
                  <div className="form">
                    <h4 className="formDiv">1-on-1 Notes</h4>
                    <form>
                      <label htmlFor="commenterName">Commenter Name</label>
                      <input
                        type="text"
                        id="commenterName"
                        value={userInputs.commenterName}
                        onChange={handleTextChange}
                      />
                      <label htmlFor="comment">Comment</label>
                      <input
                        type="text"
                        id="comment"
                        value={userInputs.comment}
                        onChange={handleTextChange}
                      />
                      <button type="submit" >
                        Add Note
                      </button>
                    </form>
                  </div>
                </section>
              ) : null}
            </button>
            {userInputs}
          </li>
        </ul>
      </div>
    );
  });
  const studentList = studentProfiles.map((student) => {
    return <>{student}</>;
  });
  return studentList;
}

