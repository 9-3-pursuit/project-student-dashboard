
export default function Cohorts({ studentData}) {
    
    const cohortSet = new Set();
    studentData.map(student => cohortSet.add(`${student.cohort.cohortCode} ${student.cohort.cohortStartDate}`));
    const unsortedCohortArray = Array.from(cohortSet);
    const seasonAndDateArray = unsortedCohortArray.map(date => date.split(" "))
    const sortedSeasonAndDateArray = seasonAndDateArray.sort((numericDateA, numericDateB) => new Date(numericDateB[1]) - new Date(numericDateA[1]))
    const sortedCohortsArray = sortedSeasonAndDateArray.reduce((newSeasonArr, seasonAndDateArr) => {
        if (!newSeasonArr.includes(seasonAndDateArr[0])) {
            newSeasonArr.push(seasonAndDateArr[0])
        }
        return newSeasonArr
    }, [])
    const spacedLettersCohortsArray = sortedCohortsArray.map(cohort => {
        const spacedLetters = cohort.split('')
        return spacedLetters
    })
    const sortedAndFormattedCohorts = spacedLettersCohortsArray.map(spacedLettersArray => {
        spacedLettersArray.splice(-4, 0, " ")
        const formattedSeason = spacedLettersArray.join("")
        return formattedSeason
    })
    
    return sortedAndFormattedCohorts.map(cohorts => {
        return(
            <h4 key={cohorts} className="cohorts">{cohorts}</h4>
        )
    })

}