import Header from "./componets/Header/Header";
import CohortList from "./componets/CohortList/CohortList";
import StudentList from "./componets/StudentList/StudentList";
import { useState } from "react";
import data from "./data/data.json";

export default function App() {
  const OnScreenInitalState = {
    filter: "All Students",
    students: data,
  };
  const [studentsOnScreen, setStudentsOnScreen] = useState(OnScreenInitalState);

  function handleClick(newCohortCode) {
    if (newCohortCode === "All Students") {
      setStudentsOnScreen(OnScreenInitalState);
    } else {
      const updatedStudentList = data.filter((student) => {
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
