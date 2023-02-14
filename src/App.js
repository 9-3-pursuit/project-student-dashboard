import React from "react";
import studentsData from "./data/data.json"
import Students from "./componets/Students"

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <main>
        <Students studentsData={studentsData}/>
      </main>
    </div>
  );
}

export default App;
