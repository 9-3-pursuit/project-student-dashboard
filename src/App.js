import { useState } from "react";
import "./styles/App.css"
import studentsData from "./data/data.json";
import Student from "./componets/Student";
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
        <div>
            <div>
            <h2 className="studentsTitle" >{updatedStudentsData.length === 250 ? "All Students": /(.+)(\d{4})/.exec(updatedStudentsData[0].cohort.cohortCode).slice(1).join(" ")}</h2>
            <h4 className="studentsTitle">Total Students: {updatedStudentsData.length}</h4>
            {updatedStudentsData.map((student, index) => {return(
                <Student student={student} index={index}/>
            )})}
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
