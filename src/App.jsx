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

  const handleFilterStudentsByCohortClick = (cohort) => {};

  return (
    <div>
      <h1>Student Dashboard</h1>
    </div>
  );
};

export default App;
