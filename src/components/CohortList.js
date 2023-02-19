import Cohorts from "./Cohorts";
import "./CohortList.css"

export default function CohortList({ studentData }) {

    
    return(
        <div className="cohortDiv">
            <h2 className="cohortHeader">Choose a Class by Start Date</h2>
            <div className="cohortDate">
                <h4 className="cohorts">All Students</h4>
                <Cohorts studentData={studentData} />
            </div>

        </div>
    )
}