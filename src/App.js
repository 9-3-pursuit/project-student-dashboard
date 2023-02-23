// TODO: main js file w/ all props passed down

import { useState } from "react"
import React from "react"
import Info from "./data/data.json" // * import of object of student data
import Header from "./Components/Header.js" // * import of header info 
import Cohorts from "./Components/Cohorts" // * import of cohorts 
import StudentsData from "./Components/StudentsData.js" // * import of student info

function App() {
  const [info, setInfo] = useState(Info) // * state for data.json
  const [cohort, setCohort] = useState("All Students") // * state for cohort data 

  //  pass setInfo setter to  info variable into line 33 
  // ^ --- will contribute to the comment section updating 
  // moving app.js stuff to comps. then down to the desired comps

  // * returns the hooked function info from the corresponding js files
  //contains all props need to pass down
  return (
    <div>
      <Header />
      <main>
        <Cohorts info={info} setCohort={setCohort} />
        <StudentsData
          info={info}
          setInfo={setInfo}
          cohort={cohort} />
         
      </main>
    </div>

  );
}

export default App;
