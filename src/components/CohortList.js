import Cohorts from "./Cohorts";

export default function CohortList({ studentData }) {

    
    
    return(
        <div className="cohortDiv">
            <h1 className="cohortHeader">Choose a Class by Start Date</h1>
            <div className="cohortDate">
                <h4>All Students</h4>
                <Cohorts studentData={studentData} />
            </div>

        </div>
    )
}