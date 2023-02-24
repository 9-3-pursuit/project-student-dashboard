import CohortDescription from "./Components/CohortDescription";
import CohortList from "./Components/CohortList";
import StudentCard from "./Components/StudentCard";
import React from "react";
function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList />
      <StudentCard />
      <CohortDescription />
    </div>
  );
}

export default App;
