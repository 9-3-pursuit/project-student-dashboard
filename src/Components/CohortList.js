import students from "../data/data.json";
import React from "react";

function CohortList() {
  const finalCohortList = {};
  // console.log(students);
  students.forEach((student) => {
    if (finalCohortList[student.cohort.cohortCode]) {
      finalCohortList[student.cohort.cohortCode].push(student);
    } else {
      finalCohortList[student.cohort.cohortCode] = [student];
    }
  });
  return <h2>Choose a Class by Start Date</h2>;
}

const seasons = ["Winter", "Spring", "Summer", "Fall"];

function getAllCohortsList(students) {
  //   const cohort = new Set();
  //   console.log(students);
}

// cohorts.add("hello");
// cohorts.add("hello");

// console.log(cohorts);

getAllCohortsList(students);

// console.log(students);

// console.log(allCohorts);

// console.log(cohorts);

// console.log(allCohorts);

// console.log(cohortIDs);

// console.log(finalCohortList);
// const finalCohortList = cohortIDs.map((cohortId) => {
//   const studentBelongingToCohort = students.find(
//     (student) => student.cohort.cohortCode === cohortId
//   );
//   return {
//     id: studentBelongingToCohort.cohort.cohortCode,
//     startDate: new Date(studentBelongingToCohort.cohort.cohortStartDate),
//     displayName: formatCohortName(studentBelongingToCohort.cohort.cohortCode),
//   };
// });

// console.log(finalCohortList);

function formatCohortName() {
  const cohorts = new Set();
  const allCohorts = students.map((student) => student.cohort.cohortCode);
  for (let cohort of allCohorts) {
    cohorts.add(cohort);
  }
  const cohortIDs = Array.from(cohorts);
  console.log(cohortIDs);
  const formatCohortIds = cohortIDs.map((cohortId) => {
    return 
  });
  //   console.log(cohortId);
}
formatCohortName()
export default CohortList;
