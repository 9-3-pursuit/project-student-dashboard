// import student from './student'
import "./CohortList.css"
export default function CohortList({students, handleCohortSelect, handleHumanReadableCohort, setCohort}) {
    const cohortsCount = {}
    students.forEach((student)=> {
        cohortsCount[student.cohort.cohortCode] = student.cohort.cohortStartDate
    })
    
    
    const cohorts = Object.keys(cohortsCount);
    cohorts.sort((a, b) => {
        return new Date(cohortsCount[a]) - new Date(cohortsCount[b])
    });
    


    return(
        <div className="cohortList">
            <h2>Choose a Class by Start Date </h2>
            <ul>
                <button key="all" className= "AllStudents" onClick={()=> setCohort(students)}>
                    All Students
                </button>

                
            {cohorts.map((cohortCode) => {
                return (
                    <button key={Math.random()} onClick={() => handleCohortSelect(cohortCode)}>
                        
                      {handleHumanReadableCohort(cohortCode)}  
                    </button>
                )

            })}
                    
                    
                   
                    
                
               
            </ul>
        </div>
    )
}