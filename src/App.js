import { useState } from "react"; 
import Header from "./Components/Header.js"
import ListOfCohorts from "./Components/ListOfCohorts.js";
import StudentDetails from "./Components/StudentDetails.js";
import data from "./data/data.json";





function App() {
  console.log(data)
  return (
    <div>
      <Header />
      <StudentDetails />
      <ListOfCohorts data={data} />
    </div>
  );
 
}

export default App;
