import students from "../data/data.json";

function CohortList() {
  <h2>CohortList</h2>;
  return;
}

const seasons = ["Fall", "Winter", "Spring", "Summer"];

const cohort = {
  id: "Fall2026",
  startDate: new Date("09/08/2026"),
  displayName: "Fall 2026",
};

const allCohorts = students.map((student) => student.cohort.corhortCode);

console.log(students);

console.log(allCohorts.length);

// //   const uniqueCohort = new Set();

export default CohortList;
