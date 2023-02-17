function Cohorts ({studentsData, onSelectedCohort}) {
    const StudentsCohortList = studentsData.map((cohort) => {
        return cohort.cohort.cohortCode;
    })
    const cohortTypes = new Set (StudentsCohortList); // Set
    const cohortList = Array.from(cohortTypes);

    const seasons = ["Winter", "Fall", "Summer", "Spring"]; 
    const regexp = /(.+)(\d{4})/; // grabs all values and splits it by the second rule which grabs 4 digits
    const fixedCohortList = cohortList.map((cohort) => {
    const [season, year] = regexp.exec(cohort).slice(1);
    //console.log(regexp.exec(cohort).slice(1))
    return [season, year, seasons.indexOf(season)];
    })
    .sort((lhs, rhs) => {
      return -lhs[1] - -rhs[1] || lhs[2] - rhs[2];
    })
    .map((element) => element[0] + " " + element[1]);


    return (
        <div>
            <ul>
                <li onClick={()=>onSelectedCohort()}>All Student</li>
                {fixedCohortList.map((cohort, index) => {
                return (
                    <li key={index} onClick={()=>onSelectedCohort(cohort)}>{cohort}</li>
                )})}
            </ul>
        </div>
    )
}
export default Cohorts