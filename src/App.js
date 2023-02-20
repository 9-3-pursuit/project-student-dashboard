
import React from "react"
import Header from  "./components/Header.js"
import Cohorts from "./components/Cohorts.js"
import Students from "./components/Students.js"

import Data from "./data/data.json"
import { useState } from "react";






function App() {
  const [info,setInfo] = useState(Data) 
  const [cohort, setCohort] = useState("All Student")
  const [name,setName] = useState("Florence")
  
  return (
   <>
    
      <Header name={name}/>
    
    <main>
     
      <Cohorts info={info} setCohort={setCohort} name={name} setName={setName} />
      <Students info={info}  setInfo={setInfo} cohort={cohort}/>
    </main>
   
    </> 
   
  );
}

export default App;
