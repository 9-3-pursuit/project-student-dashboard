import { useState } from "react";
import "./styles/App.css"
import studentsData from "./data/data.json";
import Students from "./componets/Students";
import Cohorts from "./componets/Cohorts";

function App() {
  const [updatedStudentsData, setUpdatedStudentData] = useState(studentsData);

  function selectedCohort (cohortCode) {
    if (cohortCode === "All Students") {
      setUpdatedStudentData(studentsData);
    } else {
      cohortCode = cohortCode.replace(/ /g, "");
      let filterByCohort =  studentsData.filter((cohort) => cohort.cohort.cohortCode === cohortCode);
      setUpdatedStudentData(filterByCohort);
    }
  }

  return (
    <div className="mainDiv">
      <h1 className="header" >Student Dashboard</h1>
      <main className="studentDashboard">
        <Cohorts studentsData={studentsData} onSelectedCohort={selectedCohort}/>
        <Students updatedStudentsData={updatedStudentsData}/>
      </main>
    </div>
  );
}

export default App;
