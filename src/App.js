import { useState } from "react";
import studentData from "./data/data.json"
import TopBar from "./Components/TopBar";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
// // for static site
// import spring2025 from "./data/StudentData";
// // for static site
import cohortListData from "./data/CohortsData";


function App() {
  const [activeCohort, setActiveCohort] = useState("All");

  const arrayOfCohortLists = [
    cohortListData[0].id,
    cohortListData[1].id,
    cohortListData[2].id,
    cohortListData[3].id,
    cohortListData[4].id,
    cohortListData[5].id,
    cohortListData[6].id,
    cohortListData[7].id,
    cohortListData[8].id
  ]

  // console.log(arrayOfCohortLists);
  // console.log(activeCohort);

  return (
    <>
      <TopBar />
      <main className="container">
        <CohortList cohortListData={cohortListData} setActiveCohort={setActiveCohort} />
        {/* <StudentList studentData={studentData} spring2025={spring2025} /> */}
        <StudentList studentData={studentData} />
      </main>
    </>

  );
}
export default App;
