const Cohorts = ({info, setCohort}) => {
    function chooseCohort(x) {
       setCohort(x)
    }

    function removeDuplicateCohort(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index)
    }

  let duplicateStudentArr = removeDuplicateCohort(info.map((student) => student.cohort.cohortCode)).map((x) => {
    return {cohortSeasonYear: x, cohortYearOnly: x.replace(/\D/g,'')} } ).sort((a, b) => {return (a.cohortYearOnly - b.cohortYearOnly)})
  

  duplicateStudentArr.unshift({cohortSeasonYear: 'All Students', cohortYearOnly: ''})

    return (
        <div className="cohorts">
            <h2> 📚 Choose a Class by Start Date 📅 </h2>
            
            <ul>
            {duplicateStudentArr.map((x, i) => <li key={i} onClick={() => chooseCohort(x.cohortSeasonYear)}>{x.cohortSeasonYear.replace(/\d+/g, '')+ " " + x.cohortYearOnly.replace(/\D/g,'')}<hr></hr></li>)}
            </ul>
        </div>
    )
         // Only need to use .sort() method to organize the cohorts by date, either in ascending or descending order.
}

export default Cohorts;