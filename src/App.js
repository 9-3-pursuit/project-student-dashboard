import { useState } from "react";
import students from "./data/data.json";
import CohortList from "./Components/CohortList";
import StudentList from"./Components/StudentList";
import "./App.css";
function App() {
  const[cohort, setCohort] = useState(students)


  function handleCohortSelect(cohortCode){
    const cohortArr = students.filter((student) => {
      return student.cohort.cohortCode === cohortCode
    })
    setCohort(cohortArr)
  }

  function handleHumanReadableCohort(cohortCode){
    const cohortArr = cohortCode.split("");
    let i = cohortCode.indexOf("2")
    cohortArr.splice(i, 0, " ")
    return cohortArr.join("")
  }


  return (
    <div>
      <header>
      <h1>Student Dashboard</h1>
      </header>
      <div className="info">
        <aside>
          <CohortList 
          students={students}
          handleCohortSelect={handleCohortSelect}
          handleHumanReadableCohort={handleHumanReadableCohort}
          setCohort={setCohort}/>
          
        </aside>
        <main>
        <StudentList
        students={students}
        cohort={cohort}
        handleHumanReadableCohort={handleHumanReadableCohort}/>

        </main>

      </div>
    </div>
  );
}

export default App;
