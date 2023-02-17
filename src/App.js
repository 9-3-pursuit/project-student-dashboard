import { useState } from "react";
import studentsData from "./data/data.json"
import Students from "./componets/Students"
import Cohorts from "./componets/Cohorts";

function App() {
  const [updatedStudentsData, setUpdatedStudentData] = useState([]);


  function selectedCohort (cohortCode) {
    if (cohortCode) {
      cohortCode = cohortCode.replace(/ /g, "");
    let filterByCohort =  studentsData.filter((cohort) => cohort.cohort.cohortCode === cohortCode);
    setUpdatedStudentData(filterByCohort);
    } else {
      setUpdatedStudentData(studentsData);
    }
   
  }


  return (
    <div>
      <h1>Student Dashboard</h1>
      <main>
        <Cohorts studentsData={studentsData} onSelectedCohort={selectedCohort}/>
        <Students updatedStudentsData={updatedStudentsData} studentsData={studentsData}/>
      </main>
    </div>
  );
}

export default App;
