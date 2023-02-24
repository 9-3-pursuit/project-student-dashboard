import students from "../data/data.json";
import React from "react";

function CohortList() {
  <h2>CohortList</h2>;
  return;
}

const seasons = ["Fall", "Winter", "Spring", "Summer"];

function getAllCohortsList(students) {
  //   const cohorts = new Set();
  console.log(students);
}

getAllCohortsList(students);

const allCohorts = students.map((student) => student.cohort.cohortCode);

// console.log(students);

console.log(allCohorts);

//   for (let cohort of allCohorts) {
//     cohorts.add(cohort);

const cohortIDs = Array.from(allCohorts);
console.log(cohortIDs);

const finalCohortList = cohortIDs.map((cohortId) => {
  const studentBelongingToCohort = students.find(
    (student) => student.cohort.cohortCode === cohortId
  );
  return {
    id: studentBelongingToCohort.cohort.cohortCode,
    startDate: new Date(studentBelongingToCohort.cohort.cohortStartDate),
    displayName: formatCohortName(studentBelongingToCohort.cohort.cohortCode),
  };
});
console.log(finalCohortList);

function formatCohortName(cohortId) {
  console.log(cohortId);
}
export default CohortList;
