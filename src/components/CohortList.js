
export default function CohortList({ studentData }) {

    const cohortSet = new Set();
    studentData.map(student => cohortSet.add(`${student.cohort.cohortCode} ${student.cohort.cohortStartDate}`));
    const cohortArray = Array.from(cohortSet);
    const seasonAndDateArray = cohortArray.map(date => date.split(" "))
    const sortedSeasonAndDateArray = seasonAndDateArray.sort((numericDateA, numericDateB) => new Date(numericDateB[1]) - new Date(numericDateA[1]))
    const sortedSeasonsArray = sortedSeasonAndDateArray.reduce((newSeasonArr, seasonAndDateArr) => {
        if (!newSeasonArr.includes(seasonAndDateArr[0])) {
            newSeasonArr.push(seasonAndDateArr[0])
        }
        return newSeasonArr
    }, [])
    const spacedSeasonsArray = sortedSeasonsArray.map(season => {
        const spacedSeason = season.split('')
        return spacedSeason
    })
    const sortedAndSpacedSeasons = spacedSeasonsArray.map(spacedSeasons => {
        spacedSeasons.splice(-4, 0, " ")
        const formattedSeason = spacedSeasons.join("")
        return formattedSeason
    })
    
    console.log(sortedAndSpacedSeasons)
    
    return(
        <div className="cohortDiv">
            <h1 className="cohortHeader">Choose a Class by Start Date</h1>
            <div className="cohortDate">
                
            </div>

        </div>
    )
}