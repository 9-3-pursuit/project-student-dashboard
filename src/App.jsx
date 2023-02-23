import React from 'react';
import data from './data/data.json';
import Students from './Component/Students';
import Header from './Component/Header';
import Cohorts from './Component/Cohorts';
import { useState } from 'react';
// import './App.css';

// import {BrowserRoute, Routes, Route} from 'react-router-dom';
// import { useState } from 'react';


function App() {

// const [showDetails, setShowDetails] = useState(false)
// Use set to get unique values for the cohorts codes
// Put the set into an array
// Sort data by cohort (winter, fall, summer, spring) then by the year
  
  

  const [filteredStudents, setFilteredStudents] = useState(data);
  // const [selectedCohort, setSelectedCohort] = useState("");

  const handleCohortClick = (cohortCode) => {
    // setSelectedCohort(cohortCode);
    if(cohortCode === "All Students") {
        setFilteredStudents(data)
    }
    else  {

        const filterStudents = data.filter((student) => {
            const formattedCohortCode = student.cohort.cohortCode;
            const selectedCohortCode = cohortCode.split(" ").join(""); 
            const formattedCohortCodeWithoutSpaces = formattedCohortCode.split(" ").join(""); 
            return formattedCohortCodeWithoutSpaces === selectedCohortCode;
        })
        setFilteredStudents(filterStudents)

    }    
    
};
  
 


  return (
    <div>
    <Header />
      <Cohorts data={data} Students={Students}  handleCohortClick={handleCohortClick} />
      {/* <Comments comments = {comments} setComments ={setComments} /> */}
      <div className="students-container">
      <h2>All Students</h2>
        <p>Total Students: {filteredStudents.length}</p>
        {filteredStudents.map((student) => (
          <Students student={student} />
          ))}
      </div>

    
    </div>
  );
}

export default App;
