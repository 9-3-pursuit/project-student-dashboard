

export default function Cohorts({ studentData, setCohort, addSpaceBetweenCohort }) {
    
    const cohortSet = new Set();
    studentData.map(student => cohortSet.add(`${student.cohort.cohortCode} ${student.cohort.cohortStartDate}`));
    const unsortedCohortArray = Array.from(cohortSet);
    const seasonAndDateArray = unsortedCohortArray.map(date => date.split(" "));
    const sortedSeasonAndDateArray = seasonAndDateArray.sort((numericDateA, numericDateB) => new Date(numericDateB[1]) - new Date(numericDateA[1]));
    const sortedCohortsArray = sortedSeasonAndDateArray.reduce((newSeasonArr, seasonAndDateArr) => {
        if (!newSeasonArr.includes(seasonAndDateArr[0])) {
            newSeasonArr.push(seasonAndDateArr[0])
        }
        return newSeasonArr
    }, []);

    const sortedAndFormattedCohorts = sortedCohortsArray.map(spacedLettersArray => {
        const formattedSeason = addSpaceBetweenCohort(spacedLettersArray)
        return formattedSeason;
    });

    function handleClick(cohorts) {
        setCohort(cohorts)
    }

    
    
    return(
        <div>
            <h4 className="cohorts" onClick={() => handleClick("All Students")}>All Students</h4>
            {sortedAndFormattedCohorts.map(cohorts => {
                return(
                    <h4 key={cohorts} className="cohorts" onClick={() => handleClick(cohorts)}>{cohorts}</h4>
                )
            })}
        </div>
    ) 
}
