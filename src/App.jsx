import { React, useState } from "react";
import studentData from "./data/data.json";
import Cohorts from "./components/Cohorts";
import Header from "./components/Header";
import Students from "./components/Students";

import "./styles/App.css";

const App = () => {
  const [studentDataClone, setStudentDataClone] = useState(studentData);

  const addNewNoteToStudent = (studentID, newNote) => {
    const clonedStudentDataForNoteUpdate = studentData;
    const studentFoundInClonedStudentData = clonedStudentDataForNoteUpdate.find((student) => studentID === student.id);
    studentFoundInClonedStudentData.notes.push(newNote);
    setStudentDataClone(clonedStudentDataForNoteUpdate);
  };

  const handleFilterStudentsByCohortClick = (cohort) => {
    if (cohort === "all") {
      setStudentDataClone(studentData);
    } else {
      const reformattedCohortCode = cohort.replace(" ", "");
      const clonedStudentDataToFilterByCohort = studentData;
      const filterStudentsByCohortCode = clonedStudentDataToFilterByCohort.filter((student) => student.cohort.cohortCode === reformattedCohortCode);

      setStudentDataClone(filterStudentsByCohortCode);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <Cohorts studentData={studentData} handleFilterStudentsByCohortClick={handleFilterStudentsByCohortClick} />
        <Students studentDataClone={studentDataClone} addNewNoteToStudent={addNewNoteToStudent} />
      </div>
    </div>
  );
};

export default App;
