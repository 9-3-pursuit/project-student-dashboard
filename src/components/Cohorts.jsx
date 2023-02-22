import "../styles/Cohorts.css";

const Cohorts = ({ studentData, handleFilterStudentsByCohortClick, cohortSelected, darkMode }) => {
  const organizedUniqueCohorts = extractAndOrganizeUniqueCohorts(studentData);
  console.log(`This is from Cohorts: ${darkMode}`);

  return (
    <div className="cohorts-container lg:w-60 px-5 bg-gradient-to-r from-emerald-200 grid grid-rows-[10%,90%]">
      <div>
        <h2 className="text-3xl py-3 border-b-4 text-bold border-slate-600">Choose Cohort</h2>
      </div>
      <div>
        <ul className="py-4">
          <li
            className={`text-xl py-2 border-b-2 border-zinc-600 hover:text-2xl hover:font-bold hover:border-b-4 hover:text-emerald-700 ${
              cohortSelected === "All Students" ? "text-3xl font-bold border-b-4 bg-gradient-to-r text-emerald-600 from-emerald-400 rounded" : ""
            }`}
            onClick={() => handleFilterStudentsByCohortClick("All Students")}
          >
            <span>{"All Students"}</span>
          </li>
          {organizedUniqueCohorts.map((cohort, index) => {
            return (
              <li
                className={`text-xl pl-2 py-2 border-b-2 border-zinc-600 hover:text-2xl hover:font-bold hover:border-b-4 hover:text-emerald-700 ${
                  cohortSelected === cohort ? "text-3xl font-bold border-b-4 text-emerald-600 bg-gradient-to-r from-emerald-400 rounded" : ""
                }`}
                key={index}
                onClick={() => handleFilterStudentsByCohortClick(cohort)}
              >
                <span>{cohort}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const extractAndOrganizeUniqueCohorts = (studentData) => {
  const cohortCodes = studentData.map((student) => student.cohort.cohortCode);

  const uniqueCohortCodes = Array.from(new Set(cohortCodes));

  const seasonOrder = ["Winter", "Fall", "Summer", "Spring"];

  // pattern not a directive to give part of a string - description
  // not an action is just data
  // expressing a pattern
  const regexp = /(.+)(\d{4})/;
  // 4 digits preceded by at least one character

  // ! this is exec() is doing
  // capturing group the first (pattern)
  // two capturing groups in line 33

  const organizedCohortsBySeasonAndYear = uniqueCohortCodes
    .map((cohort) => {
      // splits it
      const [season, year] = regexp.exec(cohort).slice(1);
      return [season, year, seasonOrder.indexOf(season)];
    })
    .sort((lhs, rhs) => {
      return -lhs[1] - -rhs[1] || lhs[2] - rhs[2];
    })
    .map((element) => `${element[0]} ${element[1]}`);

  return organizedCohortsBySeasonAndYear;
};

// a regular expression is just a pattern that could appear in a string
export default Cohorts;
