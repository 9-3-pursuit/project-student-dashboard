import React from "react";
import CohortList from "./components/CohortList";
import studentData from "./data/data.json"
import StudentList from "./components/StudentList";

function App() {

  return (
    <div>
      <header>Student Dashboard</header>
      <main>
        <CohortList studentData={studentData} />
        <StudentList />
      </main>
    </div>
  );
}

export default App;
