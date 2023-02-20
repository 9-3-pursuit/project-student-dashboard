import { useState } from 'react';
import React from 'react';
import Header from './Components/Header.js'
import Students from './Components/Students.js'
import Cohorts from './Components/Cohorts.js'

import StudentData from './data/data.json' 

function App() {
  const [info, setInfo] = useState(StudentData) 
  const [cohort, setCohort] = useState('All Students') 
  
  return (
    <div>
      <Header />

      <main>
        <Cohorts info={info}  setCohort={setCohort}/>
        <Students info={info} setInfo={setInfo} cohort={cohort}/>
      </main>
      {/* <Footer/> */}
      <h3>Footer Here</h3>

    </div>

  );
}


export default App;
