import { useState } from "react";
import studentData from "./data/data.json"
import TopBar from "./Components/TopBar";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
// // for static site
// import spring2025 from "./data/StudentData";
// // for static site
import cohortListData from "./data/CohortsData";
import "./data/CohortsData"


function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <CohortList cohortListData={cohortListData} />
        {/* <StudentList studentData={studentData} spring2025={spring2025} /> */}
        <StudentList studentData={studentData} />
      </main>
    </>
  );
}
console.log(cohortListData);
export default App;
