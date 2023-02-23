

// import { useState } from "react";
import Data from "./data/data.json";
import Cohort from "./Cohort";
import Students from "./Students";

import "./App.css";
function App() {
  return (
<div className="all">
<div className="header">
  <h1>Student Dashboard</h1>
</div>
<div className="body">
<div className="classCohort">
  {/* <h2>Choose a Class by Start Date</h2>
  <li>All Students</li>
  <hr></hr>
  <li>Winter 2026</li>
  <hr></hr>
  <li>Fall 2026</li>
  <hr></hr>
  <li>Summer 2026</li>
  <hr></hr>
  <li>Spring 2026</li>
  <hr></hr>
  <li>Winter 2025</li>
  <hr></hr>
  <li>Fall 2025</li>
  <hr></hr>
  <li>Summer 2025</li>
  <hr></hr>
  <li>Spring 2025</li> */}
  <Cohort />
  </div>
  <div className="students">
          <h2>All Students</h2>
          <h3>Total Students:</h3>
          <Students Data={Data} />
          </div>
          </div>
          </div>
);
  }

export default App;
