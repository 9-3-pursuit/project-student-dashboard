import React from "react";
import "./app.css"
import CohortList from "./components/CohortList";
import studentData from "./data/data.json"
import StudentList from "./components/StudentList";
import { useState } from "react";

function App() {
  const initialCohort = "All Students";
  const [cohort, setCohort] = useState(initialCohort);
  const currentCohortArray = studentData.filter(student => addSpaceBetweenCohort(student.cohort.cohortCode) === cohort) ;

  return (
    <div>
      <header>Student Dashboard</header>
      <main>
        <CohortList studentData={studentData} setCohort={setCohort} />
        <StudentList cohort={cohort} currentCohortArray={currentCohortArray} studentData={studentData} />
      </main>
    </div>
  );
}


function addSpaceBetweenCohort(string) {
    const stringArray = string.split('');
    stringArray.splice(-4, 0, " ");
    const formattedCohort = stringArray.join("")
    return formattedCohort
  }

export default App;
