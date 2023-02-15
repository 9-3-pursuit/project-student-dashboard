import React from "react";
import studentsData from "./data/data.json"
import Students from "./componets/Students"
import Cohorts from "./componets/Cohorts";

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <main>
        <Cohorts studentsData={studentsData}/>
        <Students studentsData={studentsData}/>
      </main>
    </div>
  );
}

export default App;
