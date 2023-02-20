import React from 'react';
import data from './data/data.json';
import Students from './Component/Students';
import Header from './Component/Header';
import Cohorts from './Component/Cohorts';
// import { useState } from 'react';


function App() {

// const [showDetails, setShowDetails] = useState(false)
// Use set to get unique values for the cohorts codes
// Put the set into an array
// Sort data by cohort (winter, fall, summer, spring) then by the year
  
  
  
  return (
    <div>
      <Header />
      <Cohorts data={data} />
      <Students data={data}  />
    </div>
  );
}

export default App;
