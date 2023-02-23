import React, { useState } from "react";
import Students__data from "./data/data.json";
import Header from "./Components/Header";
import Student from "./Components/Student";
import Cohort from "./Components/Cohort";
import "./App.css";

function App() {
  const [cohort, setCohort] = useState("All Students"); // Set up state for the selected cohort
  const students = [...Students__data]; // make a copy of the original data array to avoid modifying it
  const [commenterName, setCommenterName] = useState(""); // state to hold the name of the commenter
  const [studentComment, setStudentComment] = useState(""); // state to hold the comment for a student

  const totalStudents = students.length; // get total number of students
  
  let count = 0;

  // Get the unique list of cohorts and sort them in reverse order
  const uniqueCohorts = new Set(students.map((student) => student.cohort.cohortCode));
  const orderedCohorts = []; // Create an empty array to hold the ordered list of cohorts
  orderedCohorts.push("All Students"); // Add "All Students" to the beginning of the list

  // Loop over each cohort in the list of students - If the cohort is not "All Students", add it to the ordered list
  for (let cohort of uniqueCohorts) {
    if (cohort !== "All Students") {
      orderedCohorts.push(cohort);
    }
  }

  // Sort the ordered list of cohorts
  orderedCohorts.sort((a, b) => {
    const seasons = ["Winter", "Fall", "Summer", "Spring"];
    const aYear = Number(a.slice(-4)); // Get the year of cohort a
    const bYear = Number(b.slice(-4)); // Get the year of cohort b
    const aSeason = seasons.indexOf(a.slice(0, -4)); // Get the season of cohort a
    const bSeason = seasons.indexOf(b.slice(0, -4)); // Get the season of cohort b
    return bYear - aYear || aSeason - bSeason; // Sort first by year, then by season
  });

  const studentList = students
    .filter((student) => cohort === "All Students" || student.cohort.cohortCode === cohort) // filter students based on selected cohort
    .map((student) => {
      // map over the data and create a list of students
      if (student.cohort.cohortCode === cohort) {
        count++; // increment count if the student is in the selected cohort
      }
      const studentNotes = student.notes || []; // get the notes for the student
      return (
        // Return a Student component for each student
        <Student
          student={student}
          key={student.id}
          notes={studentNotes} // pass the notes for the student
          setNotes={(newNotes) => {
            // update the notes for the student in the data array
            const index = students.findIndex((s) => s.id === student.id);
            const updatedStudent = {
              ...student,
              notes: newNotes,
            };
            Students__data[index] = updatedStudent;
          }}
          commenterName={commenterName}
          setCommenterName={setCommenterName}
          studentComment={studentComment}
          setStudentComment={setStudentComment}
       /> // specify a key for each student to identify them
      )
    });

  function formatCohortName(cohortName) {
    // Format the cohort name to remove the year from the end, unless the cohort is "All Students"
    return cohortName === "All Students" ? "All Students" : `${cohortName.slice(0, -4)} ${cohortName.slice(-4)}`;
  }

  const cohortList = orderedCohorts.map((cohortName) => {
    // Create a list of Cohort components based on the ordered cohorts
    return (
      <Cohort
        name={formatCohortName(cohortName)}
        active={cohort === cohortName} // Set whether the cohort is active or not
        handleClick={() => setCohort(cohortName)} // Call the setCohort function when the cohort is clicked
        key={cohortName} // Specify a key for each cohort to identify it
      />
    );
  });
  
  return (
    <div className="main__container">
      <div className="header">
        <Header />
      </div>
      <aside className="cohort__container">
        <h2>Choose a Class by Start Date</h2>
        {cohortList}
      </aside>
      <main className="student__container">
        <h2>
          {" "}
          {cohort === "All Students" ? "All Students" : `${cohort.slice(0, -4)} ${cohort.slice(-4)}`}
        </h2>
        <h4>
          Total Students: {cohort === "All Students" ? totalStudents : count} {" "} {/* display count if a cohort is selected, otherwise display totalStudents */}
        </h4>{" "}
        {studentList} {/* render the list of students */}
      </main>
      <div className="footer">Footer</div>
    </div>
  );
}
export default App;