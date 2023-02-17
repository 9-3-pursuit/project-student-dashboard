import Header from "./componets/Header/Header";
import CohortList from "./componets/CohortList/CohortList";
import StudentList from "./componets/StudentList/StudentList";
import { useState } from "react";

function App() {
  const [studentList, setStudentList] = useState();
  return (
    <>
      <Header />
      <main>
        <CohortList />
        <StudentList />
      </main>
    </>
  );
}

export default App;
