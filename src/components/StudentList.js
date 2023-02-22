import Students from "./Students";
import OneOnOneForm from "./OneOnOneform";


export default function StudentList({ cohort, currentCohortArray, studentData }) {

   
    return(
        <div className="studentListDiv">
            <h2 className="studentListHeader">{cohort}</h2>
            <p className="totalStudents">Total Students: <span className="studentTotalSpan">{currentCohortArray.length || studentData.length}</span></p>
            <div className="studentDivs">
                {currentCohortArray.map(student => {
                return(
                    <Students 
                        key={student.id}
                        student={student}
                    />
                )
                })}
            </div>

        </div>
        
    )
}