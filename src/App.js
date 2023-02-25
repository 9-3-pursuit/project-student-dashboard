import React from "react";
import "./app.css";
import CohortList from "./components/CohortList";
import studentData from "./data/data.json";
import StudentList from "./components/StudentList";
import { useState } from "react";

function App() {
  const initialCohort = "All Students";
  const [cohort, setCohort] = useState(initialCohort);
  const [currentCohortArray, setCurrentCohortArray] = useState(studentData);
  const [notesArray, setNotesArray] = useState([])

  function handleCohortClick(cohorts) {
    setCohort(cohorts)
    
    if (cohorts === "All Students") {
        setCurrentCohortArray(studentData)
    } else {
        const cohortArray = studentData.filter(student => addSpaceBetweenCohort(student.cohort.cohortCode) === cohorts)    
        setCurrentCohortArray(cohortArray)
    }
  }

  return (
    <div>
      <main>
      <header>Student Dashboard</header>
        <CohortList 
          studentData={studentData} 
          setCohort={setCohort} 
          addSpaceBetweenCohort={addSpaceBetweenCohort}
          cohort={cohort}
          currentCohortArray={currentCohortArray}
          setCurrentCohortArray={setCurrentCohortArray}
          handleCohortClick={handleCohortClick}
        />
        <StudentList 
          cohort={cohort} 
          currentCohortArray={currentCohortArray} 
          studentData={studentData}
          notesArray={notesArray}
          setNotesArray={setNotesArray}
        />
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

