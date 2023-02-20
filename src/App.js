import React from "react";
import { useState } from "react";
import StudentList from "./StudentList";

import data from "./data/data.json"
function App() {
  // const studentsData = data
  // const [addStudent, setAddStudent] = useState([])

  // console.log("students:", studentsData)
  return (
    <div>
      <h1>Student Dashboard</h1>
      <section className="students">
        <StudentList data = {data} />
      {/* <StudentList data={data} addStudent={addStudent} setAddStudent={setAddStudent} /> */}
      </section>
    </div>
  );
}

export default App;
