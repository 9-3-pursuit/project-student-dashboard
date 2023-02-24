import "./Cohorts.css"
export default function Cohorts ({data, setActiveCohort, setStudentListState }) {
    const cohortData = data.map(student => {
        return student.cohort
      })
    cohortData.sort((a,b) => new Date(a.cohortStartDate) - new Date(b.cohortStartDate))
    const sortedData =  new Set(cohortData.map(cohort => cohort.cohortCode))
    function changeCohort (event) {
        event.preventDefault()
        setActiveCohort(event.target.textContent)
        setStudentListState(data.filter(student => student.cohort.cohortCode === ((event.target.textContent).split(" ").join(""))))
    }
    function allStudents (event) {
        event.preventDefault()
        setStudentListState(data)
        setActiveCohort(event.target.textContent)
    }
    return(
    <>
    <ul>
        <li key="all" onClick={allStudents} className="allCohorts">All</li>
        {Array.from(sortedData).map((cohortCode) => {return(<li  className="cohorts"key={cohortCode} onClick={changeCohort}>{cohortCode.slice(0,-4)} {cohortCode.slice(-4)} </li>)})}
    </ul>
    </>
    );
}