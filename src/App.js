import React from "react";
import { useState } from "react";
import StudentList from "./StudentList";
import CohortList from "./CohortList";
import data from "./data/data.json";

// import "./index.css"

function App() {
  const [allStudents, setAllStudents] = useState(250);

  //or 250(being the current state when page is initially loaded and when All students is clicked on)
  // if (allStudents) {
  //   return true;

  // }else {
  //   return false;
  // }
  const [activeCohort, setActiveCohort] = useState("Winter2025");
  console.log(activeCohort);

  const cohortFilteredArray = data.filter((student) => {
    if (student.cohort.cohortCode === activeCohort) {
      console.log("active", activeCohort);
      return true;
    }
    if (!student.cohort.cohortCode) {
      console.log("data", data.length);
      return data.length;
    }
  });

  return (
    <div>
      <h1 className="apptitle">Student Dashboard</h1>

      <section className="students">
        <StudentList
          data={cohortFilteredArray}
          setAllStudents={setAllStudents}
        />
        <section className="cohorts">
          <CohortList data={data} setActiveCohort={setActiveCohort} />
          {/* <StudentList data={data} addStudent={addStudent} setAddStudent={setAddStudent} /> */}
        </section>
      </section>
    </div>
  );
}

export default App;
