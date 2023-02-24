
import StudentList from "./Components/StudentList";
import Cohorts from "./Components/Cohorts";
import StudentData from "./data/data.json";
import "./App.css"
import { useState } from "react";
function App() {
  const studentsCopy = [...StudentData];
  const [studentListState, setStudentListState] = useState(studentsCopy)
  const [activeCohort, setActiveCohort] = useState("All")
  
  return (
    <div className="app">
      <h1 className="div1">Student Dashboard</h1>
      <div className="div3">
      <Cohorts data={studentsCopy} activeCohort={activeCohort} setActiveCohort={setActiveCohort} setStudentListState={setStudentListState} />
      </div>
      <div className="div2">
      <StudentList data={studentListState} activeCohort={activeCohort} studentListState={studentListState} />
      </div>
    </div>
  );
}

export default App;
