import data from "./data/data.json";

export default function CohortList({ data, setActiveCohort }) {
  function getCohortListFromStudentList(students) {
    // const allCohorts = student.map((student) => ({
    const uniqueCohorts = new Set();
    const allCohorts = students.map((student) => student.cohort.cohortCode);
    // id:student.cohort.cohortCode,
    // startDate: new Date(student.cohort.cohortStartDate),

    for (let cohortId of allCohorts) {
      uniqueCohorts.add(cohortId);
    }
    const cohortIDs = Array.from(uniqueCohorts);

    console.log("cohortIDs", cohortIDs);
    return cohortIDs;
    // cohortIDs.map((cohortId) => {
    //   const studentBelongingToCohort = students.find(
    //     (student) => student.cohort.cohortCode === cohortId
    //   );
    //   console.log("studentBelonging",studentBelongingToCohort);
    //   return {
    //     id: studentBelongingToCohort.cohort.cohortCode,
    //     startDate: new Date(studentBelongingToCohort.cohort.cohortStartDate),
    //     displayName: "Winter 2026",
    //   };
    // });
  }
  //   function formatCohortName(cohortId) {}
  const cohortList = getCohortListFromStudentList(data);

  return (
    <>
      <h2 className="cohortHeader">Choose A Class by Start Date</h2>
      <p className="cohorts">Cohort List</p>
      <ul className="cohortList">
        <li>
          <span>All Students</span>
        </li>
        {cohortList.map((cohort, i) => {
          //   console.log(student.cohort.cohortCode);
          const cohortYear = cohort.slice(-4);
          const cohortSeason = cohort.slice(0, -4);
          const cohortCodeFormatted = `${cohortSeason} ${cohortYear}`;

          return (
            <li
              key={i}
              onClick={() => {
                setActiveCohort(cohort);
              }}
            >
              <span>{cohortCodeFormatted}</span>
              <span></span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function removeDuplicates(data) {
  console.log("student", data);
}
const seasons = ["Winter", "Spring", "Summer", "Fall"];

const cohort = {
  id: "Winter2026",
  startDate: new Date("12/15/2026"),
  season: 0,
  displayName: "Winter 2026",
};
