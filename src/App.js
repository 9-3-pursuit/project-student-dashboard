import Header from "./componets/Header/Header";
import CohortList from "./componets/CohortList/CohortList";
import StudentList from "./componets/StudentList/StudentList";
import { useState } from "react";
import { studentData } from "./data/data";

function App() {
  const INITIAL_STUDENT_STATE = [...studentData];
  const INITIAL_FILTER_STATE = ["All Students"];
  const [studentList, setStudentList] = useState(INITIAL_STUDENT_STATE);
  const [cohorFiler, setCohortFilter] = useState(INITIAL_FILTER_STATE);

  function handleClick() {
    const updatedStudentList = studentData.filter(
      (student) => student.cohort.cohortCode === cohorFiler
    );
    cohorFiler === "All Students"
      ? setStudentList(INITIAL_STUDENT_STATE)
      : setStudentList(updatedStudentList);
  }

  return (
    <>
      <Header />
      <main>
        <CohortList
          handleClick={handleClick}
          setCohortFilter={setCohortFilter}
        />
        <StudentList cohortFiler={cohorFiler} />
      </main>
    </>
  );
}

export default App;
