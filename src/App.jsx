import { React, useState } from "react";
import studentData from "./data/data.json";
import { Header, Cohorts, Students } from "./components";

import "./styles/App.css";

const App = () => {
  const [studentDataClone, setStudentDataClone] = useState(studentData);
  const [cohortSelected, setCohortSelected] = useState("All Students");
  const [darkMode, setDarkMode] = useState(false);

  const addNewNoteToStudent = (studentID, newNote) => {
    // avoid state mutation / refactor
    // how much of the app is rendering
    // react profiler - chrome dev tools
    const clonedStudentDataForNoteUpdate = studentData;
    const studentFoundInClonedStudentData = clonedStudentDataForNoteUpdate.find((student) => studentID === student.id);
    studentFoundInClonedStudentData.notes.push(newNote);
    setStudentDataClone(clonedStudentDataForNoteUpdate);
  };

  const handleFilterStudentsByCohortClick = (cohort) => {
    if (cohort === "All Students") {
      setStudentDataClone(studentData);
      setCohortSelected("All Students");
    } else {
      const reformattedCohortCode = cohort.replace(" ", "");
      const clonedStudentDataToFilterByCohort = studentData;
      const filterStudentsByCohortCode = clonedStudentDataToFilterByCohort.filter((student) => student.cohort.cohortCode === reformattedCohortCode);

      setStudentDataClone(filterStudentsByCohortCode);
      setCohortSelected(cohort);
    }
  };

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="grid grid-rows-[10vh,90vh] min-h-screen bg-emerald-200">
      <Header handleDarkModeClick={handleDarkModeClick} darkMode={darkMode} />
      <div className="grid lg:grid-cols-[40vw,60vw] xl:grid-cols-[30vw,70vw] 2xl:grid-cols-[20vw,80vw]">
        <Cohorts studentData={studentData} handleFilterStudentsByCohortClick={handleFilterStudentsByCohortClick} cohortSelected={cohortSelected} darkMode={darkMode} />
        <Students studentDataClone={studentDataClone} addNewNoteToStudent={addNewNoteToStudent} cohortSelected={cohortSelected} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
