

export default function CohortList({data , setActiveCohort}) {
    const cohortObj = new Set();
    data.map((studentsinfo) => {
        cohortObj.add(`${studentsinfo.cohort.cohortCode} ${studentsinfo.cohort.cohortStartDate}`)
        return cohortObj;
    })
    const cohortArr = Array.from(cohortObj)
    const formatArr = cohortArr.map((cohortString) => {
        return cohortString.split(' ')
    })
    const sortedByDateArr = formatArr.sort((a,b) => {
        return new Date(a[1]) - new Date(b[1])
    })
    cohortObj.clear()
    sortedByDateArr.map((newDatearr) => {
        return cohortObj.add(newDatearr[0])
    })
    const sortedCohortArr = Array.from(cohortObj)
    const formattedCohortArray = sortedCohortArr.map((cohort, i) => {
        const cohortSplit = cohort.split("")
        cohortSplit.splice(-4, 0, " ")
        const cohortStart = cohortSplit.join("")
        return(
            <div key={i}> 
                <h5 className="cohort-title" onClick={() => {
                        setActiveCohort(cohort)
                    }}
                >
                        {cohortStart}
                </h5>
                <hr></hr>                            
            </div>
        )
    })
   
    return (
        <div className="cohort-list">
            <h2>Choose a Class by Start Date</h2>
            <h5 onClick={() => {
                        setActiveCohort("All Students")
                    }}>All Students</h5>
            <hr></hr>

            <h5>{formattedCohortArray}</h5>
          
        </div>
    ) ;
  }
  