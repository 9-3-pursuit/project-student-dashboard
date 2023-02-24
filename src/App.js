import React from "react";
import Header from "./Components/Header"
import Cohort from "./Components/Cohort"
import Student from "./Components/Student"
import Data from "./data/data.json"
import { useState } from "react";


function App() {
  const [info,setInfo] = useState(Data)
  const [cohort,setCohort] = useState("All student")

  return (
    <div>
     <Header/>
     <main>
        <Cohort info={info} setCohort={setCohort}/>
        <Student info={info} cohort={cohort} setInfo={setInfo}/>
        
      </main>
     
    </div>
  );
}

export default App;

