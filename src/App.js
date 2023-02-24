import Header from "./Components.js/Header";
import ListofCohorts from "./Components.js/ListofCohorts";
import StudentDetails from "./Components.js/StudentDetails";
import { useState } from "react";
import StudentLists from "./Components.js/StudentLists";
import StudentNotes from "./Components.js/StudentNotes";
import data from "./data/data.json"
import "./App.css"

function App() {
  const [currentCohort, setCurrentCohort] = useState("AllStudents")
  let studentData = data.filter((studentObj) => {
    if (studentObj.cohort.cohortCode === currentCohort) {
      return true
    } else {
      return false
    }


  })
  return (
    <div>
      <div className="Header"> <Header /> </div>

      <div className="Container">

        <div className="ListofCohorts"> <ListofCohorts data={data} setCurrentCohort={setCurrentCohort} /></div>
        <div className="StudentLists"> <StudentLists studentData={data} currentCohort={currentCohort} /> </div>
      </div>
    </div>

  );
}

export default App;
