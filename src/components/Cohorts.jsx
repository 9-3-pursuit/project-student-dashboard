import "../styles/Cohorts.css";

const Cohorts = ({ studentData, handleFilterStudentsByCohortClick }) => {
  const organizedUniqueCohorts = extractAndOrganizeUniqueCohorts(studentData);

  return (
    <div className="cohorts-container">
      <h2>Choose a Class by Start Date</h2>
      <ul>
        <li onClick={() => handleFilterStudentsByCohortClick("all")}>{"All Students"}</li>
        {organizedUniqueCohorts.map((cohort, index) => {
          return (
            <li key={index} onClick={() => handleFilterStudentsByCohortClick(cohort)}>
              {cohort}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const extractAndOrganizeUniqueCohorts = (studentData) => {
  const cohortCodes = studentData.map((student) => student.cohort.cohortCode);

  const uniqueCohortCodes = Array.from(new Set(cohortCodes));

  const seasonOrder = ["Winter", "Fall", "Summer", "Spring"];

  const regexp = /(.+)(\d{4})/;

  const organizedCohortsBySeasonAndYear = uniqueCohortCodes
    .map((cohort) => {
      const [season, year] = regexp.exec(cohort).slice(1);
      return [season, year, seasonOrder.indexOf(season)];
    })
    .sort((lhs, rhs) => {
      return -lhs[1] - -rhs[1] || lhs[2] - rhs[2];
    })
    .map((element) => `${element[0]} ${element[1]}`);

  return organizedCohortsBySeasonAndYear;
};

export default Cohorts;
