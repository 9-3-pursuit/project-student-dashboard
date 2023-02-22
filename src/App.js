import React from "react";
import { useState } from "react";
import "./index.css"
import studentsList from "./data/data.json";
import Students from "./components/Students";
import Cohorts from "./components/Cohorts";
import "./helpers/cohorts"

const students = studentsList.studentsList
// console.log(students)
function StudentRoster({students}) {
  students.map((student)=> {
  return (
    <div className="students" key={student.id}>
      <ul >
      <h2>All Students</h2>
      <p>Total Students: {students.length}</p>
      </ul>
    </div>
  )
}
)}

function App() {
  const [cohorts, getCohorts] = useState([]);
  // console.log(cohorts)

  function getCohortList(cohortToAdd){
   return (
    <div className="cohorts">
      <h4>Choose a Class by Start Date</h4>
    </div>
   )
    // getCohorts([...cohorts, cohortToAdd]);
  }
  getCohortList()

  
  
  
  
  return (
    <div>
      <header className="header">
        <h1>Student Dashboard</h1>
      </header>
      <Cohorts getCohortList={getCohortList} students={students}/>
      <Students students={students} />
    </div>
  );
}

export default App;

