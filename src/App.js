import React from "react";
import Header from "./components/Header.js" 
import Cohorts from "./components/Cohorts.js" //imports from cohorts
import Students from "./components/Students.js" //imports from students info

import Data from "./data/data.json" //import an object from data of students
import { useState } from "react"







function App() {
  const [info, setInfo] = useState(Data) //the state for data of students aka data.json 
  const [cohort, setCohort] = useState("All Students")
  
// info and setInfo must be passed from app.js to student.js and then called. It is like a tree and branches so app.js

  return (

      <div>
        <Header /> 
        {/*//?header component  */}
        <main>
        {/* //? here we pass info and setCohort which info is the state, setCohort is the setter that needs to be passed to cohorts components. */}
          <Cohorts info={info} setCohort={setCohort} /> 
          <Students info={info} setInfo={setInfo} cohort={cohort} /> 
          {/* //? here we pass the states and setter to students components. The setter is setInfo */}
        </main>
       
  
      </div>
  
    );
  }

export default App;
