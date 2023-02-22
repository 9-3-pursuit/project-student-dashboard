import Header from "./Componets/Header/Header";
import CohortList from "./Componets/CohortList/CohortList";
import StudentList from "./Componets/StudentList/StudentList";
import { useState } from "react";
import { studentData } from "./data/data";

export default function App() {
  const OnScreenInitalState = {
    filter: "All Students",
    students: studentData,
  };
  const [studentsOnScreen, setStudentsOnScreen] = useState(OnScreenInitalState);

  function handleClick(newCohortCode) {
    if (newCohortCode === "All Students") {
      setStudentsOnScreen(OnScreenInitalState);
    } else {
      const updatedStudentList = studentData.filter((student) => {
        return student.cohort.cohortCode === newCohortCode;
      });
      setStudentsOnScreen({
        filter: newCohortCode,
        students: updatedStudentList,
      });
    }
  }

  return (
    <>
      <Header />
      <main>
        <CohortList handleClick={handleClick} />
        <StudentList studentsOnScreen={studentsOnScreen} />
      </main>
    </>
  );
}
