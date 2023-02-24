
import React, { useState } from "react";
import "./Students.css";
//import Form "./Form.css";
import More from "./More"
import studentData from "./studentData";
import Cohort from "./Cohort";




function Students({ Data, cohort }) {

  
  const studentData = Data.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
    }).format(dob);
    
    return <studentData el={el} birthday={birthday} />;
  });
  const filteredStudents = Data.filter((student) => {
    return student.cohort.cohortCode === cohort;
  });
  const filteredData = filteredStudents.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
    }).format(dob);

    return <studentData el={el} birthday={birthday} />;
  });
  let spacing = cohort.replace(/[^a-zA-Z]+/g, "");
  return (
    <>
      <h2 className="studentText">
        {cohort === "All Students" ? cohort : spacing + " " + cohort.slice(-4)}
      </h2>
      <h3 className="studentText">
        Total Students:{" "}
        {cohort === "All Students" ? studentData.length : filteredData.length}{" "}
      </h3>
      <div className="Return">
        {cohort === "All Students" ? studentData : filteredData}
      </div>
    </>
  );
  
}

export default Students;