import React from "react";
import CohortList from "./components/CohortList";
import studentData from "./data/data.json"

function App() {

  return (
    <div>
      <header>Student Dashboard</header>
      <main>
        <CohortList studentData={studentData} />
        
      </main>
    </div>
  );
}

export default App;
