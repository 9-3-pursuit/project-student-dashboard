import React from "react";
import CohortList from "./components/CohortList";
import studentData from "./data/data.json"
import StudentList from "./components/StudentList";
import { useState } from "react";

function App() {
  const [cohort, setCohort] = useState("")


  return (
    <div>
      <header>Student Dashboard</header>
      <main>
        <CohortList studentData={studentData} setCohort={setCohort} />
        <StudentList cohort={cohort}/>
      </main>
    </div>
  );
}

export default App;
