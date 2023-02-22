import { useState } from "react";
import studentData from "./data/data.json"
import TopBar from "./Components/TopBar";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
import spring2025 from "./data/StudentData";

function App() {
  console.log(spring2025);
  return (
    <>
      <TopBar />
      <main className="container">
        <CohortList studentData={studentData} />
        <StudentList studentData={studentData} spring2025={spring2025} />
      </main>
    </>
  );
}

export default App;
