import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
import { useState } from "react";
import data from "./data/data.json"


export default function App() {
 const [cohorts, setActiveCohort] = useState("All Students")
 const cohortFilter = data.filter((student) => {
  if (cohorts === "All Students") {
    return true;
  }
  if (student.cohort.cohortCode === cohorts) {
    return true;
 } 
    return false;
});
  
  
  return (
    <div>
        <h1 className="header">Student Dashboard</h1>
      <main>  
        <CohortList 
          data={data}
          cohorts={cohorts}
          setActiveCohort={setActiveCohort}
          
          />
        <StudentList 
          data={data}
          cohorts={cohorts}
          cohortFilter={cohortFilter} />
      </main>
    </div>
  );
}


