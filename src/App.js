import React from "react";
import { useState } from "react";
import "./index.css";
import studentsList from "./data/data.json";
import Students from "./components/Students";
import Cohorts from "./components/Cohorts";

// console.log(students)
function StudentRoster({ studentsList }) {
  studentsList.map((student) => {
    return (
      <div className="students" key={student.id}>
        <ul>
          <h2>All Students</h2>
          <p>Total Students: {studentsList.length}</p>
        </ul>
      </div>
    );
  });
}

function cohortList() {
  studentsList.map((student) => {

    return (
      <section className="cohortList">
        
        <ul className="sortedCohorts">
          <li>All Students</li>
        </ul>
      </section>
    );
  })
}

function App() {
  const [userInput, setUserInput] = (studentsList);
  const [activeCohort, setActiveCohort]= useState(studentsList);
  console.log(activeCohort)

  return (
    <div className="App">
      <header className="header">
        <h1 className="color-change-5x">Student Dashboard</h1>
      </header>
      

      <section className="cohortDiv">
      <h2>Choose a Class by Start Date</h2>
      <br></br>
      <Cohorts students={studentsList} setActiveCohort={setActiveCohort} activeCohort={activeCohort}/>
      </section>

      <div className="studentDiv">
      <h2 className="studentsHeading">All Students</h2>
      <br></br>
      <p className="studentsTotal">Total Students: {studentsList.length} </p>
      <br></br>
      < Students students={studentsList} />

      </div>
     
     

      
    </div>
  );
}

export default App;
