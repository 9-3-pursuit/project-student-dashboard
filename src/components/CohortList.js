import Cohorts from "./Cohorts";
import "./CohortList.css"

export default function CohortList({ studentData, addSpaceBetweenCohort, handleCohortClick }) {

    
    return(
        <div className="cohortDiv">
            <h2 className="cohortHeader">Choose a Class by Start Date</h2>
            <div className="cohortDate">
                <Cohorts 
                    studentData={studentData} 
                    addSpaceBetweenCohort={addSpaceBetweenCohort}
                    handleCohortClick={handleCohortClick}
                />
            </div>
        </div>
    )
}