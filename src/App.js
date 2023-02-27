import React from "react";
import "./styles.css";
import Header from "./Components/Header.js"
import data from "./data/data.json";
import ListOfCohorts from "./Components/ListOfCohorts.js";
import StudentDetails from "./Components/StudentDetails.js";
import { useState } from "react"; 
import StudentList from "./Components/StudentList";


function App() {
  
 const [info, setInfo] = useState(data)
 const [cohort,setCohort] = useState("All Student")

  return (
    
    <div>
        <div className="Header"> <Header /></div>
        <div className="Container">
        <div className="ListOfCohorts">  <ListOfCohorts info={info} setCohort={setCohort} /> </div>
        <div className="StudentList"> <StudentList info={info} setInfo={setInfo} cohort={cohort}/> </div>
        </div>
    </div>
  )
 
}

export default App;
