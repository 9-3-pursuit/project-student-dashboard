import Students from "./Students"

export default function StudentList({ cohort, currentCohortArray, studentData }) {

    return(
        <div className="studentListDiv">
            <h2 className="studentListHeader">{cohort}</h2>
            <p className="totalStudents">Total Students: <span className="studentTotalSpan">{currentCohortArray.length || studentData.length}</span></p>
            <div className="studentDivs">
                <Students currentCohortArray={currentCohortArray} />
            </div>
        </div>
        
    )
}