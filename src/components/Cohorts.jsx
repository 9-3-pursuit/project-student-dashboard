import "../styles/Cohorts.css";

const Cohorts = ({ studentData, handleFilterStudentsByCohortClick }) => {
  const organizedUniqueCohorts = extractAndOrganizeUniqueCohorts(studentData);

  return (
    <div className="cohorts-container col-span-2 col-end-3 px-5 bg-gradient-to-r from-teal-200">
      <h2 className="text-3xl py-3 border-b-4 border-slate-600">Choose Cohort</h2>
      <ul className="py-4">
        <li className="text-xl py-2 border-b-2 border-zinc-600 hover:text-3xl hover:font-bold hover:border-b-4 hover:text-sky-700" onClick={() => handleFilterStudentsByCohortClick("all")}>
          <span>{"All Students"}</span>
        </li>
        {organizedUniqueCohorts.map((cohort, index) => {
          return (
            <li className="text-xl py-2 border-b-2 border-zinc-600 hover:text-3xl hover:font-bold hover:border-b-4 hover:text-sky-700" key={index} onClick={() => handleFilterStudentsByCohortClick(cohort)}>
              <span>{cohort}</span>
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
